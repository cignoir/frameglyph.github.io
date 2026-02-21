# Export 

Frameglyph nutzt FFmpeg für den Export von reinen Videos oder Videos mit eingebrannten (Burned-in) Annotationen.

## Voraussetzungen

Der FFmpeg-Pfad muss vor einem Export in den Einstellungen konfiguriert werden. Bitte sehen Sie hierzu den Abschnitt [Installation](./installation#ffmpeg-konfiguration).

![Export settings dialog](/images/screenshots/export-dialog.png)

## Exportformate

| Format | Beschreibung |
|---|---|
| **MP4 (H.264)** | Gängiges Standard-Videoformat, breit unterstützt für allgemeine Anwendungen |
| **WebM (VP9)** | Offenes Videoformat, bietet eine gute Kompressionsrate |
| **GIF-Animation** | Ein fortlaufendes animiertes GIF, unterstützt grundsätzlich kein Audio |
| **APNG-Animation** | Ein animiertes PNG-Format, in der visuellen Qualität dem klassischen GIF überlegen, ebenfalls kein Audio |
| **PNG-Sequenz** | Rendern als verlustfreie Einzelbild-Sequenz |
| **JPEG-Sequenz** | Rendern als komprimierte Einzelbild-Sequenz |
| **WebP-Sequenz** | Das moderne WebP-Format als exportierte Einzelbild-Sequenz |

## Exporteinstellungen (Export Settings)

### Auflösung (Resolution)
Wählen Sie zwischen **Original**, **1080p**, **720p**, oder auch dem minimaleren **480p**.

### Bildrate (Framerate - FPS)
Wählen Sie zur Render-Geschwindigkeit eine der gängigen Industrie-Standard-Frameraten aus (24, 30, 60 usw.) oder entscheiden Sie sich für **Auto (Mit max. Eingabe-FPS abgleichen / Match Max Input FPS)**, um die native Ziel-Bildrate automatisch einfach direkt vom ersten Original-Clip zu übernehmen.

### Qualität (Quality)
- **Rohdaten (Raw)**: Höchstmögliche Renderqualität / Es entstehen gigantische Dateigrößen
- **Hoch (High)**: Überdurchschnittliche Qualität / Eine ausgewogene Balance
- **Mittel (Medium)**: Guter Standardwert / Kleinerer End-Speicherbedarf
- **Niedrig (Low)**: Optimal für Entwürfe & Skizzen / Die absolut geringste Dateigröße beim Rendering

### Bereich (Range)
- **Gesamte Dauer (Full Duration)**: Exportiert direkt den komplett geladenen Videoclip
- **Nur Auswahl (Selection Only)**: Rendert exklusiv nur die Stelle innerhalb Ihres über In/Out selektierten Auswahlbereichs

### Einblendungen (Overlays)
Über einen einfachen Schalter de-/aktivieren Sie, ob hinzugefügte Elemente im End-Video wirklich visuell „eingebrannt“ werden, z. B.: **Untertitel, Annotationen & Live Ink (Captions, Annotations & Live Ink)**.

## Tipps zu GIF & APNG

::: warning Warnung!
Eine Konvertierung in GIF- und APNG-Dateien lässt den Endbedarf der Dateigröße extrem schnell unangemessen stark anwachsen. Um gute und handhabbare Ergebnisse zu erhalten:
- Nutzen Sie direkt nur niedrige Auflösungen (z. B. 480p).
- Reduzieren Sie hier die Framerate erheblich (auf einen Bereich von 10-15 fps).
- Exportieren Sie solche Formate ausschließlich nur für äußerst kurze Clips.
- Bedenken Sie, dass die Audiodaten von den Formaten so oder so ignoriert werden.
:::
