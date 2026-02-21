# Captura de Pantalla

Frameglyph incluye una función de grabación de pantalla integrada para capturar tu pantalla directamente en tu flujo de trabajo de revisión.

## Grabación

1. Inicia una captura usando el atajo **Iniciar / Detener Captura (Start / Stop Capture)** o el botón de la barra de herramientas.
2. Selecciona el área, aplicación o ventana específica a grabar.
3. Detén la grabación cuando termines.

El video capturado se importa automáticamente a una nueva ranura en Frameglyph.

## Ajustes

Configura la captura de pantalla en **Preferencias (Preferences) > Capturas (Captures)**:

| Ajuste | Descripción |
|---|---|
| **Lugar de guardado (Save Location)** | Directorio en el que se guardan las grabaciones |
| **Velocidad de fotogramas (FPS)** | Fotogramas por segundo de la grabación (un valor alto produce video más fluido pero archivos más grandes) |
| **Formato (Format)** | WebM (nativo), MP4, APNG, o GIF (MP4/APNG/GIF requieren FFmpeg) |
| **Ocultar Cursor del Ratón (Hide Mouse Cursor)** | Excluye el cursor del ratón de las capturas de pantalla |
| **Copiar al Portapapeles (Copy to Clipboard)** | Copia el archivo de video grabado al portapapeles después de guardarlo |
| **Mostrar Ventana (Show Window)** | Muestra la ventana principal después de que termina la grabación (cuando se minimiza en la bandeja) |

::: tip Consejo
Si la conversión a MP4, APNG o GIF falla, se guardará como WebM como opción alternativa (fallback).
:::
