const agence = {
  label: "L'agence",
  name: 'agence',
  file: 'src/data/pages/agence.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'cards',
      label: 'Cards',
      collapsed: true,
      widget: 'list',
      summary: 'Card - {{fields.title}}',
      fields: [
        {
          name: 'type',
          label: 'Type',
          widget: 'select',
          options: [
            { label: 'Qui sommes-nous ?', value: 'about' },
            { label: 'La conception universelle', value: 'conception' },
            { label: 'La Tribu', value: 'tribu' },
            { label: 'Nos partenaires', value: 'partners' },
          ],
        },
        {
          name: 'title',
          label: 'Titre',
          widget: 'string',
        },
        {
          name: 'text',
          label: 'Texte',
          widget: 'markdown',
          buttons: ['code', 'bold', 'link'],
          modes: ['rich_text'],
          editor_components: [],
          hint: 'Utiliser **code (<>)** pour surligner du texte',
        },
        {
          name: 'url',
          label: 'URL personnalisée',
          widget: 'string',
          requird: false,
          hint: "Slug de la page, par ex 'a-propos' ou 'nos-partenaires'.",
        },
      ],
    },
  ],
};

export default agence;
