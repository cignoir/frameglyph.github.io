# Bildschirmaufnahme (Screen Capture)

Frameglyph verfügt bereits von Haus aus über eine integrierte Bildschirmaufnahme-Funktion direkt im Client, die es Ihnen erlaubt, externe Inhalte von Ihrem Desktop unkompliziert und nativ für Ihren Überprüfungs-Workflow nahtlos mitzuschneiden.

## Aufnahme Starten

1. Rufen Sie die Aufzeichnungsfunktion via Mausklick in der Symbolleiste auf, oder initiieren Sie eine Sofort-Aufnahme direkt über die Shortcut-Tasten **Aufnahme starten / stoppen (Start / Stop Capture)**.
2. Wählen und legen Sie nun das feste Ziel oder den Bildschirm-Bereich, der mitgeschnitten werden soll (ein Fenster, eine Region oder das gesamte Display) innerhalb des Aufzeichnungs-Menüs fest.
3. Beenden und Stoppen Sie die Aufnahme händisch wieder, wenn Ihr angestrebter Mitschnitt beendet ist.

Das nun gewonnene Video, genauer gesagt der neue Clip, wird nun gänzlich automatisch als ein komplett eigenes, importiertes Element auf den nächsten freien Medien-Slot-Reihen der Frameglyph-Sitzung in der Zeitleiste verortet abgelegt.

## Aufnahmeeinstellungen

Konfigurieren und passen Sie die Modalitäten der lokalen Desktop-Aufnahmen weitergehend unter den **Einstellungen (Preferences) > Aufnahmen (Captures)** direkt an Ihre Wünsche an:

| Einstellung | Beschreibung der Option |
|---|---|
| **Speicherort (Save Location)** | Bestimmt den festen Ordner auf dem PC, wohin genau die Rohdateien und finalen Mitschnitte sicher abgespeichert werden |
| **Bildrate (Framerate - FPS)** | Legt die Bildaufzeichnungsrate der eigentlichen Aufnahme fest (eine hoch gewählte Framerate resultiert natürlich in weicherem Video, bedingt aber auch immer einen weit höheren direkten Datenaufwand für größere Mitschnitt-Dateien) |
| **Format** | Hier wählen Sie standardmäßig das direkt nativ verfügbare WebM-Format aus - als auch andere, wie MP4, APNG, oder auch GIF (beachten Sie hierzu dringend: das Kodieren in fremde Formate wie MP4/APNG/GIF bedarf immer des vorab separat zur Verfügung gestellten FFmpeg-Decoders vor Ort bei sich auf dem Computer!) |
| **Mauszeiger ausblenden (Hide Mouse Cursor)** | Entfernt den aktiven PC-Mauszeiger völlig autark von der laufenden Bildschirmaufzeichnung (Er ist auf der visuell gerenderten Enddatei dann nicht mit abgebildet) |
| **In Zwischenablage kopieren (Copy to Clipboard)** | Verfrachtet das frisch erfasste und aufgezeichnete Video-Mitschnitt-Material nach dem Abspeichern via Copy sofort automatisch im Hintergrund auf die offizielle Zwischenablage Ihres PC-Systems |
| **Fenster anzeigen (Show Window)** | Bewirkt, dass das Hauptfenster des Programms stets automatisch beim Beenden einer Aufnahme sofort wieder in den absoluten Display-Vordergrund geschaltet auftaucht |

::: tip Praxistipp zur Formatumwandlung
Falls wider Erwarten der Render-Vorgang via System-Decoder oder der FFmpeg-Schnittstelle zur Umwandlung eines Mitschnitts in MP4, APNG, oder GIFs bei einer Aufnahme fehlschlagen sollte, greift das Programm intern für Ihre Aufnahmen-Sicherheit umgehend ein und speichert den Mitschnitt vor dem Datenverlust standardmäßig nativ ab: Er wird in diesem Schadensfall schlicht nativ gesichert und dann Ihnen sofortig als reguläres (Fallback)-**WebM** serviert, damit nie eine Aufnahme verloren geht.
:::
