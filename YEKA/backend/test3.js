const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/src/app.module');
const { FacturaFacade } = require('./dist/src/modules/factura/factura.facade');

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const facade = app.get(FacturaFacade);
  
  const res = await facade.getFacturaById(36);
  console.log("FACADE FACTURA 36 PRENDAS:", JSON.stringify(res.prendas, null, 2));
  
  await app.close();
}

main().then(() => process.exit(0)).catch(err => {
  console.error(err);
  process.exit(1);
});
