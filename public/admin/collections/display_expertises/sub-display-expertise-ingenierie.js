const sub_display_expertises_ingenierie = {
  label: 'Expertise - Ingénierie',
  name: 'sub_display_expertises_ingenierie',
  file: 'src/data/display_expertises/sub_display_expertises_ingenierie.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Expertises - Ingénierie',
      name: 'display_expertises',
      widget: 'list',
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_ingenierie',
          search_fields: ['title', 'sub_ingenierie.title'],
          display_fields: ['title'],
          value_field: '{{slug}}',
          multiple: false,
        },
      ],
    },
  ],
};

export default sub_display_expertises_ingenierie;
