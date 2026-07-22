import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateZonaDto {
  @IsString()
  descripcion: string;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;
}
