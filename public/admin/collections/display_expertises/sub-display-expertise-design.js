const sub_display_expertises_design = {
  label: 'Expertise - Design',
  name: 'sub_display_expertises_design',
  file: 'src/data/display_expertises/sub_display_expertises_design.md',
  create: true,
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Expertises - Design',
      name: 'display_expertises',
      widget: 'list',
      fields: [
        {
          label: 'Expertise',
          name: 'expertise',
          widget: 'relation',
          collection: 'sub_design',
          search_fields: ['title', 'sub_design.title'],
          display_fields: ['title'],
          value_field: '{{slug}}',
          multiple: false,
        },
      ],
    },
  ],
};

export default sub_display_expertises_design;
