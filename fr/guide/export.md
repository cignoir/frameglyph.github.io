# Exportation (Export)

Frameglyph tire avantage de la pleine puissance du système FFmpeg pour effectuer des exports de vidéos sur lesquels vos marqueurs graphiques et écrits seront intégrés "brûlés" au cœur du rendu final de l'image (burned-in).

## Prérequis de Système 

Le moteur de rendu FFmpeg doit obligatoirement être défini et configuré avant la tentative d'exportation de tout fichier local. Lisez les indications depuis la section correspondante au guide de l'[Installation](./installation#configuration-de-ffmpeg).

![Export settings dialog](/images/screenshots/export-dialog.png)

## Formats pris en charge à l'Export

| Choix du Format | Descriptif et Explication |
|---|---|
| **MP4 (Codage H.264)** | Fichier vidéo général par excellence doté d'une des plus large compatibilité applicative |
| **WebM (Codage VP9)** | Fichier de base de la plateforme à nature "open-source" avec une bonne compression qualitative pour web |
| **Pellicules Animées GIF** | Successions de cadres images assemblées d'animations. Aucun transport de signaux Audios inclus |
| **Pellicules Animées APNG** | Successions de calques animés "PNG" de qualité supérieure au standard GIF. N'offre également pas de relais Audios inclus |
| **Séquençages Libres Images PNG** | Extraction par série du défilement des calques images pris un à un, enregistrés sans perte de colorimétrie et qualité |
| **Séquençages Libres Images JPEG** | L’équivalence des images à la chaîne, passées un à un par module JPEG pour taille légère de compression visuelles |
| **Séquençages Libres Images WebP** | Sortie d'images WebP modernes et très légères sans impact visuel de qualité d’images lourdes successives |

## Panneau de Paramétrages sur L'export (Export Settings)

### Echelle De Réduction et Dimensions (Resolution)
Choix du ratio du rendu de sortie de vidéo à re-calculer avec les dimensions à cibles proposées: entre l'échelle d'origine **(Original)**, le standard **1080p**, ou ceux qui s’amoindrient pour l’économie avec le **720p**, ou encore **480p**.

### Images par Seconde - Vitesse (FPS / Frequencies / Frame Rate)
Vous dictez à l'engin du calcul sa propre consistance au rendu via des modèles pré-paramétrés des modèles actuels fréquents (24, 30, 60 FPS, etc.) pour en décider du nombre entier régulier (Fixes). Sinon optez l'action libre de laisser faire le panneau via un mode **Calcul Automatique En Faveur Du Calque le Plus Haut Ou Relais D'origine De Sa Cadence Initiale Reçue (Auto / Match Max Input FPS)** servant à dédoubler son nombre selon le type de vidéo source entré, évitant fausse vitesse de défilements sur votre vue à postériori.

### Niveau d'Application au Compression Visuels (Quality)
- **Aucunes Compressions (Raw)**:  La pure originalité à la capture. Résultat:  Les plus grandes qualités possibles / Équivaut en retour à un poids méga-lourd des disques ou du stockage web visés.
- **Rendus Élevés (High)**: Options d'équilibre du rendu idéal / Poids modéré - Rendu équilibré parfait en moyenne à l'exigence
- **Rendus Médians (Medium)**: Sortie classique du type courant / Options d'économie taille-rendu sur l’espace et réseau internet
- **Rendus Faibles ou Brouillon (Low)**: Économies maximum / Destiné avant tout à l'allègement ou rendus rapides d'envois tests (pour lecture immédiate) - Format des poids plumes à petites tailles très compactes.

### Étendues au Re-Calculs D'Extractions Ciblés (Range)
- **Entier - La Vidéo ou Prise Du Début A La Fin (Full Duration)**: Pour réaliser les sorties générales de vos pistes complètes modifiés
- **La Délimitations Choisi Fixée Local Ou Des Marques In/Out (Selection Only)**: Sort seulement la tranche de partie que ciblée entre bornes choisis (Voir "Les Choix Et Bornes Locales Temps / Sélections In / Sélections Out ") de sa chronologie (Timeline) pour s’épargner tous le reste !

### Calques Applicatifs (Overlays / Calques et Filtres Modulables au Visuel Fixateur Rendus)
Commutateur d'option au panneau qui valide ou pas si un élément visuel que votre tracé de dessin et annotation ont apportés, sont définitivement "brulées et inscrites à encres fortes et de marques fixes" sur l’extraction final vidéo envoyées, options liées aux interrupteurs de menus:  **Soutien Écrit, Option Traque-Mains À L'encre Libre Ainsi Qu'Annotations Tracés Différents (Captions, Annotations & Live Ink)**.

## Avertissement Au Format de Séquences Longues et Répétitives Animées (GIF / APNG)

::: warning Alertes d'Espace Memoire!
La conversion de vidéos avec de grandes mesures de fichiers, sous une longue capture, par ces systèmes APNG et GIFs se gonfle d'extractions mémoires de poids monstrueux en seulement très peu de durées (Secondes liées).
L'astuce pour préserver un usage qualitatif sans saturer ces exports :
-  Sélection en échelle à définition réduite avant lancements de convertisseurs - (480p / Formats Moyens et petits)
-  Les réductions au ralentie (Limiter avec de moindres FPS fixés exemple: (10 à 15 FPS )
-  Ne prenez jamais que du clippage d'extract (Choix de Séquences In à Out en quelques instants très brefs ! De préférentiels Courts / Sélection) 
- Et évidemment:  Aucune donnée Son n’est inclut ni portée sur la piste finie sur ces choix graphiques au départ !
:::
