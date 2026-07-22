import { IsString, IsOptional, IsBoolean, IsArray, IsInt } from 'class-validator';

export class CreateTipoArregloDto {
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  zonasIds?: number[];
}

export class UpdateTipoArregloDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  zonasIds?: number[];
}
