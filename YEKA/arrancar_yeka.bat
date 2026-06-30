@echo off
title Iniciando YEKA ERP...
echo ========================================================
echo                 INICIANDO ERP YEKA
echo ========================================================
echo.

:: Cambiamos al directorio del proyecto sin importar desde dónde se ejecute el .bat
cd /d "C:\Users\gilda\PROYECTOS\YEKA"

echo [1/3] Levantando Base de Datos (PostgreSQL en Docker)...
docker-compose up -d
echo.

echo [2/3] Iniciando el Backend (NestJS)...
:: Abre una nueva ventana de terminal para el backend
start "YEKA - Backend" cmd /k "cd backend && npm run start:dev" >> yeka.log

echo [3/3] Iniciando el Frontend (Vite + React)...
:: Abre una nueva ventana de terminal para el frontend
start "YEKA - Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================================
echo   Los servicios se estan iniciando en ventanas nuevas.
echo   El backend estara en:  http://localhost:3000
echo   El frontend estara en: http://localhost:5173
echo ========================================================
echo.
echo Presiona cualquier tecla para abrir el ERP en tu navegador y cerrar esta ventana...
pause >nul

:: Abrir el navegador por defecto
start http://localhost:5173

exit
