import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

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
}
