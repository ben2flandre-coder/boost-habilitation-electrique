# Habilitation électrique BS · BE Manœuvre — support Boost

Support de formation pour Boost (initiale 2 jours, recyclage 10 h 30), animé par Benoît Deflandre, RMBD Risk Management. Dossier préparé le 23/10/2026.

Site statique (GitHub Pages) : à partager aux participants avec l’adresse de la page concernée, jamais avec le lien du dépôt.

- `index.html`, `parcours.html` (initiale), `recyclage.html`, `evaluation.html` : pages participants.
- `ressources.html`, `glossaire.html` : ressources, références, glossaire.
- `cours/` : cours complet (socle électrique, séquences, cas, entraînement, travaux pratiques, vidéothèque, livret). `cours/base.html` (15 Mo) est le contenu du cours ; `cours/index.html` l’adapte à Boost au chargement.
- `animation.html` : page de présentation du mode animation (menu de toutes les pages).
- `animation-initiale.html`, `animation-recyclage.html` : mode animation plein écran (diaporama formateur : séquences minutées, notes, chrono, QCM collectif), pages réservées, chiffrées (e-mail + code) ; `gate.js` en assure l’ouverture. L’entrée « Animation » du menu mène à `animation.html`, qui présente les deux diaporamas.
- `logo-boost.png` : logo Boost.
- `REGISTRE-SOURCES.md`, `QA.md` : sources, limites, contrôles.

Aucune donnée personnelle n’est publiée. Le titre d’habilitation est délivré par l’employeur. Les documents formateur (programmes, grilles, avis, attestation) ne sont pas dans ce dépôt.


## Suivre la formation (QR codes)

`suivre.html` : page publique pour les participants (programme, durée et lien de chaque séquence, QR code par séquence, coches de progression conservées dans le navigateur, onglets initiale / recyclage). Chaque diapositive du mode animation porte un encadré « Sur le site » avec un QR code vers cette page ; les pages d'ouverture de séquence affichent l'agenda coloré. Les QR sont générés avec `segno` (niveau de correction M) lors de la construction des diaporamas.
