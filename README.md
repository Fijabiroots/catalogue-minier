# Catalogue Minier MULTIPARTS

[![Déploiement GitHub Pages](https://img.shields.io/badge/déploiement-actif-success)](https://catalogue.multipartsci.com)
[![Statut](https://img.shields.io/badge/statut-production-blue)](https://catalogue.multipartsci.com)
[![Licence](https://img.shields.io/badge/licence-propriétaire-red)]()

> Catalogue en ligne des fournisseurs et marques d'équipements miniers et industriels - MULTIPARTS Côte d'Ivoire

![Catalogue Minier MULTIPARTS](./Gemini_Generated_Image_Mining.png)

## 📋 Aperçu du Projet

Ce projet est un **site web statique mono-fichier** pour **MULTIPARTS**, un fournisseur spécialisé d'équipements miniers et industriels basé à Abidjan, Côte d'Ivoire. Le catalogue en ligne présente plus de 150 marques partenaires réparties en 7 catégories d'équipements pour le secteur minier africain.

### Objectifs
- 📖 Afficher un catalogue complet de fournisseurs d'équipements miniers
- 📞 Fournir les coordonnées de contact de MULTIPARTS
- 🖨️ Permettre la génération et l'impression du catalogue en format PDF
- 🤖 Offrir des fonctionnalités d'analyse IA (marché, risques fournisseurs, TCO)

### Public Cible
Entreprises minières, équipes d'approvisionnement industriel et gestionnaires de projets de construction en Afrique, particulièrement dans les régions francophones.

---

## 🛠️ Stack Technologique

Ce projet est un **site web statique sans processus de build** - aucun gestionnaire de packages ou outil de compilation n'est requis.

### Technologies Utilisées
- **HTML5** : Structure de l'application mono-page
- **CSS3** : Styles avec TailwindCSS (via CDN)
- **JavaScript (ES6+)** : Interactivité côté client, modales et intégration API
- **TailwindCSS** : Framework CSS via CDN (pas de build nécessaire)

### Services Externes
- **GitHub Pages** : Hébergement du site statique
- **Google Cloud Run/Functions** : Fonctionnalités d'analyse IA
- **Gemini API** : Analyse de marché propulsée par IA

### ⚠️ Important : Pas de Build Process
Ce projet est **intentionnellement** conçu comme un site statique pur :
- ❌ Aucun `npm`, `yarn` ou autre gestionnaire de packages
- ❌ Aucun outil de build (webpack, vite, etc.)
- ❌ Aucune dépendance à installer
- ✅ Ouvrez simplement `catalogue-fournisseurs.html` dans un navigateur moderne

---

## 📁 Structure des Fichiers

```
.
├── catalogue-fournisseurs.html    # Application principale (fichier unique)
├── README.md                       # Documentation du projet (ce fichier)
├── CNAME                          # Configuration du domaine personnalisé GitHub Pages
├── favicon.ico                    # Icône du site
├── Gemini_Generated_Image_Mining.png  # Image hero de la page d'accueil
├── logo-multiparts.png            # Logo de l'entreprise MULTIPARTS
└── Logo pour catalogue en ligne.png   # Logo additionnel
```

### Fichier Principal
**`catalogue-fournisseurs.html`** contient tout le code nécessaire :
- Structure HTML complète
- Styles CSS intégrés dans la balise `<style>`
- JavaScript intégré dans une balise `<script type="module">`

---

## 📝 Conventions de Code et Style

### HTML
- Langue : Français (`lang="fr"`)
- Structure HTML5 sémantique avec sections appropriées
- Considérations d'accessibilité (labels ARIA, balises sémantiques)
- Optimisation pour l'impression avec styles `@media print`

### CSS
- Balise `<style>` intégrée dans le `<head>` du HTML
- Classes utilitaires TailwindCSS pour un style rapide
- Classes CSS personnalisées pour :
  - Formatage d'impression (`.catalog-page`, `@media print`)
  - Design responsive (`@media screen`)
  - Styles spécifiques aux composants (`.table-custom`, `.modal`, `.expertise-box`)
- Approche mobile-first
- Styles optimisés pour l'impression A4

### JavaScript
- Syntaxe de module ES6+ (`type="module"`)
- Patterns de délégation d'événements
- `async/await` pour les appels API
- Nommage de fonctions clair en contexte français
- Manipulation DOM avec APIs modernes

### Conventions de Nommage
- **Variables/Fonctions** : camelCase (ex: `generateCSV`, `extractBrands`, `showSelectionModal`)
- **Classes CSS** : kebab-case (ex: `.catalog-page`, `.section-header`, `.back-to-top`)
- **IDs** : camelCase (ex: `generatePdfButton`, `iaModal`, `modalContent`)
- **Terminologie française** : Utilisée pour tous les termes métier

---

## ⚙️ Architecture et Fonctionnalités Clés

### Sections Principales du Catalogue

1. **Équipements Lourds & Mobiles** (Extraction, Forage et Transport)
2. **Traitement des Minerais & Séparation** (Concentrateur)
3. **Pompes, Vannes & Composants** de Fluides Spécialisés
4. **Automatisation, Contrôle & Électronique**
5. **Instrumentation, Laboratoire & Consommables**
6. **Outillage Spécialisé**, Soudage & Maintenance Critique
7. **Services & Maintenance**

### Fonctionnalités

#### 1. Affichage du Catalogue
- Organisation par familles de produits
- Listage des marques avec spécialisations
- Tables responsives optimisées pour mobile
- Éléments de navigation fixes (sticky)

#### 2. Génération de PDF
- Déclenchement de la boîte de dialogue d'impression du navigateur
- Styles d'impression optimisés pour un rendu professionnel
- Format de page A4
- En-têtes et pieds de page pour les pages imprimées

#### 3. Fonctionnalités d'Analyse IA
Trois types d'analyses propulsées par IA :
- **Analyse de Marché** (`marche`) : Tendances du marché et prix pour équipements lourds
- **Analyse de Risque Fournisseur** (`risque`) : Évaluation des risques pour sélection de fournisseurs
- **Analyse TCO** (`tco`) : Comparaison du Coût Total de Possession

#### 4. Éléments Interactifs
- Boîtes de dialogue modales pour configuration des fonctionnalités IA
- Cases à cocher de sélection de marques (limite de 2-3 sélections)
- Barres de progression pour l'analyse IA
- Export CSV vers le presse-papiers
- Bouton flottant "Retour en haut"

### Intégration API
- URL de base : Service Google Cloud Run
- Pattern d'endpoint : `/analyse-[type]-[category]`
- Requêtes POST avec payload JSON contenant les prompts
- Gestion d'erreurs avec messages conviviaux

---

## 🏢 Contexte Commercial et Coordonnées

### À propos de MULTIPARTS

**MULTIPARTS** est un acteur indépendant spécialisé dans le sourcing technique et la fourniture multimarque de pièces et équipements industriels. Forte de **30 ans d'expertise en sourcing critique international**, l'entreprise propose des solutions fiables pour le matériel neuf, reconditionné ou obsolète.

### Proposition de Valeur
- ✅ Sourcing de pièces et équipements multimarques
- ✅ Réduction des temps d'arrêt grâce aux pièces interchangeables
- ✅ Traçabilité et conformité assurées
- ✅ Solutions pour équipements neufs, reconditionnés ou obsolètes

### Coordonnées

**MULTIPARTS Côte d'Ivoire**

📍 **Adresse** :  
2ᵉ étage, Immeuble Ganamet  
4565 Boulevard Félix Houphouët-Boigny  
Abidjan, Côte d'Ivoire

📞 **Téléphone** : +225 27 21 25 01 46  
📱 **Mobile** : +225 07 09 39 95 29  
📧 **Email** : rafiou.oyeossi@multipartsci.com

🌐 **Site web** : [catalogue.multipartsci.com](https://catalogue.multipartsci.com)

---

## 👨‍💻 Directives de Développement

### Ajouter une Nouvelle Section d'Équipement

1. Créer une nouvelle section avec un ID approprié (`section-X`)
2. Ajouter à la table des matières avec un lien d'ancrage
3. Créer un `.section-header` avec icône et titre
4. Ajouter une `.expertise-box` avec déclaration d'expertise de l'entreprise
5. Créer un `.table-container` avec table `.table-custom`
6. Mettre à jour le JavaScript si l'export CSV est nécessaire

### Modifier les Fonctionnalités IA

- Mettre à jour les URL d'endpoint dans la fonction `callGeminiFunction`
- Modifier les prompts pour différents types d'analyse
- Assurer une gestion d'erreurs appropriée
- Tester avec un déploiement Cloud Run réel

### Ajouter des Marques/Équipements

1. Identifier la section correcte (1-7)
2. Ajouter une nouvelle ligne `<tr>` dans le `<tbody>` approprié
3. Utiliser les balises `<strong>` pour les marques majeures/préférées
4. Garder les descriptions de spécialisation concises
5. Maintenir un regroupement alphabétique ou logique dans les sections

### Mettre à jour les Styles

- Préférer les classes utilitaires TailwindCSS pour la cohérence
- Ajouter du CSS personnalisé uniquement lorsque TailwindCSS est insuffisant
- Maintenir les media queries pour écran et impression
- Tester sur mobile, tablette et desktop

### Directives Importantes

#### À FAIRE ✅
- ✅ Maintenir la langue française pour tout le contenu
- ✅ Préserver les styles d'impression
- ✅ Assurer la réactivité mobile (&lt;640px)
- ✅ Ajouter la classe `no-print` aux éléments non imprimables
- ✅ Maintenir HTML sémantique et labels ARIA

#### À NE PAS FAIRE ❌
- ❌ Ne pas ajouter d'outils de build ou gestionnaires de packages
- ❌ Ne pas convertir en application multi-pages
- ❌ Ne pas changer la langue du français vers l'anglais
- ❌ Ne pas supprimer les styles d'optimisation pour l'impression
- ❌ Ne pas ajouter d'exigences de serveur backend (rester statique)
- ❌ Ne pas introduire de changements cassants dans la structure mono-fichier

---

## 🚀 Déploiement et Tests

### Hébergement GitHub Pages

Le site est hébergé sur **GitHub Pages** avec un domaine personnalisé :
- 🔗 URL de production : [https://catalogue.multipartsci.com](https://catalogue.multipartsci.com)
- 🌐 Configuration via fichier `CNAME`
- ⚡ Aucune étape de build requise - service HTML direct
- 🔄 Les mises à jour sont en ligne immédiatement après push sur la branche `main`

### Test Local

Pour tester le site localement :

```bash
# Ouvrir directement dans le navigateur
open catalogue-fournisseurs.html

# OU utiliser un serveur web simple (optionnel)
python3 -m http.server 8000
# Puis visiter http://localhost:8000/catalogue-fournisseurs.html
```

**Aucun serveur local n'est requis** - ouvrez simplement le fichier HTML dans un navigateur moderne.

### Navigateurs Supportés

- ✅ Chrome/Edge (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

---

## ✅ Liste de Vérification des Tests

Lors de modifications, vérifier :

### Affichage
- [ ] Vue desktop (&gt;640px) s'affiche correctement
- [ ] Vue mobile (&lt;640px) est utilisable et lisible
- [ ] Aperçu d'impression montre un rendu professionnel (format A4)
- [ ] Tous les liens et boutons sont fonctionnels
- [ ] Les images s'affichent correctement avec leur texte alternatif

### Interactivité
- [ ] Les boîtes de dialogue modales s'ouvrent et se ferment correctement
- [ ] La sélection de marques fonctionne (limite 2-3)
- [ ] Le bouton "Retour en haut" est visible et fonctionne
- [ ] L'export CSV fonctionne et copie dans le presse-papiers

### Fonctionnalités IA (nécessite connexion internet)
- [ ] Les boutons d'analyse IA affichent les états de chargement appropriés
- [ ] Les messages d'erreur sont conviviaux et en français
- [ ] Les barres de progression s'affichent pendant le traitement

### Technique
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le texte français est grammaticalement correct
- [ ] La génération de PDF via impression fonctionne
- [ ] Les styles responsive fonctionnent sur tous les breakpoints

### Accessibilité
- [ ] Les images ont du texte alternatif descriptif
- [ ] La navigation au clavier fonctionne
- [ ] Le contraste des couleurs est suffisant
- [ ] Les liens sont descriptifs et compréhensibles hors contexte

---

## 🔒 Considérations de Sécurité

- 🔑 Les clés API sont stockées dans les variables d'environnement Cloud Run (pas dans le code)
- 🔓 Aucune authentification utilisateur requise (catalogue public)
- 📧 Les liens email utilisent le protocole `mailto:`
- 🔐 Les ressources CDN externes sont chargées via HTTPS
- 🚫 Aucune collecte ou stockage de données sensibles

---

## 🤝 Contribution

Ce projet est maintenu par l'équipe de développement MULTIPARTS. Pour toute suggestion d'amélioration ou rapport de bug, veuillez contacter :

📧 **Email** : rafiou.oyeossi@multipartsci.com

---

## 📄 Licence

© 2025 MULTIPARTS Côte d'Ivoire. Tous droits réservés.

Ce catalogue est la propriété de MULTIPARTS et est destiné à un usage professionnel dans le cadre du sourcing d'équipements miniers et industriels.

---

## 📚 Ressources Additionnelles

- [Fichier principal du catalogue](./catalogue-fournisseurs.html)
- [Logo MULTIPARTS](./logo-multiparts.png)
- [Image hero](./Gemini_Generated_Image_Mining.png)

---

**Dernière mise à jour** : Novembre 2025  
**Maintenu par** : Équipe de Développement MULTIPARTS
