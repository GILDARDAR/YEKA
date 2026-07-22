@echo off
title Limpieza y Arranque de YEKA ERP...
echo ========================================================
echo     LIMPIEZA PROFUNDA Y ARRANQUE DE ERP YEKA
echo ========================================================
echo.

echo [1/4] Matando procesos viejos de Node.js...
taskkill /F /IM node.exe /T >nul 2>&1
echo Procesos de Node detenidos.
echo.

cd /d "C:\Users\gilda\PROYECTOS\YEKA"

echo [2/4] Borrando cache de compilacion del backend...
rmdir /s /q backend\dist >nul 2>&1
echo Cache borrada.
echo.

echo [3/4] Levantando Base de Datos (PostgreSQL en Docker)...
docker-compose up -d postgres
echo.

echo [4/4] Iniciando el Backend (NestJS) y Frontend (Vite)...
start "YEKA - Backend" cmd /k "cd backend && npm run start:dev"
start "YEKA - Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================================
echo   ¡Listo! El backend estara en:  http://localhost:3000
echo   Y el frontend estara en:       http://localhost:5173
echo ========================================================
echo.
echo Esperando unos segundos para que inicie...
timeout /t 5 >nul
start http://localhost:5173

exit
