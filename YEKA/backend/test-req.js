const http = require('http');

async function login() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ correo: 'admin@test.com', clave: 'admin123' });
    const req = http.request({
      hostname: 'localhost', port: 3000, path: '/auth/login', method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': data.length }
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve(JSON.parse(body).access_token));
    });
    req.write(data);
    req.end();
  });
}

async function testApi(token) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ descripcion: 'prueba', activo: true });
    const req = http.request({
      hostname: 'localhost', port: 3000, path: '/tipo-arreglo', method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': data.length, 'Authorization': `Bearer ${token}` }
    }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.write(data);
    req.end();
  });
}

async function run() {
  const token = await login();
  console.log('Token:', !!token);
  if (token) {
    const res = await testApi(token);
    console.log('Result:', res);
  }
}

run();
