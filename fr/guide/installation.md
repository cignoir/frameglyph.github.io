# Installation

## Installer via Steam

1. Ajoutez Frameglyph à votre liste de souhaits ou achetez-le sur [Steam](#).
2. L'application sera installée automatiquement.

## Configuration de FFmpeg

FFmpeg est requis pour les fonctionnalités d'exportation vidéo. Frameglyph ne l'inclut pas, vous devez l'installer séparément.

1. Téléchargez FFmpeg depuis [ffmpeg.org](https://ffmpeg.org/download.html).
2. Extrayez-le dans un répertoire (ex. : `C:\ffmpeg`).
3. Dans Frameglyph, rendez-vous dans **Préférences (Preferences) > Système (System) > Configuration FFmpeg (FFmpeg Configuration)**.
4. Définissez le **Chemin de l'Exécutable (Executable Path)** vers `ffmpeg.exe` (ex. : `C:\ffmpeg\bin\ffmpeg.exe`).

::: tip Astuce
Vous pouvez également ajouter FFmpeg à votre variable d'environnement PATH. Frameglyph le détectera automatiquement s'il manque le chemin dans les Préférences.
:::
