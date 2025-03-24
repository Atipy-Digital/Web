const markdownAttr = {
  widget: 'markdown',
  buttons: ['bold', 'italic'],
  modes: ['rich_text'],
  editor_components: [],
};

const about = {
  label: 'Qui sommes-nous ?',
  name: 'about',
  file: 'src/data/pages/about.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'naissance',
      label: 'Section Naissance',
      ...markdownAttr,
    },
    {
      name: 'fusion',
      label: 'Section Fusion',
      ...markdownAttr,
    },
    {
      name: 'fusion2',
      label: 'Section Fusion2',
      ...markdownAttr,
    },
    {
      name: 'challenges',
      label: 'Section Enjeux',
      ...markdownAttr,
    },
    {
      name: 'cards',
      label: 'Pôles',
      hint: "Vous pouvez changer l'ordre des différentes cards",
      collapsed: true,
      widget: 'list',
      min: 3,
      max: 4,
      summary: '{{fields.title}} - {{fields.type}}',
      fields: [
        {
          label: 'Type',
          name: 'type',
          widget: 'select',
          options: [
            { label: 'Ingénierie', value: 'ENGINEER' },
            { label: 'Design', value: 'DESIGN' },
            { label: 'Mobilites', value: 'MOBILITES' },
            { label: 'Conseils et formations', value: 'CONSEIL' },
          ],
        },
        {
          name: 'imagesTheme',
          label: 'Images selon le thème',
          widget: 'object',
          fields: [
            {
              name: 'light',
              label: 'Image pour thème clair',
              widget: 'image',
              required: false,
              hint: 'Image à afficher en mode clair.',
            },
            {
              name: 'dark',
              label: 'Image pour thème foncé',
              widget: 'image',
              required: false,
              hint: 'Image à afficher en mode foncé.',
            },
          ],
        },
        {
          name: 'decorativeOrInformative',
          label: 'Est décorative (True) ou informative (False)',
          widget: 'boolean',
          default: false,
          required: false,
        },
        { label: 'Titre', name: 'title', widget: 'string' },
        {
          label: 'Text',
          name: 'body',
          widget: 'markdown',
          buttons: [],
          modes: ['rich_text'],
          editor_components: [],
        },
        {
          label: 'Bouton',
          name: 'button',
          widget: 'object',
          fields: [{ label: 'Label', name: 'label', widget: 'string' }],
        },
      ],
    },
  ],
};

export default about;
