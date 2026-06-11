import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import { Rol } from '../../generated/prisma/client';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        message: string;
        token: string;
        user: {
            id: number;
            email: string;
            nombre: string;
            rol: Rol;
        };
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        token: string;
        user: {
            id: number;
            email: string;
            nombre: string;
            rol: Rol;
        };
    }>;
    private generateToken;
}
