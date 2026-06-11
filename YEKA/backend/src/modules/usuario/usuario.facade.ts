import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UsuarioDAO } from './usuario.dao';
import {
  CreateUsuarioDto,
  UpdateUsuarioDto,
  UsuarioResponseDto,
} from './usuario.dto';
import * as bcrypt from 'bcrypt';
import { Usuario, RegistroJornada, TipoJornada } from '../../../generated/prisma/client';

function toResponseDto(user: Usuario): UsuarioResponseDto {
  return {
    id: user.id,
    sedeId: user.sedeId,
    nombre: user.nombre,
    dni: user.dni,
    telefono: user.telefono,
    email: user.email,
    rol: user.rol,
    activo: user.activo,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

@Injectable()
export class UsuarioFacade {
  constructor(private readonly usuarioDAO: UsuarioDAO) {}

  async getUsuarios(sedeId?: number): Promise<UsuarioResponseDto[]> {
    const users = await this.usuarioDAO.findAll(sedeId);
    return users.map(toResponseDto);
  }

  async getUsuarioById(id: number): Promise<UsuarioResponseDto> {
    const user = await this.usuarioDAO.findById(id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return toResponseDto(user);
  }

  async createUsuario(dto: CreateUsuarioDto): Promise<UsuarioResponseDto> {
    const existingEmail = await this.usuarioDAO.findByEmail(dto.email);
    if (existingEmail) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    if (dto.dni) {
      const existingDni = await this.usuarioDAO.findByDni(dto.dni);
      if (existingDni) {
        throw new ConflictException('El DNI ya está registrado');
      }
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    let hashedPin: string | undefined;
    if (dto.pinAcceso) {
      hashedPin = await bcrypt.hash(dto.pinAcceso, 10);
    }

    const user = await this.usuarioDAO.create({
      sedeId: dto.sedeId,
      nombre: dto.nombre,
      dni: dto.dni || null,
      telefono: dto.telefono || null,
      email: dto.email,
      password: hashedPassword,
      pinAcceso: hashedPin || null,
      rol: dto.rol,
    });

    return toResponseDto(user);
  }

  async updateUsuario(id: number, dto: UpdateUsuarioDto): Promise<UsuarioResponseDto> {
    const user = await this.usuarioDAO.findById(id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    const updateData: any = { ...dto };

    if (dto.email && dto.email !== user.email) {
      const existingEmail = await this.usuarioDAO.findByEmail(dto.email);
      if (existingEmail) {
        throw new ConflictException('El correo electrónico ya está registrado');
      }
    }

    if (dto.dni && dto.dni !== user.dni) {
      const existingDni = await this.usuarioDAO.findByDni(dto.dni);
      if (existingDni) {
        throw new ConflictException('El DNI ya está registrado');
      }
    }

    if (dto.password) {
      updateData.password = await bcrypt.hash(dto.password, 10);
    }

    if (dto.pinAcceso) {
      updateData.pinAcceso = await bcrypt.hash(dto.pinAcceso, 10);
    }

    const updated = await this.usuarioDAO.update(id, updateData);
    return toResponseDto(updated);
  }

  async deleteUsuario(id: number): Promise<UsuarioResponseDto> {
    const user = await this.usuarioDAO.findById(id);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    const deleted = await this.usuarioDAO.softDelete(id);
    return toResponseDto(deleted);
  }

  async registrarJornada(usuarioId: number, tipo: TipoJornada): Promise<RegistroJornada> {
    const user = await this.usuarioDAO.findById(usuarioId);
    if (!user) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no encontrado`);
    }

    const jornadasHoy = await this.usuarioDAO.getJornadasHoy(usuarioId);

    if (tipo === TipoJornada.ENTRADA) {
      // Cannot ENTRADA if last record today is ENTRADA
      if (jornadasHoy.length > 0 && jornadasHoy[jornadasHoy.length - 1].tipo === TipoJornada.ENTRADA) {
        throw new BadRequestException('Ya se ha registrado una entrada sin salida correspondiente');
      }
    } else {
      // Cannot SALIDA if no records today, or if last was SALIDA
      if (jornadasHoy.length === 0) {
        throw new BadRequestException('No se puede registrar salida sin haber registrado entrada hoy');
      }
      if (jornadasHoy[jornadasHoy.length - 1].tipo === TipoJornada.SALIDA) {
        throw new BadRequestException('Ya se ha registrado una salida para la última entrada');
      }
    }

    return this.usuarioDAO.registrarJornada(usuarioId, tipo);
  }

  async validateCredentials(email: string, password: string): Promise<Usuario | null> {
    const user = await this.usuarioDAO.findByEmail(email);
    if (!user || !user.activo) {
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  }

  async validatePin(usuarioId: number, pin: string): Promise<boolean> {
    const user = await this.usuarioDAO.findById(usuarioId);
    if (!user || !user.activo || !user.pinAcceso) {
      return false;
    }
    return bcrypt.compare(pin, user.pinAcceso);
  }
}
