import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateZonaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
