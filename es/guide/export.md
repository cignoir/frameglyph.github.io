# Exportación

Frameglyph utiliza FFmpeg para exportar videos con anotaciones integradas (quemadas).

## Requisitos previos

FFmpeg debe estar configurado antes de exportar. Consulta la sección [Instalación](./installation#configuracion-de-ffmpeg).

![Export settings dialog](/images/screenshots/export-dialog.png)

## Formatos de Exportación

| Formato | Descripción |
|---|---|
| **MP4 (H.264)** | Formato de video estándar, ampliamente compatible |
| **WebM (VP9)** | Formato abierto, buena compresión |
| **Animación GIF** | GIF animado, no admite audio |
| **Animación APNG** | PNG animado, mejor calidad que GIF, no admite audio |
| **Secuencia PNG** | Secuencia de imágenes sin pérdida |
| **Secuencia JPEG** | Secuencia de imágenes comprimida |
| **Secuencia WebP** | Formato moderno de secuencias de imágenes |

## Ajustes de Exportación

### Resolución
Elige entre **Original**, **1080p**, **720p** o **480p**.

### Frecuencia de Fotogramas (FPS)
Seleccione frecuencias estándar (24, 30, 60, etc.) o use la opción automática **Auto (Coincidir con FPS de entrada máximo)** para heredar la velocidad de fotogramas del video original.

### Calidad
- **Cruda (Raw)**: Calidad más alta / Tamaño de archivo gigante
- **Alta (High)**: Buena calidad / Equilibrado
- **Media (Medium)**: Estándar / Tamaño más pequeño
- **Baja (Low)**: Borrador / El tamaño más pequeño posible

### Rango
- **Duración Completa (Full Duration)**: Exporta todo el clip
- **Solo Selección (Selection Only)**: Exporta solo el rango seleccionado (puntos de Entrada/Salida)

### Superposiciones (Overlays)
Activa o desactiva si se añaden incrustadas (quemadas) al video de salida los elementos de **Subtítulos, Anotaciones y Live Ink (Captions, Annotations & Live Ink)**.

## Consejos para GIF y APNG

::: warning Advertencia
Los archivos GIF y APNG pueden volverse muy grandes. Para obtener los mejores resultados:
- Usa baja resolución (480p)
- Usa baja velocidad de fotogramas (10-15 fps)
- Mantén los clips cortos
- El audio no está soportado en estos formatos
:::
