import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsInt,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateSedeDto {
  @IsString()
  @MaxLength(20)
  codigoSede: string;

  @IsString()
  @MaxLength(100)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  direccion?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacidadDiariaMax?: number;
}

export class UpdateSedeDto {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  codigoSede?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  nombre?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  direccion?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacidadDiariaMax?: number;

  @IsOptional()
  @IsBoolean()
  activa?: boolean;
}

export class SedeResponseDto {
  id: number;
  codigoSede: string;
  nombre: string;
  direccion: string | null;
  capacidadDiariaMax: number | null;
  activa: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CapacidadResponseDto {
  sedeId: number;
  fecha: string;
  capacidadDiariaMax: number | null;
  usado: number;
  disponible: number | null;
  porcentaje: number | null;
}
