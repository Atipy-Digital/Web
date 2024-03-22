const sub_display_expertises_formation = {
  label: 'Expertise - Formation',
  name: 'sub_display_expertises_formation',
  file: 'src/data/display_expertises/sub_display_expertises_formation.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Expertises - Formation',
      name: 'display_expertises',
      widget: 'list',
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_formation',
          search_fields: ['title', 'sub_formation.title'],
          display_fields: ['title'],
          value_field: '{{slug}}',
          multiple: false,
        },
      ],
    },
  ],
};

export default sub_display_expertises_formation;
