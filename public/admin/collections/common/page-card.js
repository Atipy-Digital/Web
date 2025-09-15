const pageCardFields = [
  {
    name: 'type',
    label: 'Type',
    widget: 'select',
    options: [
      { label: 'Ingenierie', value: 'ingenierie' },
      { label: 'Design', value: 'design' },
      { label: 'Mobilites', value: 'mobilites' },
      { label: 'Conseil et Formation', value: 'formation' },
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
