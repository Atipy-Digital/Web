import metadata from '../common/metadata.js';

const projects = {
  label: 'Nos Réalisations',
  name: 'projects_page',
  file: 'src/data/pages/projects.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    metadata,
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      name: 'intro',
      label: 'Intro',
      widget: 'markdown',
      buttons: [
        'bold',
        'italic',
        'code',
        'link',
        'quote',
        'bulleted-list',
        'numbered-list',
      ],
      modes: ['rich_text'],
      editor_components: [],
      hint: 'Utiliser **code (<>)** pour surligner du texte',
    },
    {
      label: 'Projets à la une',
      name: 'projectsFeatured',
      widget: 'relation',
      collection: 'projects',
      search_fields: ['title', 'project_client.label'],
      display_fields: ['title'],
      value_field: '{{slug}}',
      multiple: true,
    },
  ],
};

export default projects;
