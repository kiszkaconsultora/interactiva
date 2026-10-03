# Reglas y Directivas del Proyecto Interactiva Hub

## Flujo de Trabajo Git

### Regla para la instrucción "subi todo"
Siempre que el usuario pida **"subi todo"** (o variantes como *"subí todo"*, *"subir todo"*, *"subir los cambios"*):
1. Verificar los archivos modificados con `git status`.
2. Preparar todos los cambios con `git add .` (o `git add -A`).
3. Generar un commit descriptivo y conciso en español que resuma los cambios realizados.
4. **Subir siempre los cambios a la rama `main`** ejecutando `git push origin main`.
5. Confirmar al usuario el resultado de la subida a `main` con el commit generado.

> Nota técnica: En entornos Windows donde `git` no esté en el PATH de PowerShell, utilizar la ruta completa: `& "C:\Program Files\Git\cmd\git.exe"`.
