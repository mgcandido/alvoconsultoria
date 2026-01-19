@echo off
chcp 65001 >nul
echo ========================================
echo Atualizacao de Dependencias
echo ========================================
echo.

cd /d "%~dp0\.."

echo [1/5] Verificando versoes atuais...
node --version
npm --version
npm list @angular/core typescript --depth=0 2>nul
echo.

echo [2/5] Atualizando npm globalmente...
call npm install -g npm@latest
echo.

echo [3/5] Removendo instalacoes antigas...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Limpeza concluida!
echo.

echo [4/5] Limpando cache do npm...
npm cache clean --force
echo.

echo [5/5] Instalando dependencias atualizadas...
npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Falha na instalacao!
    pause
    exit /b %ERRORLEVEL%
)
echo.

echo ========================================
echo Atualizacao concluida!
echo ========================================
echo.
echo Versoes instaladas:
npm list @angular/core typescript @angular/cli --depth=0 2>nul
echo.
pause
