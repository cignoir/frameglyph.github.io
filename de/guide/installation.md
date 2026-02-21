# Installation

## Über Steam installieren

1. Fügen Sie Frameglyph auf [Steam](#) zu Ihrer Wunschliste hinzu oder kaufen Sie es.  
2. Die Anwendung wird automatisch vom Client installiert.

## FFmpeg-Konfiguration

FFmpeg wird für die Video-Exportfunktionen zwingend benötigt. Frameglyph enthält FFmpeg nicht im Installationspaket — Sie müssen es separat einrichten.

1. Laden Sie FFmpeg von [ffmpeg.org](https://ffmpeg.org/download.html) herunter.
2. Entpacken Sie die Dateien in ein beliebiges Verzeichnis (z. B. `C:\ffmpeg`).
3. Gehen Sie in Frameglyph zu **Einstellungen (Preferences) > System (System) > FFmpeg-Konfiguration (FFmpeg Configuration)**.
4. Setzen Sie den **Pfad zur ausführbaren Datei (Executable Path)** auf Ihre `ffmpeg.exe` (z. B. `C:\ffmpeg\bin\ffmpeg.exe`).

::: tip Tipp
Sie können FFmpeg auch zum PATH Ihres Systems hinzufügen. Frameglyph wird es dann automatisch erkennen, wenn das Pfad-Feld in den Einstellungen leer gelassen wird.
:::
