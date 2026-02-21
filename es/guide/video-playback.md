# Reproducción de Video

![Video playback screen](/images/screenshots/playback.png)

Frameglyph soporta la importación y revisión de videos con precisión a nivel de fotograma.

## Importación de Videos

- Arrastra y suelta un archivo de video en la ventana de la aplicación.
- O usa **Archivo (File) > Importar Video... (Import Video...)** desde la barra de menú.

Formatos soportados: MP4, WebM y otros formatos compatibles con el motor de video del navegador.

## Controles de Reproducción

| Acción | Descripción |
|---|---|
| Reproducir / Pausar (Play / Pause) | Iniciar o detener la reproducción |
| Avanzar un fotograma (Step Forward) | Avanzar un fotograma |
| Retroceder un fotograma (Step Backward) | Retroceder un fotograma |
| Saltar al Inicio (Jump to Start) | Ir al primer fotograma |
| Saltar al Final (Jump to End) | Ir al último fotograma |
| Acelerar (Speed Up) | Aumentar la velocidad de reproducción |
| Ralentizar (Slow Down) | Disminuir la velocidad de reproducción |
| Depuración de audio (Audio Scrub) | Reproducir fragmentos breves de audio al avanzar fotogramas |

*(Puedes configurar el **Origen del conteo de fotogramas (Frame Count Origin)** para que empiece en 0 o en 1 en **Preferencias (Preferences) > Sistema (System)**).*

## Configuración de Vista

Las siguientes opciones están disponibles en el menú **Vista (View)** para personalizar tu espacio de trabajo:

- **Siempre visible (Always on Top)**: Mantiene la ventana de Frameglyph por encima de todas las demás aplicaciones.
- **Opacidad (Opacity)**: Ajusta la transparencia de la ventana para que puedas ver el material de referencia debajo.

## Guardar Fotogramas

Para capturar una imagen fija del video actual:
- Usa **Video > Guardar Fotograma Actual... (Save Current Frame...)** para guardar una captura de pantalla en el disco.
- Usa **Video > Copiar Fotograma al Portapapeles (Copy Frame to Clipboard)** para pegar rápidamente el fotograma actual en otra aplicación.

## Reproducción en Bucle

1. Haz clic en **Establecer Punto de Entrada de Bucle (Set Loop In)** en el fotograma de inicio deseado (o usa el atajo).
2. Haz clic en **Establecer Punto de Salida de Bucle (Set Loop Out)** en el fotograma final deseado.
3. Usa **Alternar Reproducción en Bucle (Toggle Loop Playback)** para repetir el rango seleccionado.

*(Alternativamente, usa los atajos **El rango comienza en el cabezal de reproducción (Range Start at Playhead)** y **El rango termina en el cabezal de reproducción (Range End at Playhead)** para una selección rápida).*

## Diseño de Múltiples Videos

![Multi-video comparison in 2x1 layout](/images/screenshots/multi-layout.png)

Frameglyph soporta la visualización de múltiples videos simultáneamente para la comparación lado a lado. Usa el **Panel de Diseño (Layout Panel)** flotante para cambiar entre diseños.

| Diseño | Videos | Descripción |
|---|---|---|
| **1x1** | 1 | Video único (predeterminado) |
| **2x1** | 2 | Dos videos uno al lado del otro |
| **1x2** | 2 | Dos videos apilados verticalmente |
| **2x2** | 4 | Cuatro videos en una cuadrícula de 2x2 |

- Habilita el panel desde **Vista (View) > Panel de Diseño (Layout Panel)**.
- Arrastra y suelta videos en cada ranura, o haz clic en el área vacía para importar.
- El diseño cambia automáticamente según el número de videos cargados.

Consulta los [Atajos de Teclado (Keyboard Shortcuts)](./shortcuts) para ver la lista completa de controles de reproducción.
