import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import { Rol } from '../../generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    let targetSedeId = dto.sedeId;
    if (!targetSedeId) {
      let sede = await this.prisma.sede.findFirst();
      if (!sede) {
        sede = await this.prisma.sede.create({
          data: {
            codigoSede: 'DFL',
            nombre: 'Sede Principal',
          },
        });
      }
      targetSedeId = sede.id;
    }

    const role = (dto.rol as Rol) || Rol.RECEPCION;

    const user = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        nombre: dto.nombre,
        rol: role,
        sedeId: targetSedeId,
      },
    });

    const token = this.generateToken(user.id, user.email, user.rol);

    return {
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        rol: user.rol,
      },
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const token = this.generateToken(user.id, user.email, user.rol);

    return {
      message: 'Sesión iniciada exitosamente',
      token,
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        rol: user.rol,
      },
    };
  }

  private generateToken(userId: number, email: string, rol: Rol): string {
    const payload = { sub: userId, email, rol };
    return this.jwtService.sign(payload);
  }
}
