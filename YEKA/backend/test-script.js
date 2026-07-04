const { PrismaClient } = require('./generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
  const factura = await prisma.factura.findFirst({
    include: {
      prendas: {
        include: {
          servicios: true
        }
      }
    }
  });
  console.log(JSON.stringify(factura, null, 2));
}

main().finally(() => prisma.$disconnect());
