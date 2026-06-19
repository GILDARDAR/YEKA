"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL || 'postgresql://yeka_user:yeka_password@localhost:5432/yeka?schema=public';
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('Iniciando el script de seed...');
    let sede = await prisma.sede.findFirst();
    if (!sede) {
        sede = await prisma.sede.create({
            data: {
                codigoSede: 'DFL',
                nombre: 'Sede Principal',
                activa: true,
            },
        });
        console.log('✅ Sede principal creada:', sede.nombre);
    }
    else {
        console.log('ℹ️ La sede principal ya existe.');
    }
    const adminEmail = 'admin@yeka.es';
    const existingAdmin = await prisma.usuario.findUnique({
        where: { email: adminEmail },
    });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = await prisma.usuario.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                nombre: 'Administrador',
                rol: 'ADMIN',
                sedeId: sede.id,
                activo: true,
            },
        });
        console.log('✅ Usuario administrador creado exitosamente.');
        console.log(`   Email: ${admin.email}`);
        console.log(`   Contraseña: admin123`);
    }
    else {
        console.log(`ℹ️ El usuario administrador (${adminEmail}) ya existe.`);
    }
}
main()
    .catch((e) => {
    console.error('❌ Error ejecutando el seed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    console.log('Seed finalizado.');
});
//# sourceMappingURL=seed.js.map