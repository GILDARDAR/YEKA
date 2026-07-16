import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
