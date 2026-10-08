---
# PLANTILLA PARA NOTAS DE RADAR (este archivo NO se publica)
#
# Cómo crear una nota nueva:
#   1. Copiá este archivo en esta misma carpeta (src/content/radar/).
#   2. Cambiale el nombre: el nombre del archivo es la dirección de la nota.
#      Ejemplo: "nuevo-espacio-maker.md" se publica en /radar/nuevo-espacio-maker
#      Usá minúsculas, sin acentos ni espacios (separá las palabras con guiones).
#      Los archivos que empiezan con "_" (como este) no se publican.
#   3. Completá los campos de abajo y escribí el texto debajo de la línea "---".
#   4. Subí la imagen a la carpeta public/radar/ (por ejemplo public/radar/nuevo-espacio-maker.webp).

# Título de la nota.
title: "Título de la nota"

# Resumen corto (una o dos oraciones). Aparece en el listado y como bajada de la nota.
excerpt: "Resumen breve que invita a leer la nota completa."

# Fecha de publicación con el formato AAAA-MM-DD. Las notas se ordenan de la más nueva a la más vieja.
date: 2026-01-01

# Categoría libre, por ejemplo: Emprendimiento, Tecnología, Cultura, Eventos.
category: "Categoría"

# Ruta de la imagen principal. El archivo va en public/radar/ y acá se escribe empezando con "/radar/".
image: /radar/nombre-de-la-imagen.webp

# Descripción de la imagen para personas que usan lectores de pantalla.
imageAlt: "Descripción de lo que se ve en la imagen"

# Autor o autora de la nota (opcional: podés borrar esta línea).
author: "Nombre y apellido"

# Borrador: con "true" la nota queda oculta y no se publica. Cambiá a "false" para publicarla.
draft: true
---

Primer párrafo de la nota. Escribí el texto en Markdown: dejá una línea en blanco entre párrafos.

## Un subtítulo

Podés usar **negritas**, *cursivas* y [enlaces](https://ejemplo.com).

- Un punto de una lista
- Otro punto

> Una cita destacada de alguna persona entrevistada.
