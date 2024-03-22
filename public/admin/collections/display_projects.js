const display_projects = {
  name: 'page_display_realisations',
  label: 'Affichage des réalisations',
  files: [
    {
      label: 'Réalisations',
      name: 'page_display_realisations',
      file: 'src/data/display_realisations/display_realisations.md',
      create: true,
      widget: 'list',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Réalisations',
          name: 'display_realisations',
          widget: 'list',
          fields: [
            {
              label: 'Réalisation',
              name: 'realisation',
              widget: 'relation',
              collection: 'projects',
              search_fields: ['title'],
              display_fields: ['title'],
              value_field: '{{slug}}',
              default: 'title',
              multiple: false,
            },
          ],
        },
      ],
    },
  ],
};

export default display_projects;
