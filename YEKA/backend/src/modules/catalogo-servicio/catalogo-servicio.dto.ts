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

  @IsInt()
  @IsOptional()
  tipoPrendaId?: number;

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

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  materialesIds?: number[];

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  tiposArregloIds?: number[];
}

export class UpdateCatalogoServicioDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsInt()
  @IsOptional()
  tipoPrendaId?: number;

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

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  materialesIds?: number[];

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  tiposArregloIds?: number[];
}

export class CatalogoServicioResponseDto {
  id: number;
  nombre: string;
  tipoPrendaId?: number;
  tipoPrenda?: any;
  tipoEspecifico: string;
  medidaBase: number;
  tiempoBase: number;
  activo: boolean;
  categoriasFactores: any[];
  materiales?: any[];
  tiposArreglo?: any[];
  createdAt: Date;
  updatedAt: Date;
}
