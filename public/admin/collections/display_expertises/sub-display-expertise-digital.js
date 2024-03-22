const sub_display_expertises_digital = {
  label: 'Expertise - Digital',
  name: 'sub_display_expertises_digital',
  file: 'src/data/display_expertises/sub_display_expertises_digital.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Expertises - Digital',
      name: 'display_expertises',
      widget: 'list',
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_digital',
          search_fields: ['title', 'sub_digital.title'],
          display_fields: ['title'],
          value_field: '{{slug}}',
          multiple: false,
        },
      ],
    },
  ],
};

export default sub_display_expertises_digital;
