# Documentation Technique - Projet Atipy

**Version:** 1.6.0
**Derniere mise a jour:** Janvier 2026
**Description:** Site web vitrine pour Atipy - "Une tribu au service d'un monde plus accessible"

---

## Table des matieres

1. [Introduction et Vue d'ensemble](#1-introduction-et-vue-densemble)
2. [Guide de demarrage rapide](#2-guide-de-demarrage-rapide)
3. [Architecture technique](#3-architecture-technique)
4. [Documentation des composants](#4-documentation-des-composants)
5. [Services et donnees](#5-services-et-donnees)
6. [Gestion du contenu](#6-gestion-du-contenu)
7. [State management](#7-state-management)
8. [Styling et design system](#8-styling-et-design-system)
9. [Workflow de deploiement](#9-workflow-de-deploiement)
10. [Tests et qualite de code](#10-tests-et-qualite-de-code)
11. [Troubleshooting](#11-troubleshooting)
12. [Annexes](#12-annexes)

---

## 1. Introduction et Vue d'ensemble

### 1.1 Presentation du projet

Atipy est un site web vitrine pour une agence specialisee dans l'accessibilite et la conception universelle. Le site presente les expertises, realisations et publications de l'agence.

### 1.2 Stack technique

| Technologie | Version | Role |
|-------------|---------|------|
| **Next.js** | 14.2.35 | Framework React avec App Router |
| **React** | 18.2.0 | Bibliotheque UI |
| **TypeScript** | 5.2.2 | Typage statique |
| **Tailwind CSS** | 3.3.2 | Framework CSS utilitaire |
| **Zustand** | 4.3.9 | State management |
| **Framer Motion** | 10.12.18 | Animations |
| **React Hook Form** | 7.45.1 | Gestion des formulaires |
| **Node.js** | >= 22 | Runtime |

### 1.3 Architecture generale

Le projet utilise une architecture **Static Site Generation (SSG)** :

- **Output**: Export statique (pas de serveur Node.js en production)
- **CMS**: Fichiers Markdown avec frontmatter YAML
- **Hebergement**: Netlify
- **Build**: Generation statique a chaque deploiement

```
┌─────────────────────────────────────────────────────┐
│                    BUILD TIME                        │
│                                                      │
│  Markdown Files → Services → Components → HTML      │
│                                                      │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                    RUNTIME                           │
│                                                      │
│  Static HTML → React Hydration → Interactivite      │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 2. Guide de demarrage rapide

### 2.1 Prerequisites

- **Node.js** version 22 ou superieure
- **npm** (inclus avec Node.js)
- **Git**

### 2.2 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd "Site Web"

# Installer les dependances
npm install

# Copier le template des variables d'environnement
cp .env.tpl .env
```

### 2.3 Configuration des variables d'environnement

Editer le fichier `.env` avec les valeurs appropriees :

```env
# URL du site (obligatoire)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPCHA_PUBLIC=votre_cle_recaptcha

# EmailJS - Formulaire de contact
NEXT_PUBLIC_EMAIL_JS_SERVICE=votre_service_id
NEXT_PUBLIC_EMAIL_JS_TEMPLATE=votre_template_id
NEXT_PUBLIC_EMAIL_JS_USER=votre_user_id

# Mailchimp - Newsletter
NEXT_PUBLIC_MAILCHIMP_API_KEY=votre_api_key
NEXT_PUBLIC_MAILCHIMP_API_SERVER=us1  # ou autre serveur
NEXT_PUBLIC_AUDIENCE_DESIGN_ID=audience_id_design
NEXT_PUBLIC_AUDIENCE_DIGITAL_ID=audience_id_digital
NEXT_PUBLIC_AUDIENCE_ENGINEERING_ID=audience_id_ingenierie

# Netlify Functions
NEXT_PUBLIC_URL_NETLIFY_SUBSCRIBE=/.netlify/functions/subscribe

# Debug (optionnel)
NEXT_PUBLIC_SHOW_LOGGER=false
```

### 2.4 Commandes npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Demarrer le serveur de developpement |
| `npm run build` | Construire le site statique |
| `npm start` | Demarrer le serveur de production |
| `npm run lint` | Verifier le code avec ESLint |
| `npm run lint:fix` | Corriger automatiquement les erreurs |
| `npm run lint:strict` | Lint avec zero avertissement (CI) |
| `npm run typecheck` | Verification des types TypeScript |
| `npm run format` | Formater le code avec Prettier |
| `npm run format:check` | Verifier le formatage (CI) |
| `npm run localserver` | Demarrer Netlify/Decap CMS local |
| `npm run release` | Creer une nouvelle release |

### 2.5 Premier lancement

```bash
# Demarrer le serveur de developpement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:3000
```

---

## 3. Architecture technique

### 3.1 Structure des dossiers

```
Site Web/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout racine
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── providers.tsx       # Providers globaux
│   │   ├── agence/             # Pages Agence
│   │   ├── expertises/         # Pages Expertises
│   │   ├── realisations/       # Pages Projets
│   │   ├── publications/       # Pages Blog
│   │   ├── contact/            # Page Contact
│   │   └── ...
│   │
│   ├── components/             # Composants React
│   │   ├── layout/             # Layout (Header, Footer)
│   │   ├── primitives/         # Composants reutilisables
│   │   ├── sections/           # Sections de page
│   │   ├── common/             # Composants communs
│   │   ├── icons/              # Icones par categorie
│   │   └── modal/              # Modales
│   │
│   ├── services/               # Couche d'acces aux donnees
│   │   ├── utils.ts            # Utilitaires (readFile, etc.)
│   │   ├── project.service.ts  # Service projets
│   │   ├── post.service.ts     # Service articles
│   │   └── ...
│   │
│   ├── data/                   # Contenu Markdown
│   │   ├── projects/           # Fichiers projets
│   │   ├── posts/              # Fichiers articles
│   │   ├── pages/              # Contenu des pages
│   │   ├── tags/               # Definitions des tags
│   │   └── ...
│   │
│   ├── store/                  # State management (Zustand)
│   │   └── use-app-store.tsx
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── use-is-hydrated.ts
│   │   ├── use-theme.ts
│   │   └── ...
│   │
│   ├── lib/                    # Utilitaires et constantes
│   │   ├── constants.ts
│   │   ├── clsxm.ts
│   │   └── ...
│   │
│   ├── ts/                     # Types TypeScript
│   │   ├── project.ts
│   │   ├── post.ts
│   │   └── ...
│   │
│   └── css/                    # Styles globaux
│       └── globals.scss
│
├── public/                     # Assets statiques
│   ├── imgs/
│   ├── fonts/
│   ├── favicon/
│   └── admin/                  # Config Netlify CMS
│
├── netlify/                    # Fonctions Netlify
│   └── functions/
│       └── subscribe.mts
│
├── .github/                    # GitHub Actions
│   └── workflows/
│
└── Configuration files...
```

### 3.2 Configuration Next.js

**`next.config.js`**:

```javascript
const nextConfig = {
  output: 'export',        // Export statique
  distDir: '.next',
  webpack: (config) => {
    // Support Markdown
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // SVG en composants React
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: { typescript: true, icon: false }
      }],
    });

    return config;
  },
};
```

### 3.3 Configuration TypeScript

**`tsconfig.json`**:

```json
{
  "compilerOptions": {
    "target": "es5",
    "strict": true,
    "paths": {
      "@/*": ["./src/*"],
      "~/*": ["./public/*"]
    }
  }
}
```

**Aliases de chemins**:
- `@/` → `./src/` (composants, services, hooks, etc.)
- `~/` → `./public/` (assets statiques)

---

## 4. Documentation des composants

### 4.1 Layout Components

#### `Layout.tsx`

**Chemin**: `src/components/layout/Layout.tsx`

Composant racine qui englobe toutes les pages.

```typescript
interface Props {
  navLinks: INavigation[];
  children: ReactNode;
  footerLinks: IFooter | null;
}
```

**Fonctionnalites**:
- Gestion de l'hydratation (SSR)
- Detection de la navigation au clavier (tabbing)
- Rendu conditionnel du SkipLink

**Exemple d'utilisation** (dans `layout.tsx`):
```tsx
<Layout navLinks={navLinks} footerLinks={footerLinks}>
  {children}
</Layout>
```

---

#### `Header.tsx`

**Chemin**: `src/components/layout/header/Header.tsx`

Barre de navigation fixe en haut de page.

```typescript
interface Props {
  links: INavigation[];
  isTabbing: boolean;
}
```

**Composants enfants**:
- `Logo` - Logo du site
- `DesktopNavbar` - Navigation desktop
- `ToggleTheme` - Bouton mode sombre/clair
- `MobileMenu` - Menu hamburger mobile

**Styles**:
- Hauteur: `72px` (mobile), `112px` (desktop)
- Position fixe avec transition fluide
- Role ARIA: `banner`

---

#### `Footer.tsx`

**Chemin**: `src/components/layout/footer/Footer.tsx`

Pied de page avec liens et reseaux sociaux.

```typescript
interface Props {
  data: IFooter;
}
```

**Composants enfants**:
- `FooterMenuText` - Liens texte
- `FooterMenuSocial` - Icones reseaux sociaux

---

#### `Page.tsx`

**Chemin**: `src/components/layout/Page.tsx`

Wrapper pour les pages qui reinitialise l'etat du menu modal.

```tsx
'use client';

export const Page = ({ children }: { children: ReactNode }) => {
  const { setOpenModalMenu } = useAppStore();

  useEffect(() => {
    setOpenModalMenu(false);
  }, []);

  return <>{children}</>;
};
```

---

### 4.2 Primitives (Composants reutilisables)

#### `Button`

**Chemin**: `src/components/primitives/Button.tsx`

Bouton anime avec plusieurs variantes de couleur.

```typescript
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'blue' | 'red' | 'green' | 'yellow';
  icon?: boolean;      // Affiche une fleche
  noAnim?: boolean;    // Desactive les animations
  href?: string;       // Transforme en lien
}
```

**Variantes de couleur**:

| Variant | Light Mode | Dark Mode |
|---------|------------|-----------|
| `primary` | Fond noir, texte blanc | Fond blanc, texte noir |
| `secondary` | Fond blanc, bordure noire | Fond noir, bordure blanche |
| `blue` | Fond bleu fonce | Fond bleu clair |
| `red` | Fond rouge fonce | Fond rouge clair |
| `green` | Fond vert fonce | Fond vert clair |
| `yellow` | Fond jaune fonce | Fond jaune clair |

**Animations Framer Motion**:
- `whileHover`: scale 1.05
- `whileTap`: scale 0.9

**Exemple d'utilisation**:
```tsx
<Button variant="blue" icon onClick={handleClick}>
  Decouvrir
</Button>

<Button variant="secondary" href="/contact">
  Nous contacter
</Button>
```

---

#### `LinkButton`

**Chemin**: `src/components/primitives/LinkButton.tsx`

Lien style en bouton (memes variantes que Button).

```typescript
type LinkButtonProps = {
  variant?: 'primary' | 'secondary' | 'blue' | 'red' | 'green' | 'yellow';
  icon?: boolean;
  noAnim?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  forceBlackText?: boolean;  // Force le texte en noir
}
```

**Exemple**:
```tsx
<LinkButton variant="green" href="/expertises/design">
  En savoir plus
</LinkButton>
```

---

#### `Tag`

**Chemin**: `src/components/primitives/Tag.tsx`

Badge/etiquette de categorie.

```typescript
interface Props extends TagType {
  className?: string;
}

type TagType = {
  type: 'expertise' | 'business';
  label: string;
  color: 'default' | 'a-blue' | 'a-red' | 'a-green' | 'a-yellow';
}
```

**Couleurs disponibles**:

| Color | Light Mode | Dark Mode |
|-------|------------|-----------|
| `a-blue` | #4559A4 | #437ABE |
| `a-red` | #B02117 | #E72E54 |
| `a-green` | #077D8A | #51B1B0 |
| `a-yellow` | #FDBE2D | #FECF54 |
| `default` | Noir | Blanc |

**Exemple**:
```tsx
<Tag type="expertise" label="Design" color="a-blue" />
<Tag type="business" label="Formation" color="a-green" />
```

---

#### `ProjectCard`

**Chemin**: `src/components/primitives/ProjectCard.tsx`

Carte de presentation d'un projet.

```typescript
type Props = ProjectType;

interface ProjectType {
  slug: string;
  title: string;
  image: { url: string; alt?: string };
  tags: TagType[];
  client: ClientType;
}
```

**Fonctionnalites**:
- Navigation au clic et au clavier (Enter)
- Image avec ratio aspect-video
- Tags avec composant Tag
- Effet d'ombre (shadow-project-card)

**Accessibilite**:
- `role="button"`
- `tabIndex={0}`
- Gestion `onKeyDown` pour Enter

**Exemple**:
```tsx
<ProjectCard
  slug="projet-exemple"
  title="Titre du projet"
  image={{ url: "/imgs/projet.jpg", alt: "Description" }}
  tags={[{ label: "Design", color: "a-blue", type: "expertise" }]}
  client={{ name: "Client", slug: "client" }}
/>
```

---

#### `TeamCard`

**Chemin**: `src/components/primitives/TeamCard.tsx`

Carte de membre de l'equipe.

```typescript
interface MemberType {
  name: string;
  image: string;
  badge: TagType;
  linkedin: string;
  skills: { text: string }[];
  decorativeOrInformative?: boolean;
}
```

**Fonctionnalites**:
- Photo du membre
- Badge d'expertise (Tag)
- Lien LinkedIn avec icone
- Liste des competences

**Exemple**:
```tsx
<TeamCard
  name="Marie Dupont"
  image="/imgs/team/marie.jpg"
  badge={{ label: "Design", color: "a-blue", type: "expertise" }}
  linkedin="https://linkedin.com/in/marie"
  skills={[{ text: "UX Design" }, { text: "Accessibilite" }]}
/>
```

---

#### `PostItem`

**Chemin**: `src/components/primitives/PostItem.tsx`

Element de liste pour un article de blog.

```typescript
interface PostType {
  slug: string;
  title: string;
  tags: TagType[];
  timeToRead: string;
}
```

**Exemple**:
```tsx
<PostItem
  slug="article-exemple"
  title="Titre de l'article"
  tags={[{ label: "Digital", color: "a-red", type: "expertise" }]}
  timeToRead="2 a 3 min"
/>
```

---

#### `ExpertiseCard`

**Chemin**: `src/components/primitives/ExpertiseCard.tsx`

Carte pour une expertise/sous-page.

---

#### `PartnerItem`

**Chemin**: `src/components/primitives/PartnerItem.tsx`

Element pour afficher un partenaire.

---

#### `MarkdownText`

**Chemin**: `src/components/primitives/MarkdownText.tsx`

Rendu de contenu Markdown.

```tsx
<MarkdownText className="prose">
  {markdownContent}
</MarkdownText>
```

---

#### `MarkdownSection`

**Chemin**: `src/components/primitives/MarkdownSection.tsx`

Section complete avec contenu Markdown.

---

#### `InputController`

**Chemin**: `src/components/primitives/Form/InputController.tsx`

Wrapper React Hook Form pour les champs de formulaire.

---

#### `Portal`

**Chemin**: `src/components/primitives/Portal.tsx`

Composant portal pour les modales/dropdowns.

---

### 4.3 Sections

Les sections sont des composants de page plus larges qui combinent plusieurs primitives.

#### Sections Home (`src/components/sections/home/`)

| Composant | Description |
|-----------|-------------|
| `Banner.tsx` | Banniere hero de la page d'accueil |
| `Intro.tsx` | Section d'introduction |
| `Offers.tsx` | Liste des offres/services |
| `Agency.tsx` | Presentation de l'agence |
| `Projects.tsx` | Projets mis en avant |
| `LastPosts.tsx` | Derniers articles du blog |
| `Newsletter.tsx` | Formulaire d'inscription newsletter |
| `Contact.tsx` | CTA de contact |

#### Sections Projects (`src/components/sections/projects/`)

| Composant | Description |
|-----------|-------------|
| `AllProjects.tsx` | Liste filtrable de tous les projets |
| `ProjectsFeatured.tsx` | Grille de projets en vedette |
| `FilterTagsDropdown.tsx` | Dropdown de filtrage par tags |
| `DisplayActiveTags.tsx` | Affichage des filtres actifs |

#### Sections Expertises (`src/components/sections/expertises/`)

Organisation par domaine :
- `design/DesignSections.tsx`
- `ingenierie/IngenierieSections.tsx`
- `mobilites/MobilitesSections.tsx`
- `formation/FormationSections.tsx`

#### Sections Contact (`src/components/sections/contact/`)

| Composant | Description |
|-----------|-------------|
| `Form.tsx` | Formulaire de contact |
| `Footer.tsx` | Pied de page contact |
| `WrapperContact.tsx` | Provider de contexte |

---

### 4.4 Common Components

#### `AtipyIcon`

**Chemin**: `src/components/common/icons/AtipyIcon.tsx`

Systeme d'icones unifie.

```typescript
enum ATIPY_ICON {
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_DOWN,
  ARROW_CIRCLE_RIGHT,
  LINKEDIN,
  TWITTER,
  INSTAGRAM,
  MOON,
  CLOCK,
  PHONE,
  CROSS,
  // ...
}

interface Props {
  type: ATIPY_ICON;
  size?: 'sm' | 'md' | 'lg';
  isDecorative?: boolean;   // aria-hidden=true
  isInformative?: boolean;  // avec alt text
  className?: string;
}
```

**Exemple**:
```tsx
<AtipyIcon type={ATIPY_ICON.LINKEDIN} size="md" isDecorative />
```

---

#### `AtipyImage`

**Chemin**: `src/components/common/icons/AtipyImage.tsx`

Wrapper d'image avec gestion de l'accessibilite.

```typescript
interface Props {
  src: string;
  altText?: string;
  isDecorative?: boolean;
  isInformative?: boolean;
  className?: string;
}
```

---

#### `SkipLink`

**Chemin**: `src/components/common/SkipLink.tsx`

Lien "Aller au contenu" pour l'accessibilite clavier.

---

#### `ScrollUp`

**Chemin**: `src/components/common/ScrollUp.tsx`

Bouton de retour en haut de page.

---

#### `Breadcrumb`

**Chemin**: `src/components/common/Breadcrumb.tsx`

Fil d'Ariane pour la navigation.

---

## 5. Services et donnees

### 5.1 Architecture des services

Les services sont responsables de :
- Lecture des fichiers Markdown
- Parsing du frontmatter YAML avec `gray-matter`
- Transformation des donnees brutes en types TypeScript

**Pattern de service**:
```typescript
// 1. Lire le fichier Markdown
const matterResult = readFile<InputType>(path);

// 2. Transformer les donnees
const data = transformData(matterResult.data);

// 3. Retourner le type final
return data as OutputType;
```

### 5.2 Service utilitaire (`utils.ts`)

**Chemin**: `src/services/utils.ts`

```typescript
// Lire et parser un fichier Markdown
export const readFile = <T>(path: string): GrayMatterFile<T> => {
  const content = fs.readFileSync(path, { encoding: 'utf-8' });
  return matter(content) as GrayMatterFile<string, T>;
};

// Lister les fichiers Markdown d'un dossier
export const readFolder = (pathFolder: string): string[] => {
  const files = fs.readdirSync(pathFolder);
  return files.filter((file) => file.endsWith('.md'));
};

// Obtenir les slugs d'un dossier
export const getSlugs = (pathFolder: string): string[] | null => {
  const files = readFolder(pathFolder);
  return files.map((file) => file.replace('.md', ''));
};

// Obtenir les metadonnees d'une page
export const getMetadata = (path: string): MetadataType => {
  const matterResult = readFile<{ metadata: InputMetadataType }>(path);
  return {
    title: matterResult.data?.metadata.title || 'Atipy',
    description: matterResult.data?.metadata.description,
    keywords: matterResult.data?.metadata.keywords,
    ogImg: matterResult.data?.metadata.ogImg,
  };
};
```

### 5.3 Services disponibles

| Service | Chemin | Description |
|---------|--------|-------------|
| `project.service.ts` | `src/services/` | Projets/realisations |
| `post.service.ts` | `src/services/` | Articles de blog |
| `expertise.service.ts` | `src/services/` | Pages expertises |
| `tag.service.ts` | `src/services/` | Tags (business et expertise) |
| `navigation.service.ts` | `src/services/` | Liens de navigation |
| `footer.service.ts` | `src/services/` | Donnees du footer |
| `home.service.ts` | `src/services/` | Page d'accueil |
| `contact.service.ts` | `src/services/` | Page contact |
| `agence.service.ts` | `src/services/` | Page agence |
| `tribu.service.ts` | `src/services/` | Page equipe |
| `partner.service.ts` | `src/services/` | Partenaires |
| `client.service.ts` | `src/services/` | Clients |
| `engagement.service.ts` | `src/services/` | Modal engagement |
| `accessibility.service.ts` | `src/services/` | Declaration accessibilite |
| `mentionlegales.service.ts` | `src/services/` | Mentions legales |
| `sitemap.service.ts` | `src/services/` | Plan du site |

### 5.4 Exemple: Project Service

**Chemin**: `src/services/project.service.ts`

```typescript
const PATH_FOLDER = 'src/data/projects';

// Obtenir tous les slugs de projets
export const getProjectsSlug = (): string[] => {
  // ...
};

// Obtenir tous les projets
export const getProjects = (): ProjectType[] => {
  const slugs = getProjectsSlug();
  const projects = [];

  for (const slug of slugs) {
    const matterResult = readFile<InputProjectType>(`${PATH_FOLDER}/${slug}.md`);

    if (matterResult?.data) {
      const client = getClient(matterResult.data.project_client);
      const tags = getTagsExpertiseByLabels(matterResult.data.project_tags);

      projects.push({
        slug,
        title: matterResult.data.title,
        image: matterResult.data.image,
        client,
        tags,
        // ...
      });
    }
  }

  return projects;
};

// Obtenir un projet par slug
export const getProjectBySlug = (slug: string): ProjectType | null => {
  // ...
};

// Obtenir le lien vers le projet suivant
export const getProjectNextLink = (slug: string) => {
  // ...
};
```

### 5.5 Types TypeScript

**Chemin**: `src/ts/`

#### Types Projet (`project.ts`)

```typescript
// Type d'entree (depuis le Markdown)
export type InputProjectType = {
  slug: string;
  title: string;
  image: {
    url: string;
    alt?: string;
    decorativeOrInformative?: boolean;
  };
  project_client: string;      // Slug du client
  project_tags: string[];       // Labels des tags
  mission_body: string;
  context_body: string;
  project_sections: SectionType[];
  projectsFeatured: string[];   // Slugs des projets lies
  footer?: {
    btn?: {
      label?: string;
      color?: 'blue' | 'green' | 'red' | 'yellow';
      tag: string;
    };
  };
};

// Type de sortie (apres transformation)
export type ProjectType = {
  slug: string;
  title: string;
  image: { url: string; alt?: string };
  client: ClientType;           // Objet client complet
  tags: TagType[];              // Objets tags complets
  mission_body: string;
  context_body: string;
  project_sections: SectionType[];
  projectsFeatured: ProjectType[]; // Objets projets complets
  footer?: { /* ... */ };
};
```

#### Types Tag (`tag.ts`)

```typescript
export type TagColor = 'default' | 'a-blue' | 'a-red' | 'a-green' | 'a-yellow';

export type TagExpertiseType = {
  type: 'expertise';
  label: string;
  color: TagColor;
};

export type TagBusinessType = {
  type: 'business';
  label: string;
  color: TagColor;
};

export type TagType = TagExpertiseType | TagBusinessType;

// Avec etat actif (pour le filtrage)
export interface ITagExpertise extends TagExpertiseType {
  isActive: boolean;
}

export interface ITagBusiness extends TagBusinessType {
  isActive: boolean;
}
```

#### Types Post (`post.ts`)

```typescript
export type InputPostType = {
  metadata: MetadataType;
  date: string;
  title: string;
  timeToRead: string;
  post_tags: string[];
  post_sections: SectionType[];
  source: PostSourceType;
};

export type PostType = {
  slug: string;
  date: string;
  title: string;
  timeToRead: string;
  tags: TagExpertiseType[];
  sections: SectionType[];
  source: PostSourceType;
};
```

---

## 6. Gestion du contenu

### 6.1 Structure des fichiers Markdown

Tous les contenus sont stockes dans `src/data/` au format Markdown avec frontmatter YAML.

### 6.2 Ajouter un projet

**Chemin**: `src/data/projects/<slug>.md`

**Structure du fichier**:

```yaml
---
metadata:
  title: "Titre pour SEO"
  description: "Description pour SEO"
  ogImg: /media/image-og.jpg
  keywords:
    - keyword: mot-cle-1
    - keyword: mot-cle-2

title: "Titre du projet"

image:
  url: /media/image-principale.jpg
  alt: "Description de l'image"
  ariaHidden: false

project_client: slug-du-client   # Reference vers src/data/clients/

mission_body: >-
  Description de la mission (Markdown autorise)

context_body: >-
  Contexte du projet (Markdown autorise)

project_tags:
  - Design
  - FALC
  - Conception graphique

project_sections:
  - col1:
      reverseMobile: false
      text:
        content: >-
          #### Titre de section

          Contenu en Markdown...
    col2:
      reverseMobile: false
      image:
        url: /media/image-section.jpg
        alt: "Description"
        ariaHidden: false
    col3:
      reverseMobile: false

projectsFeatured:
  - slug-projet-lie-1
  - slug-projet-lie-2

footer:
  btn:
    label: "Decouvrez nos projets en FALC"
    color: green
    tag: FALC
---
```

**Champs obligatoires**:
- `title`
- `image.url`
- `project_client`
- `mission_body`
- `project_tags`

**Champs optionnels**:
- `metadata` (pour SEO)
- `context_body`
- `project_sections`
- `projectsFeatured`
- `footer`

### 6.3 Ajouter un article (publication)

**Chemin**: `src/data/posts/<slug>.md`

**Structure du fichier**:

```yaml
---
metadata:
  title: "Titre pour SEO"
  description: "Description pour SEO"
  keywords:
    - keyword: graphisme
    - keyword: accessibilite

title: "Titre de l'article"
date: 2025-04-29T10:17:39.564Z
timeToRead: "1 a 2 min"

post_tags:
  - Design
  - Conception graphique
  - Digital

post_sections:
  - inverseCol: false
    col1:
      reverseMobile: false
      text:
        content: >-
          ## Sous-titre

          Contenu en Markdown...
      image:
        url: /media/image.jpg
        decorativeOrInformative: false
    col2:
      reverseMobile: false
    col3:
      reverseMobile: false

source:
  col1:
    - label: "Nom de la source"
      url: "https://example.com"
  col2:
    - label: "Autre source"
      url: "https://example2.com"
---
```

**Champs obligatoires**:
- `title`
- `date`
- `timeToRead`
- `post_tags`

### 6.4 Modifier les pages statiques

Les pages statiques sont dans `src/data/pages/`.

**Pages disponibles**:
- `home.md` - Page d'accueil
- `contact.md` - Page contact
- `projects.md` - Page realisations
- `design.md`, `formation.md`, etc. - Pages expertises

### 6.5 Modifier la navigation

**Chemin**: `src/data/layout/navigation.md`

### 6.6 Modifier le footer

**Chemin**: `src/data/layout/footer.md`

### 6.7 Netlify CMS (Decap CMS)

L'interface d'administration permet de modifier le contenu sans editer les fichiers directement.

**Acces local**:
```bash
npm run localserver
# Ouvrir http://localhost:3000/admin
```

**Configuration**: `public/admin/config.yml`

---

## 7. State management

### 7.1 Store Zustand

**Chemin**: `src/store/use-app-store.tsx`

```typescript
export interface AppStore {
  // Modal menu mobile
  isOpenModalMenu: boolean;
  setOpenModalMenu: (isOpen: boolean) => void;

  // Modal engagement
  isOpenModalEngage: boolean;
  setOpenModalEngage: (isOpen: boolean) => void;

  // Projets
  projects: ProjectType[];
  setProjects: (projects: ProjectType[]) => void;

  // Tags pour filtrage
  tagsBusiness: ITagBusiness[];
  setTagsBusiness: (tags: TagBusinessType[]) => void;
  tagsExpertise: ITagExpertise[];
  setTagsExpertise: (tags: TagExpertiseType[]) => void;

  // Actions de filtrage
  setTagBusinessActive: (tag: TagBusinessType) => void;
  setTagExpertiseActive: (tag: TagExpertiseType) => void;
  removeTagBusiness: (tag: TagBusinessType) => void;
  removeTagExpertise: (tag: TagExpertiseType) => void;
  onResetTags: () => void;
}
```

### 7.2 Utilisation dans les composants

```tsx
import { useAppStore } from '@/store/use-app-store';

const MonComposant = () => {
  // Selectionner des valeurs
  const { projects, tagsExpertise } = useAppStore();

  // Selectionner des actions
  const { setTagExpertiseActive, onResetTags } = useAppStore();

  return (
    <button onClick={() => setTagExpertiseActive(tag)}>
      Filtrer
    </button>
  );
};
```

### 7.3 Initialisation

L'initialisation se fait dans `src/app/providers.tsx`:

```tsx
export default function Providers({ data, children }) {
  const { setProjects, setTagsBusiness, setTagsExpertise } = useAppStore();

  useEffect(() => {
    setProjects(data.projects);
    setTagsBusiness(data.tagsBusiness);
    setTagsExpertise(data.tagsExpertise);
  }, []);

  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}
```

---

## 8. Styling et design system

### 8.1 Configuration Tailwind

**Chemin**: `tailwind.config.js`

#### Couleurs personnalisees

```javascript
colors: {
  // Jaune
  'a-yellow-light': '#FECF54',
  'a-yellow-dark': '#FDBE2D',
  'a-yellow-or': '#D7AD31',

  // Rouge
  'a-red-light': '#E72E54',
  'a-red-dark': '#B02117',

  // Vert
  'a-green-light': '#51B1B0',
  'a-green-dark': '#077D8A',

  // Bleu
  'a-blue-light': '#437ABE',
  'a-blue-dark': '#4559A4',

  // Gris
  'grey-100': '#F2F2F2',
  'grey-110': '#767676',
  'grey-140': '#6A6A6A',
  'grey-150': '#DDDDDD',
  'grey-bg-form': '#F0F0F0',
  'grey-t-form': '#9A9A9A',

  // Dark mode
  'background': '#161616',
  'black-160': '#0A0A0A',
}
```

#### Typographie

```javascript
fontFamily: {
  primary: ['Atkinson Hyperlegible', 'sans-serif'],
  secondary: ['Roboto', 'sans-serif'],
},
fontSize: {
  body1: 'clamp(1rem, 2.5vw, 1.25rem)',
  body2: 'clamp(1rem, 2.5vw, 1.375rem)',
  body3: 'clamp(1rem, 0.8vw + 0.8rem, 1.563rem)',
}
```

**Note**: La police **Atkinson Hyperlegible** est une police concue pour l'accessibilite visuelle.

#### Breakpoints

```javascript
screens: {
  xxs: '321px',
  sm: '640px',     // Tailwind default
  md: '768px',     // Tailwind default
  lmd: '960px',    // Custom
  lg: '1024px',    // Tailwind default
  xl: '1280px',    // Tailwind default
  '1xl': '1440px', // Custom
  '3xl': '1680px', // Custom
  desktop: '1920px', // Custom
}
```

#### Box Shadows

```javascript
boxShadow: {
  'a-blue-light': '10px 10px 0px #437ABE',
  'a-blue-light-small': '6px 6px 0px #437ABE',
  // ... autres couleurs
  'project-card': '0px 0px 30px #DDDDDD',
  'project-filter': '0px 0px 10px #00000029',
}
```

### 8.2 Styles globaux (SCSS)

**Chemin**: `src/css/globals.scss`

#### Classes utilitaires

| Classe | Description |
|--------|-------------|
| `.ta` | Transition generale (0.3s ease) |
| `.tl` | Transition layout (padding, margin, gap, font-size, height) |
| `.px-fluid` | Padding horizontal fluide |
| `.py-fluid` | Padding vertical fluide |
| `.link-hover` | Animation underline de droite a gauche |
| `.link-hover-small` | Animation underline petite |
| `.visually-hidden` | Cache visuellement, visible pour lecteurs d'ecran |

#### Mode sombre

Le mode sombre est gere par `next-themes` avec la classe `dark` sur `<html>`.

```tsx
// Utilisation dans les composants
<div className="bg-white dark:bg-background text-black dark:text-white">
  Contenu adaptatif
</div>
```

### 8.3 Utilitaire clsxm

**Chemin**: `src/lib/clsxm.ts`

Combine `clsx` et `tailwind-merge` pour fusionner les classes CSS.

```typescript
import clsxm from '@/lib/clsxm';

// Exemple
<div className={clsxm(
  'base-class',
  isActive && 'active-class',
  className
)}>
```

---

## 9. Workflow de deploiement

### 9.1 CI/CD GitHub Actions

**Chemin**: `.github/workflows/lint.yml`

Trois jobs paralleles sur chaque push vers `devel` et sur les PR :

1. **ESLint** (`lint:strict`)
   - Zero avertissement autorise

2. **TypeScript** (`typecheck`)
   - Verification des types

3. **Prettier** (`format:check`)
   - Verification du formatage

### 9.2 Configuration Netlify

**Chemin**: `netlify.toml`

```toml
[site]
name = "Atipy"
domain = "https://atipy.fr/"

[build]
publish = "out/"

NEXT_USE_NETLIFY_EDGE = "true"

[[plugins]]
package = "@netlify/plugin-nextjs"

[[headers]]
for = "/*"
[headers.values]
Access-Control-Allow-Origin = "*"
Access-Control-Allow-Methods = "POST, OPTIONS"
Access-Control-Allow-Headers = "Content-Type"
```

### 9.3 Fonctions Netlify

**Chemin**: `netlify/functions/subscribe.mts`

Fonction serverless pour l'inscription a la newsletter via Mailchimp.

### 9.4 Process de release

**Branches**:
- `master` - Production
- `devel` - Developpement

**Workflow**:

1. Developper sur une branche feature
2. Creer une PR vers `devel`
3. Les checks CI doivent passer
4. Merger dans `devel`
5. `release-please` cree automatiquement une PR de release
6. Merger la PR de release pour deployer en production

**Semantic Versioning**:
- Le projet utilise `standard-version` pour le versioning
- Le CHANGELOG.md est genere automatiquement

---

## 10. Tests et qualite de code

### 10.1 ESLint

**Chemin**: `.eslintrc.js`

**Plugins**:
- `@typescript-eslint` - Regles TypeScript
- `eslint-plugin-jsx-a11y` - Regles accessibilite
- `eslint-plugin-simple-import-sort` - Tri des imports
- `eslint-plugin-unused-imports` - Detection des imports inutilises

**Commandes**:
```bash
npm run lint         # Check avec avertissements
npm run lint:strict  # Check zero avertissements (CI)
npm run lint:fix     # Correction automatique
```

### 10.2 Prettier

**Chemin**: `.prettierrc.js`

```javascript
module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  // ...
};
```

**Commandes**:
```bash
npm run format        # Formater tout
npm run format:check  # Verifier (CI)
```

### 10.3 TypeScript

**Mode strict** active dans `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

**Commande**:
```bash
npm run typecheck
```

### 10.4 Accessibilite (a11y)

Le projet met l'accent sur l'accessibilite :

- **Police Atkinson Hyperlegible** - Concue pour la lisibilite
- **ESLint jsx-a11y** - Verification des regles WCAG
- **Roles ARIA** - `banner`, `contentinfo`, `button`
- **Navigation clavier** - tabIndex, onKeyDown
- **Skip Link** - Lien "Aller au contenu"
- **Alt text** - Gestion via `isDecorative` / `isInformative`

---

## 11. Troubleshooting

### 11.1 Erreurs courantes

#### Erreur: "NEXT_PUBLIC_SITE_URL environment variable not set"

**Cause**: Variable d'environnement manquante

**Solution**:
```bash
cp .env.tpl .env
# Editer .env et definir NEXT_PUBLIC_SITE_URL
```

#### Erreur: "File not found" dans les services

**Cause**: Fichier Markdown manquant ou mal nomme

**Solution**: Verifier que le fichier existe dans `src/data/`

#### Erreur de build: "Module not found"

**Cause**: Dependance manquante ou chemin incorrect

**Solution**:
```bash
rm -rf node_modules
npm install
```

#### Le mode sombre ne fonctionne pas

**Cause**: Probleme d'hydratation

**Solution**: Verifier que `suppressHydrationWarning={true}` est sur `<html>`

### 11.2 Reset complet

```bash
# Supprimer les caches
rm -rf .next
rm -rf node_modules
rm -rf out

# Reinstaller
npm install

# Rebuilder
npm run build
```

---

## 12. Annexes

### 12.1 Liens utiles

| Ressource | URL |
|-----------|-----|
| Next.js Documentation | https://nextjs.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| Zustand | https://github.com/pmndrs/zustand |
| Framer Motion | https://www.framer.com/motion/ |
| gray-matter | https://github.com/jonschlinkert/gray-matter |
| React Hook Form | https://react-hook-form.com/ |
| Netlify | https://docs.netlify.com/ |

### 12.2 Commandes utiles

```bash
# Developpement
npm run dev

# Build et test local
npm run build && npm start

# Verification complete (comme CI)
npm run lint:strict && npm run typecheck && npm run format:check

# Corriger automatiquement
npm run lint:fix

# CMS local
npm run localserver
```

### 12.3 Structure d'une page type

```tsx
// src/app/[route]/page.tsx
import { Metadata } from 'next';

import { Page } from '@/components/layout/Page';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { SomeSection } from '@/components/sections/some/SomeSection';

import { getPageData, getPageMetadata } from '@/services/page.service';

export const metadata: Metadata = getPageMetadata();

export default function PageName() {
  const data = getPageData();

  if (!data) return null;

  return (
    <Page>
      <HeaderPage title={data.title} />
      <SomeSection data={data} />
    </Page>
  );
}
```

### 12.4 Ajouter un nouveau composant

1. Creer le fichier dans le bon dossier (`primitives/`, `sections/`, etc.)
2. Definir l'interface TypeScript des props
3. Utiliser `clsxm` pour les classes
4. Supporter le mode sombre avec `dark:`
5. Ajouter les attributs d'accessibilite si necessaire

```tsx
'use client'; // Si utilise des hooks

import clsxm from '@/lib/clsxm';

interface Props {
  title: string;
  className?: string;
}

export const MonComposant = ({ title, className }: Props) => {
  return (
    <div className={clsxm(
      'base-styles',
      'dark:dark-styles',
      className
    )}>
      <h2>{title}</h2>
    </div>
  );
};
```

---

## Contacts

Pour toute question technique concernant ce projet, contacter l'equipe de developpement.

---

*Documentation generee en Janvier 2026*
