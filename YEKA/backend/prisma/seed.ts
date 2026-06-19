import { PrismaClient } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgresql://yeka_user:yeka_password@localhost:5432/yeka?schema=public';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Iniciando el script de seed...');

  // 1. Crear sede principal si no existe
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
  } else {
    console.log('ℹ️ La sede principal ya existe.');
  }

  // 2. Comprobar si el admin ya existe
  const adminEmail = 'admin@yeka.es';
  const existingAdmin = await prisma.usuario.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    // 3. Crear usuario Admin
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
  } else {
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
