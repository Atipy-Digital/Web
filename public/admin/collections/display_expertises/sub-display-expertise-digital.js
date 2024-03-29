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
      add_to_top: true,
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_digital',
          search_fields: ['title'],
          display_fields: ['title'],
          value_field: '{{slug}}',
          default: 'title',
          multiple: false,
        },
      ],
    },
  ],
};

export default sub_display_expertises_digital;
