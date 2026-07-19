import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

export class UpdateMaterialDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
