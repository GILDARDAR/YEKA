import {
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { EstadoPago, MetodoPago } from '../../../generated/prisma/client';

export class CreateFacturaDto {
  @IsOptional()
  @IsInt()
  clienteId?: number;

  @IsInt()
  @IsNotEmpty({ message: 'El ID de la sede es requerido' })
  sedeId: number;

  @IsOptional()
  @IsString()
  notas?: string;
}

export class AddAbonoDto {
  @IsNumber()
  @Min(0.01, { message: 'El monto del abono debe ser mayor a cero' })
  monto: number;

  @IsEnum(MetodoPago, { message: 'El método de pago debe ser válido' })
  metodoPago: MetodoPago;

  @IsOptional()
  @IsString()
  notas?: string;
}

export class UpdateFacturaDto {
  @IsOptional()
  @IsString()
  notas?: string;
}

export class UpdateAbonoDto {
  @IsOptional()
  @IsNumber()
  @Min(0.01, { message: 'El monto del abono debe ser mayor a cero' })
  monto?: number;

  @IsOptional()
  @IsEnum(MetodoPago, { message: 'El método de pago debe ser válido' })
  metodoPago?: MetodoPago;

  @IsOptional()
  @IsString()
  notas?: string;
}

export class AbonoResponseDto {
  id: number;
  facturaId: number;
  monto: number;
  metodoPago: MetodoPago;
  notas: string | null;
  fecha: Date;
}

export class FacturaResponseDto {
  id: number;
  numero: string;
  clienteId: number | null;
  usuarioCreadorId: number;
  sedeId: number;
  subtotal: number;
  impuestosJson: Record<string, any> | null;
  total: number;
  estadoPago: EstadoPago;
  notas: string | null;
  createdAt: Date;
  updatedAt: Date;
  abonos?: AbonoResponseDto[];
  cliente?: any;
  prendas?: any[];
}
