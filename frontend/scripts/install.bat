@echo off
chcp 65001 >nul
echo ========================================
echo Instalacao de Dependencias
echo ========================================
echo.

cd /d "%~dp0\.."

echo [1/3] Verificando versoes...
node --version
npm --version
echo.

echo [2/3] Instalando dependencias...
npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Falha na instalacao!
    pause
    exit /b %ERRORLEVEL%
)
echo.

echo [3/3] Verificando instalacao...
npm list @angular/core typescript --depth=0 2>nul
echo.

echo ========================================
echo Instalacao concluida!
echo ========================================
echo.
pause
