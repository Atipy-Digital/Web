const ColFields = [
  {
    name: 'reverseMobile',
    label: 'Inverser image / text en mobile',
    widget: 'boolean',
    required: false,
    default: false,
  },
  {
    name: 'text',
    label: 'Texte',
    widget: 'object',
    fields: [
      {
        name: 'color',
        label: 'Couleur du texte',
        widget: 'select',
        required: false,
        options: [
          { value: 'blue', label: 'Bleu' },
          { value: 'green', label: 'Vert' },
          { value: 'red', label: 'Rouge' },
          { value: 'yellow', label: 'Jaune' },
        ],
      },
      {
        name: 'content',
        label: 'Choisir votre texte',
        widget: 'markdown',
        buttons: [
          'bold',
          'italic',
          'code',
          'link',
          'heading-three',
          'heading-four',
          'heading-five',
          'heading-six',
          'quote',
          'bulleted-list',
          'numbered-list',
        ],
        modes: ['rich_text'],
        hint: 'Utiliser **code (<>)** pour surligner du texte',
        editor_components: ['image'],
      },
    ],
  },
  {
    name: 'image',
    label: 'Image',
    widget: 'object',
    required: false,
    fields: [
      {
        name: 'url',
        label: 'Choisir une image',
        widget: 'image',
        required: false,
        choose_url: false,
        allow_multiple: false,
      },
      {
        name: 'legend',
        label: "Legende de l'image",
        required: false,
        widget: 'string',
      },
    ],
  },
];
const OptionnalColFields = [
  {
    name: 'reverseMobile',
    label: 'Inverser image / text en mobile',
    widget: 'boolean',
    required: false,
    default: false,
  },
  {
    name: 'text',
    label: 'Texte',
    widget: 'object',
    required: false,
    fields: [
      {
        name: 'color',
        label: 'Couleur du texte',
        widget: 'select',
        required: false,
        options: [
          { value: 'blue', label: 'Bleu' },
          { value: 'green', label: 'Vert' },
          { value: 'red', label: 'Rouge' },
          { value: 'yellow', label: 'Jaune' },
        ],
      },
      {
        name: 'content',
        label: 'Choisir votre texte',
        widget: 'markdown',
        required: false,
        buttons: [
          'bold',
          'italic',
          'code',
          'link',
          'heading-three',
          'heading-four',
          'heading-five',
          'heading-six',
          'quote',
          'bulleted-list',
          'numbered-list',
        ],
        modes: ['rich_text'],
        hint: 'Utiliser **code (<>)** pour surligner du texte',
        editor_components: ['image'],
      },
    ],
  },
  {
    name: 'image',
    label: 'Image',
    widget: 'object',
    required: false,
    fields: [
      {
        name: 'url',
        label: 'Choisir une image',
        widget: 'image',
        required: false,
        choose_url: false,
        allow_multiple: false,
      },
      {
        name: 'legend',
        label: "Legende de l'image",
        required: false,
        widget: 'string',
      },
    ],
  },
];

const sectionFields = [
  {
    name: 'inverseCol',
    label: 'Inverser les colonnes en mobile',
    widget: 'boolean',
    required: false,
    default: false,
  },
  {
    name: 'col1',
    label: 'Colonne 1',
    widget: 'object',
    fields: ColFields,
  },
  {
    name: 'col2',
    label: 'Colonne 2',
    widget: 'object',
    required: false,
    fields: OptionnalColFields,
  },
  {
    name: 'col3',
    label: 'Colonne 3',
    widget: 'object',
    required: false,
    fields: OptionnalColFields,
  },
];

export default sectionFields;
