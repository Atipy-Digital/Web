const menuTextFields = [
  {
    label: 'Titre',
    name: 'title',
    widget: 'string',
  },
  {
    label: 'Ligne',
    hint: "Vous pouvez changer l'ordre des différentes lignes",
    name: 'rows',
    widget: 'list',
    summary:
      '{{fields.link1.label}} - {{fields.link2.label}} - {{fields.link3.label}}',
    fields: [
      {
        label: 'Lien 1',
        name: 'link1',
        widget: 'object',
        fields: [
          { label: 'Label', name: 'label', widget: 'string' },
          {
            label: 'Url',
            name: 'url',
            widget: 'select',
            options: [
              '/plan-du-site',
              '/declaration-accessibilite',
              '/mentions-legales',
            ],
          },
        ],
      },
      {
        label: 'Lien 2',
        name: 'link2',
        widget: 'object',
        fields: [
          { label: 'Label', name: 'label', widget: 'string' },
          {
            label: 'Url',
            name: 'url',
            widget: 'select',
            options: [
              '/plan-du-site',
              '/declaration-accessibilite',
              '/mentions-legales',
            ],
          },
        ],
      },
      {
        label: 'Lien 3',
        name: 'link3',
        widget: 'object',
        fields: [
          { label: 'Label', name: 'label', widget: 'string' },
          {
            label: 'Url',
            name: 'url',
            widget: 'select',
            options: [
              '/plan-du-site',
              '/declaration-accessibilite',
              '/mentions-legales',
            ],
          },
        ],
      },
    ],
  },
];

const footer = {
  label: 'Footer',
  name: 'footer',
  file: 'src/data/layout/footer.md',
  fields: [
    {
      label: 'Menu text 1',
      name: 'menuText1',
      widget: 'object',
      fields: menuTextFields,
    },
    {
      label: 'Menu text 2',
      name: 'menuText2',
      widget: 'object',
      fields: [
        { label: 'Titre', name: 'title', widget: 'string' },
        { label: 'Email', name: 'email', widget: 'string' },
      ],
    },
    {
      label: 'Menu social',
      name: 'menuSocial',
      widget: 'object',
      fields: [
        { label: 'Titre', name: 'title', widget: 'string' },
        {
          label: 'Lien',
          hint: "Vous pouvez changer l'ordre des différents liens",
          name: 'rows',
          widget: 'list',
          fields: [
            {
              label: 'Type',
              name: 'type',
              widget: 'select',
              options: ['instagram', 'linkedin', 'twitter'],
            },
            {
              label: 'Url',
              name: 'url',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};

export default footer;
