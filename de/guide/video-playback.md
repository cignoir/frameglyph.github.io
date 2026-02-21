# Videowiedergabe

![Video playback screen](/images/screenshots/playback.png)

Frameglyph unterstützt den Import und die bildgenaue Überprüfung von Videos auf Einzelbild-Ebene.

## Videos importieren

- Ziehen Sie eine Videodatei per Drag & Drop direkt in das Anwendungsfenster.
- Oder verwenden Sie **Datei (File) > Video importieren... (Import Video...)** über die Menüleiste.

Unterstützte Formate: MP4, WebM und weitere Formate, die von der Video-Engine des Browsers unterstützt werden.

## Wiedergabesteuerung

| Aktion | Beschreibung |
|---|---|
| Abspielen / Pause (Play / Pause) | Wiedergabe starten oder anhalten |
| Ein Bild vorwärts (Step Forward) | Exakt ein Einzelbild vorrücken |
| Ein Bild rückwärts (Step Backward) | Exakt ein Einzelbild zurückgehen |
| Zum Anfang springen (Jump to Start) | Zum allerersten Bild der Zeitleiste springen |
| Zum Ende springen (Jump to End) | Zum letzten Bild der Zeitleiste springen |
| Schneller (Speed Up) | Wiedergabegeschwindigkeit erhöhen |
| Langsamer (Slow Down) | Wiedergabegeschwindigkeit verringern |
| Audio Scrubbing | Kurze Audio-Snippets bei der Einzelbild-Navigation abspielen |

*(Sie können den **Ursprung der Bildzählung (Frame Count Origin)** unter **Einstellungen (Preferences) > System (System)** konfigurieren, um entweder bei 0 oder 1 zu beginnen).*

## Ansichtseinstellungen

Die folgenden Optionen sind im Menü **Ansicht (View)** verfügbar, um Ihren Arbeitsbereich weiter anzupassen:

- **Immer im Vordergrund (Always on Top)**:  Hält das Frameglyph-Fenster über allen anderen Anwendungen.
- **Deckkraft (Opacity)**: Passt die Transparenz des Fensters an, damit Sie Referenzmaterial im Hintergrund sehen können.

## Einzelbilder (Frames) speichern

So erfassen Sie ein Standbild des aktuellen Videos:
- Verwenden Sie **Video > Aktuelles Bild speichern... (Save Current Frame...)**, um einen Screenshot auf der Festplatte zu sichern.
- Verwenden Sie **Video > Bild in Zwischenablage kopieren (Copy Frame to Clipboard)**, um das aktuelle Bild schnell in eine andere Anwendung einzufügen.

## Loop-Wiedergabe (Schleife)

1. Klicken Sie auf **Loop-Eingang setzen (Set Loop In)** am gewünschten Startbild (oder verwenden Sie den entsprechenden Shortcut).
2. Klicken Sie auf **Loop-Ausgang setzen (Set Loop Out)** am gewünschten Endbild.
3. Verwenden Sie **Loop-Wiedergabe umschalten (Toggle Loop Playback)**, um den ausgewählten Bereich fortlaufend zu wiederholen.

*(Alternativ können Sie die Shortcuts **Bereichsstart am Abspielkopf (Range Start at Playhead)** und **Bereichsende am Abspielkopf (Range End at Playhead)** für eine schnelle Auswahl verwenden).*

## Multi-Video-Layout

![Multi-video comparison in 2x1 layout](/images/screenshots/multi-layout.png)

Frameglyph unterstützt die gleichzeitige Anzeige mehrerer Videos für den direkten Vergleich nebeneinander. Verwenden Sie das schwebende **Layout-Panel (Layout Panel)**, um zwischen verschiedenen Layouts zu wechseln.

| Layout | Videos | Beschreibung |
|---|---|---|
| **1x1** | 1 | Einzelnes Video (Standardansicht) |
| **2x1** | 2 | Zwei Videos nebeneinander |
| **1x2** | 2 | Zwei Videos vertikal übereinander gestapelt |
| **2x2** | 4 | Vier Videos in einem 2x2-Raster |

- Aktivieren Sie das Panel über **Ansicht (View) > Layout-Panel (Layout Panel)**.
- Ziehen Sie Videos in die jeweiligen Slots oder klicken Sie in den leeren Bereich, um sie zu importieren.
- Das Layout passt sich automatisch der Anzahl der geladenen Videos an.

Die vollständige Liste der Wiedergabesteuerungen finden Sie unter [Tastenkombinationen (Keyboard Shortcuts)](./shortcuts).
