import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Rol, TipoJornada } from '../../../generated/prisma/client';

export class CreateUsuarioDto {
  @IsInt()
  @IsNotEmpty({ message: 'El ID de la sede es requerido' })
  sedeId: number;

  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MaxLength(100)
  nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  dni?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;

  @IsOptional()
  @IsString()
  @Length(4, 4, { message: 'El PIN de acceso debe tener exactamente 4 dígitos' })
  pinAcceso?: string;

  @IsEnum(Rol, { message: 'El rol debe ser ADMIN, RECEPCION o TALLER' })
  @IsNotEmpty({ message: 'El rol es requerido' })
  rol: Rol;
}

export class UpdateUsuarioDto {
  @IsOptional()
  @IsInt()
  sedeId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  nombre?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  dni?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password?: string;

  @IsOptional()
  @IsString()
  @Length(4, 4, { message: 'El PIN de acceso debe tener exactamente 4 dígitos' })
  pinAcceso?: string;

  @IsOptional()
  @IsEnum(Rol)
  rol?: Rol;

  @IsOptional()
  activo?: boolean;
}

export class RegistrarJornadaDto {
  @IsEnum(TipoJornada, { message: 'El tipo debe ser ENTRADA o SALIDA' })
  @IsNotEmpty()
  tipo: TipoJornada;
}

export class UsuarioResponseDto {
  id: number;
  sedeId: number;
  nombre: string;
  dni: string | null;
  telefono: string | null;
  email: string;
  rol: Rol;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
}
