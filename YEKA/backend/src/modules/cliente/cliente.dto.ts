import {
  IsEmail,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClienteDto {
  @IsInt()
  sedeOrigenId: number;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  dni?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  celular?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsObject()
  tallasMedidas?: Record<string, unknown>;

  @IsOptional()
  @IsObject()
  preferenciasHistorial?: Record<string, unknown>;
}

export class UpdateClienteDto {
  @IsOptional()
  @IsInt()
  sedeOrigenId?: number;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  nombre?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  dni?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  celular?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsObject()
  tallasMedidas?: Record<string, unknown>;

  @IsOptional()
  @IsObject()
  preferenciasHistorial?: Record<string, unknown>;

  @IsOptional()
  activo?: boolean;
}

export class BuscarClienteDto {
  @IsString()
  @MinLength(1)
  q: string;
}

export class ClienteResponseDto {
  id: number;
  sedeOrigenId: number;
  nombre: string;
  dni: string | null;
  celular: string | null;
  email: string | null;
  nivelPremium: number;
  tallasMedidas: Record<string, unknown> | null;
  preferenciasHistorial: Record<string, unknown> | null;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  facturasCount?: number;
}
