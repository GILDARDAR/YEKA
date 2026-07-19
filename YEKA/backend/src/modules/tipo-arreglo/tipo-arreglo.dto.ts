import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateTipoArregloDto {
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

export class UpdateTipoArregloDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
