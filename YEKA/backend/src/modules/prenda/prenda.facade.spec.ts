import { Test, TestingModule } from '@nestjs/testing';

// Mock the generated Prisma client to avoid loading/evaluating the ESM/import.meta file in Jest.
jest.mock('../../../generated/prisma/client', () => {
  class DecimalMock {
    private value: any;
    constructor(v: any) {
      this.value = v;
    }
    mul(m: any) {
      // Mock simple multiplication for test purposes
      const val = typeof m === 'number' ? m : Number(m.toString());
      return new DecimalMock(Number(this.value) * val);
    }
    toString() {
      return String(this.value);
    }
    toNumber() {
      return Number(this.value);
    }
  }

  return {
    EstadoPrenda: {
      RECIBIDA: 'RECIBIDA',
      PENDIENTE_VALORACION: 'PENDIENTE_VALORACION',
      EN_PRODUCCION: 'EN_PRODUCCION',
      ESPERANDO_PRUEBA: 'ESPERANDO_PRUEBA',
      PENDIENTE_RECOGIDA: 'PENDIENTE_RECOGIDA',
      ENTREGADA: 'ENTREGADA',
      PROPIEDAD_TALLER: 'PROPIEDAD_TALLER',
    },
    TipoExpress: {
      NORMAL: 'NORMAL',
      EXPRESS_48H: 'EXPRESS_48H',
      EXPRESS_24H: 'EXPRESS_24H',
    },
    AccionAuditoria: {
      CREACION: 'CREACION',
      MODIFICACION: 'MODIFICACION',
      ANULACION: 'ANULACION',
      CAMBIO_ESTADO: 'CAMBIO_ESTADO',
      ABONO: 'ABONO',
    },
    Prisma: {
      Decimal: DecimalMock,
    },
  };
});

// Mock PrismaService so the original file (which extends PrismaClient and imports ESM files) is not loaded.
jest.mock('../../prisma/prisma.service', () => {
  return {
    PrismaService: class {},
  };
});

import { PrendaFacade } from './prenda.facade';
import { PrendaDAO } from './prenda.dao';
import { PrismaService } from '../../prisma/prisma.service';
import { FacturaFacade } from '../factura/factura.facade';
import { ConfigService } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';
import { TipoExpress, Prisma } from '../../../generated/prisma/client';

describe('PrendaFacade', () => {
  let facade: PrendaFacade;
  let prendaDAO: jest.Mocked<any>;
  let prismaService: jest.Mocked<any>;
  let facturaFacade: jest.Mocked<any>;
  let configService: jest.Mocked<any>;

  beforeEach(async () => {
    prendaDAO = {
      create: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      delete: jest.fn(),
      asignarServicio: jest.fn(),
    };

    prismaService = {
      factura: {
        findUnique: jest.fn(),
      },
      sede: {
        findUnique: jest.fn(),
      },
      catalogoServicio: {
        findUnique: jest.fn(),
      },
      usuario: {
        findUnique: jest.fn(),
      },
      auditLog: {
        create: jest.fn(),
      },
    };

    facturaFacade = {
      recalcularFactura: jest.fn(),
    };

    configService = {
      get: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrendaFacade,
        { provide: PrendaDAO, useValue: prendaDAO },
        { provide: PrismaService, useValue: prismaService },
        { provide: FacturaFacade, useValue: facturaFacade },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    facade = module.get<PrendaFacade>(PrendaFacade);
  });

  describe('createPrenda', () => {
    it('should create a prenda and update its QR code based on Sede code and ID', async () => {
      const mockFactura = { id: 10, sedeId: 2 };
      const mockSede = { id: 2, codigoSede: 'MAL' };
      const mockCreatedPrenda = {
        id: 15,
        facturaId: 10,
        tipoPrenda: 'Camisa',
        esLujo: false,
        codigoQR: 'TEMP-1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const mockUpdatedPrenda = {
        ...mockCreatedPrenda,
        codigoQR: 'MAL-2026-00015',
      };

      prismaService.factura.findUnique.mockResolvedValue(mockFactura);
      prismaService.sede.findUnique.mockResolvedValue(mockSede);
      prendaDAO.create.mockResolvedValue(mockCreatedPrenda);
      prendaDAO.update.mockResolvedValue(mockUpdatedPrenda);

      const result = await facade.createPrenda({
        facturaId: 10,
        tipoPrendaId: 1,
        esLujo: false,
      });

      expect(prismaService.factura.findUnique).toHaveBeenCalledWith({ where: { id: 10 } });
      expect(prismaService.sede.findUnique).toHaveBeenCalledWith({ where: { id: 2 } });
      expect(prendaDAO.create).toHaveBeenCalled();
      expect(prendaDAO.update).toHaveBeenCalledWith(15, { codigoQR: 'MAL-2026-00015' });
      expect(result.codigoQR).toBe('MAL-2026-00015');
    });

    it('should throw NotFoundException if invoice does not exist', async () => {
      prismaService.factura.findUnique.mockResolvedValue(null);

      await expect(
        facade.createPrenda({
          facturaId: 99,
          tipoPrendaId: 1,
        }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('asignarServicio', () => {
    it('should calculate final price with express multipliers and recalulate invoice', async () => {
      const mockPrenda = { id: 5, facturaId: 10 };
      const mockServicio = {
        id: 3,
        activo: true,
        precioBase: new Prisma.Decimal(20.0),
      };
      const mockPrendaServicio = {
        id: 1,
        prendaId: 5,
        servicioId: 3,
        tipoExpress: TipoExpress.EXPRESS_24H,
        precioFinal: new Prisma.Decimal(30.0),
        createdAt: new Date(),
      };

      prendaDAO.findById.mockResolvedValue(mockPrenda);
      prismaService.catalogoServicio.findUnique.mockResolvedValue(mockServicio);
      configService.get.mockReturnValue('1.50'); // 24H multiplier is 1.50
      prendaDAO.asignarServicio.mockResolvedValue(mockPrendaServicio);

      const result = await facade.asignarServicio(
        5,
        {
          servicioId: 3,
          tipoExpress: TipoExpress.EXPRESS_24H,
        },
        1, // logged in userId
      );

      expect(configService.get).toHaveBeenCalledWith('EXPRESS_24H_MULTIPLIER');
      expect(prendaDAO.asignarServicio).toHaveBeenCalledWith({
        prendaId: 5,
        servicioId: 3,
        tipoExpress: TipoExpress.EXPRESS_24H,
        precioFinal: new Prisma.Decimal(30.0),
      });
      expect(facturaFacade.recalcularFactura).toHaveBeenCalledWith(10);
      expect(prismaService.auditLog.create).toHaveBeenCalled();
      expect(result.precioFinal).toBe('30');
    });
  });
});
