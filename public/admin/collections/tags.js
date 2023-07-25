const tagFields = [
  {
    label: 'Nom',
    name: 'label',
    widget: 'string',
    hint: '**Identifiant unique**',
  },
  {
    label: 'Couleur',
    name: 'color',
    widget: 'select',
    options: [
      { label: 'Bleu', value: 'a-blue' },
      { label: 'Rouge', value: 'a-red' },
      { label: 'Vert', value: 'a-green' },
      { label: 'Jaune', value: 'a-yellow' },
      { label: 'Noir', value: 'default' },
    ],
  },
];

const business_tags = {
  label: "Tag Secteur d'activité",
  name: 'business_tags',
  file: 'src/data/tags/business_tags.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: "Tag Secteur d'activité",
      name: 'tag',
      widget: 'list',
      summary: '{{fields.label}}',
      collapsed: true,
      fields: [
        {
          label: 'Type',
          name: 'type',
          widget: 'hidden',
          default: 'business',
        },
        ...tagFields,
      ],
    },
  ],
};
const expertise_tags = {
  label: 'Tag Expertise',
  name: 'expertise_tags',
  file: 'src/data/tags/expertise_tags.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Tag Expertise',
      name: 'tag',
      widget: 'list',
      summary: '{{fields.label}}',
      collapsed: true,
      fields: [
        {
          label: 'Type',
          name: 'type',
          widget: 'hidden',
          default: 'expertise',
        },
        ...tagFields,
      ],
    },
  ],
};

const tags = {
  label: 'Tags',
  name: 'tags',
  files: [business_tags, expertise_tags],
};

export default tags;
