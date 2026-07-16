import { IsString, IsOptional, IsBoolean, IsNumber, IsArray, IsInt } from 'class-validator';

export class CreateTipoPrendaDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsNumber()
  porcentajeDificultad?: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  materialesIds?: number[];
}

export class UpdateTipoPrendaDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsNumber()
  porcentajeDificultad?: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  materialesIds?: number[];
}
