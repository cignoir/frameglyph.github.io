# Instalación

## Instalar desde Steam

1. Agrega a tu lista de deseos o compra Frameglyph en [Steam](#).
2. La aplicación se instalará automáticamente.

## Configuración de FFmpeg

FFmpeg es necesario para las funciones de exportación de video. Frameglyph no incluye FFmpeg — necesitas instalarlo por separado.

1. Descarga FFmpeg desde [ffmpeg.org](https://ffmpeg.org/download.html).
2. Extraiga los archivos en un directorio (por ejemplo, `C:\ffmpeg`).
3. En Frameglyph, ve a **Preferencias (Preferences) > Sistema (System) > Configuración de FFmpeg (FFmpeg Configuration)**.
4. Establece la **Ruta del Ejecutable (Executable Path)** a `ffmpeg.exe` (por ejemplo, `C:\ffmpeg\bin\ffmpeg.exe`).

::: tip Consejo
También puedes agregar FFmpeg al PATH de tu sistema. Frameglyph lo detectará automáticamente si la ruta se deja en blanco.
:::
