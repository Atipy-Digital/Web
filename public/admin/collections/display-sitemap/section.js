const mainFields = [
  {
    name: 'page',
    label: 'Page et Url',
    widget: 'object',
    require: true,
    fields: [
      {
        name: 'Titre',
        label: 'Titre de la page',
        widget: 'text',
      },
      {
        name: 'Url',
        label: 'Url de la page',
        widget: 'text',
      },
      {
        name: 'secondaryPages',
        label: 'Pages secondaires',
        widget: 'list',
        fields: [
          {
            name: 'secondaryTitre',
            label: 'Titre secondaire',
            widget: 'text',
          },
          {
            name: 'secondaryUrl',
            label: 'Url secondaire',
            widget: 'text',
          },
          {
            name: 'subPages',
            label: 'Sous-pages',
            widget: 'list',
            fields: [
              {
                name: 'subPageTitre',
                label: 'Titre de la sous-page',
                widget: 'text',
              },
              {
                name: 'subPageUrl',
                label: 'Url de la sous-page',
                widget: 'text',
              },
            ],
            required: false,
          },
        ],
        required: false,
      },
    ],
  },
];

const sectionFields = [
  {
    name: 'col1',
    label: "L'agence",
    widget: 'object',
    fields: mainFields,
  },
  {
    name: 'col2',
    label: 'Nos expertises',
    widget: 'object',
    fields: mainFields,
  },
  {
    name: 'col3',
    label: 'Nos Réalisations',
    widget: 'object',
    fields: mainFields,
  },
  {
    name: 'col4',
    label: 'Publications',
    widget: 'object',
    fields: mainFields,
  },
  {
    name: 'col5',
    label: 'Contactez-nous',
    widget: 'object',
    fields: mainFields,
  },
];

export default sectionFields;
