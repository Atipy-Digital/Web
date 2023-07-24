const markdownAttr = {
  widget: 'markdown',
  buttons: ['bold', 'italic'],
  modes: ['rich_text'],
  editor_components: [],
};

const partners = {
  label: 'Nos Partenaires',
  name: 'partners_page',
  file: 'src/data/pages/partners.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'intro',
      label: 'Intro',
      widget: 'markdown',
      buttons: ['bold', 'italic'],
      modes: ['rich_text'],
      editor_components: [],
      hint: "Utiliser l'italic pour utliser la font Atkinson",
    },
    {
      name: 'partners',
      label: 'Partner',
      summary: 'Partner - {{fields.name}}',
      widget: 'list',
      collapsed: true,
      fields: [
        {
          name: 'name',
          label: 'Nom',
          widget: 'string',
        },
        {
          name: 'logo',
          label: 'Logo',
          widget: 'image',
          hint: '**Penser au dark mode,** format en **.webp** et renomer le fichier de type **{partner}-{logo}.webp**',
          choose_url: false,
          allow_multiple: false,
        },
        {
          name: 'isSingle',
          label: 'Une seule personne',
          widget: 'boolean',
          required: false,
          default: false,
        },
        {
          name: 'aboutUs',
          label: 'Tab - Qui sont-ils ?',
          ...markdownAttr,
        },
        {
          name: 'collaborate',
          label: 'Tab - Pourquoi collaborer ?',
          ...markdownAttr,
        },
        {
          name: 'projects',
          label: 'Tab - Projets en collaboration',
          ...markdownAttr,
        },
      ],
    },
  ],
};

export default partners;
