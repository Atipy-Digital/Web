const pageCardFields = [
  {
    name: 'type',
    label: 'Type',
    widget: 'select',
    options: [
      { label: 'Ingenierie', value: 'ingenierie' },
      { label: 'Design', value: 'design' },
      { label: 'Digital', value: 'digital' },
      { label: 'Conseil et Formation', value: 'formation' },
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
];

export default pageCardFields;
