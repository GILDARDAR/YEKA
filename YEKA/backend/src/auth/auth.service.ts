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
        sedeId: user.sedeId,
      },
    };
  }

  async login(dto: LoginDto) {
    console.log(`[LOGIN DEBUG] Iniciando sesión para: ${dto.email}`);
    const user = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      console.log(`[LOGIN DEBUG] Fallo: El usuario con email ${dto.email} no existe en la base de datos.`);
      throw new UnauthorizedException('El usuario no existe');
    }

    // Print raw password and compare with DB hashed password
    console.log(`[LOGIN DEBUG] Comparando contraseñas para ${dto.email}:`);
    console.log(` -> Contraseña ingresada (texto claro): "${dto.password}"`);
    console.log(` -> Hash de contraseña en Base de Datos:  "${user.password}"`);

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      console.log(`[LOGIN DEBUG] Fallo: La contraseña ingresada no coincide con el hash guardado.`);
      throw new UnauthorizedException('La contraseña es incorrecta');
    }

    console.log(`[LOGIN DEBUG] Éxito: Contraseña válida. Iniciando sesión para ${user.nombre} (${user.rol}).`);
    const token = this.generateToken(user.id, user.email, user.rol);

    return {
      message: 'Logueado satisfactoriamente',
      token,
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        rol: user.rol,
        sedeId: user.sedeId,
      },
    };
  }

  private generateToken(userId: number, email: string, rol: Rol): string {
    const payload = { sub: userId, email, rol };
    return this.jwtService.sign(payload);
  }
}
