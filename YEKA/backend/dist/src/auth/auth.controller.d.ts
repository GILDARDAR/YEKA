import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        token: string;
        user: {
            id: number;
            email: string;
            nombre: string;
            rol: import("../../generated/prisma/enums").Rol;
        };
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        token: string;
        user: {
            id: number;
            email: string;
            nombre: string;
            rol: import("../../generated/prisma/enums").Rol;
        };
    }>;
    getProfile(req: any): any;
}
