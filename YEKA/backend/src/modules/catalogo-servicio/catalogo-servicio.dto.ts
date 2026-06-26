import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  IsArray,
} from 'class-validator';

export class CreateCatalogoServicioDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  tipoEspecifico: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  medidaBase: number;

  @IsInt()
  @Min(1)
  tiempoBase: number;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  categoriasFactoresIds?: number[];
}

export class UpdateCatalogoServicioDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  categoria?: string;

  @IsString()
  @IsOptional()
  tipoEspecifico?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @IsOptional()
  medidaBase?: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  tiempoBase?: number;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  categoriasFactoresIds?: number[];
}

export class CatalogoServicioResponseDto {
  id: number;
  nombre: string;
  categoria: string;
  tipoEspecifico: string;
  medidaBase: number;
  tiempoBase: number;
  activo: boolean;
  categoriasFactores: any[];
  createdAt: Date;
  updatedAt: Date;
}
