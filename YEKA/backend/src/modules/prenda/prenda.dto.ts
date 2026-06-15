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
import { EstadoPrenda, TipoExpress } from '../../../generated/prisma/client';

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

  @IsEnum(TipoExpress)
  @IsNotEmpty()
  tipoExpress: TipoExpress;

  @IsString()
  @IsOptional()
  observaciones?: string;
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
  tipoExpress: TipoExpress;
  factura?: any;
}

// ─── PRENDA SERVICIO RESPONSE ─────────────────────────────────

export class PrendaServicioResponseDto {
  id: number;
  prendaId: number;
  servicioId: number;
  medidaEntregada: string | null;
  tipoExpress: TipoExpress;
  precioFinal: string; // Decimal serialized as string
  observaciones: string | null;
  createdAt: Date;
}
