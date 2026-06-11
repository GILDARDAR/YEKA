import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PrecioServicioDto {
  @IsInt()
  tipoPrendaId: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  medidaBase: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precioBase: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  medidaExtra: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precioExtra: number;
}

export class CreateCatalogoServicioDto {
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  tipoEspecifico: string;

  @IsInt()
  @Min(1)
  pesoPuntos: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PrecioServicioDto)
  preciosPorPrenda: PrecioServicioDto[];
}

export class UpdateCatalogoServicioDto {
  @IsString()
  @IsOptional()
  categoria?: string;

  @IsString()
  @IsOptional()
  tipoEspecifico?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  pesoPuntos?: number;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PrecioServicioDto)
  @IsOptional()
  preciosPorPrenda?: PrecioServicioDto[];
}

export class CatalogoServicioResponseDto {
  id: number;
  categoria: string;
  tipoEspecifico: string;
  pesoPuntos: number;
  activo: boolean;
  preciosPorPrenda: any[];
  createdAt: Date;
  updatedAt: Date;
}
