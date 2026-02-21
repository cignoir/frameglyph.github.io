# Lecture vidéo

![Video playback screen](/images/screenshots/playback.png)

Frameglyph prend en charge l'importation de vidéos et permet un examen précis de chacune de ses images.

## Importer des vidéos

- Glissez-déposez un fichier vidéo dans la fenêtre de l'application.
- Ou choisissez **Fichiers (File) > Importer une vidéo... (Import Video...)** depuis la barre de menu.

Formats supportés : MP4, WebM et la plupart des formats compatibles avec le moteur vidéo du navigateur de l'application.

## Contrôle de lecture

| Action | Description |
|---|---|
| Lecture / Pause (Play / Pause) | Démarre ou suspend la lecture |
| Image suivante (Step Forward) | Avance d'une seule image |
| Image précédente (Step Backward) | Recule d'une image |
| Aller au début (Jump to Start) | Atteint la toute première image |
| Aller à la fin (Jump to End) | Saute directement à la dernière image |
| Augmenter la vitesse (Speed Up) | Augmente la vitesse de lecture globale de la vidéo |
| Diminuer la vitesse (Slow Down) | Ralentit le défilement de la vidéo |
| Rendu audio en glissé (Audio Scrub) | Lit les courts extraits audio lors du défilement manuel des images |

*(Vous pouvez modifier dans l'onglet **Préférences (Preferences) > Système (System)** l'option **Origine du compteur d'images (Frame Count Origin)** pour commencer depuis l'image zéro (0) ou une (1).)*

## Paramètres d'Affichage

Certaines options de la vue pour vous permettre un affichage confortable et ciblé se trouvent via **Affichage (View)** :

- **Toujours visible (Always on Top)** : Garde la fenêtre de Frameglyph fixée en surimpression.
- **Opacité (Opacity)** : Modifie la transparence de la fenêtre. Idéal pour comparer avec votre propre bureau d'application d'animation.

## Sauvegarder les Poses (Frames)

Vous pouvez prendre un arrêt sur image comme référence via le menu :
- Cliquez sur **Vidéo (Video) > Sauvegarder l'image active... (Save Current Frame...)** sur votre système.
- L'option **Vidéo (Video) > Copier l'image dans le presse-papiers (Copy Frame to Clipboard)** sert au raccourci clavier.

## Lectures en Boucle

1. Lancez un cliquet d'ouverture sur le début de la vidéo via les marqueurs via l'outil **Débuter la Boucle (Set Loop In)** à l'endroit désiré.
2. Identifiez et pressez la fin ciblée par l'option **Terminer la Boucle (Set Loop Out)**.
3. Les outils pour rejouer l'extrait sans se préoccuper de relancer tournent en un cercle clos infini si vous activez **Jouer en Boucle (Toggle Loop Playback)**.

*(Une astuce pour marquer du départ ou des fins sans la sélection via cliquet direct via un atout pour lancer des actions **Créer la Boucle Près de la Cible Vidéo (Range Start at Playhead)** puis à la fin **Créer la Fin Près de la Cible (Range End at Playhead)** sur les sélecteurs de points de l'application. )*

## Rendu Vidéo Multi-dispositions 

![Multi-video comparison in 2x1 layout](/images/screenshots/multi-layout.png)

Frameglyph prend en charge l'aperçu multi-fenêtres. Changez-les depuis l'onglet volant des calques (via l'icône grille ou dans **Affichage > Dispositions / View > Layout Panel**).

| Rendu Graphique (Layout) | Capacités | Explications |
|---|---|---|
| **1x1** | 1 vidéo | Aperçu Standard |
| **2x1** | 2 vidéos | Affichages super-posées sur deux calques parfaits à comparaître au format miroir |
| **1x2** | 2 vidéos | Rendu Vertical |
| **2x2** | 4 vidéos | 4 lectures vidéos indépendantes ensemble en blocs carrés croisés |

Pour de fluides affichages : ouvrez l'ajout de fichier, jetez des blocs multimédias glissés directement dans les vides laissés vacants dans ces espaces distincts.
L'affichage saura se mettre lui-même de forme adéquat avec son total affiché ou masqué de lecteurs superposés.

Consultez nos [Raccourcis Clavier (Keyboard Shortcuts)](./shortcuts) d'animations et lectures.
