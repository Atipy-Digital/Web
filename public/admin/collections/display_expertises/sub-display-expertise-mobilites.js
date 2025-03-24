const sub_display_expertises_mobilites = {
  label: 'Expertise - Mobilites',
  name: 'sub_display_expertises_mobilites',
  file: 'src/data/display_expertises/sub_display_expertises_mobilites.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Expertises - Mobilites',
      name: 'display_expertises',
      widget: 'list',
      add_to_top: true,
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_mobilites',
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

export default sub_display_expertises_mobilites;
