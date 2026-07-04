const { Client } = require('pg');

const client = new Client({
  connectionString: "postgresql://yeka_user:yeka_password@localhost:5432/yeka",
});

async function main() {
  await client.connect();
  const res = await client.query('SELECT * FROM "Prenda" WHERE "facturaId" = 36');
  console.log("PRENDAS:", JSON.stringify(res.rows, null, 2));
}

main().finally(() => client.end());
