import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { EstadoPrenda } from '../../../generated/prisma/client';

// ─── CREATE ───────────────────────────────────────────────────

export class CreatePrendaDto {
  @IsInt()
  facturaId: number;

  @IsInt()
  tipoPrendaId: number;

  @IsString()
  @IsNotEmpty()
  talla: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsOptional()
  @IsBoolean()
  esLujo?: boolean;

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  notas?: string;

  @IsOptional()
  @IsInt()
  tipoUrgenciaId?: number;

  @IsOptional()
  @IsInt()
  materialId?: number;
}

export class UpdatePrendaDto {
  @IsOptional()
  @IsInt()
  tipoPrendaId?: number;

  @IsOptional()
  @IsString()
  talla?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsBoolean()
  esLujo?: boolean;

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  notas?: string;

  @IsOptional()
  @IsInt()
  tipoUrgenciaId?: number;

  @IsOptional()
  @IsInt()
  materialId?: number;
}

// ─── ASIGNAR SERVICIO ─────────────────────────────────────────

export class AsignarServicioDto {
  @IsInt()
  @IsNotEmpty()
  servicioId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  medidaEntregada?: number;

  @IsString()
  @IsOptional()
  observaciones?: string;

  @IsInt()
  @IsOptional()
  materialId?: number;

  @IsInt()
  @IsOptional()
  tipoArregloId?: number;

  @IsInt()
  @IsOptional()
  zonaId?: number;
}

// ─── CAMBIAR ESTADO ───────────────────────────────────────────

export class CambiarEstadoDto {
  @IsEnum(EstadoPrenda)
  @IsNotEmpty()
  nuevoEstado: EstadoPrenda;

  @IsInt()
  @IsOptional()
  usuarioTallerId?: number;
}

// ─── SUBIR FOTO ───────────────────────────────────────────────

export class SubirFotoDto {
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  fotoUrl: string;
}

// ─── RESPONSE ─────────────────────────────────────────────────

export class PrendaResponseDto {
  id: number;
  facturaId: number;
  codigoQR: string;
  tipoPrendaId: number;
  talla: string;
  color: string;
  marca: string | null;
  estadoActual: EstadoPrenda;
  fechaCompromiso: Date | null;
  esLujo: boolean;
  fotoUrl: string | null;
  usuarioTallerId: number | null;
  fechaUltimaNotificacion: Date | null;
  notas: string | null;
  createdAt: Date;
  updatedAt: Date;
  tipoUrgenciaId: number | null;
  tipoUrgencia?: any;
  porcentajeAtencionAplicado?: string | null;
  factura?: any;
}

// ─── PRENDA SERVICIO RESPONSE ─────────────────────────────────

export class PrendaServicioResponseDto {
  id: number;
  prendaId: number;
  servicioId: number;
  medidaEntregada: string | null;
  tiempoCalculado: number | null;
  valorPorTiempo: string | null;
  valorFactoresCobro: string | null;
  precioBruto: string | null;
  precioFinal: string; // Decimal serialized as string
  observaciones: string | null;
  detallesCalculo?: any;
  materialId?: number | null;
  tipoArregloId?: number | null;
  zonaId?: number | null;
  createdAt: Date;
}
