import sectionFields from '../common/section.js';

const clients = {
  label: 'Nos Clients',
  name: 'page_clients',
  file: 'src/data/pages/clients.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'intro',
      label: 'Intro',
      widget: 'markdown',
      buttons: ['bold', 'italic'],
      modes: ['rich_text'],
      editor_components: [],
      hint: "Utiliser l'italic pour utliser la font Atkinson",
    },
    {
      name: 'sections',
      label: 'Sections',
      widget: 'list',
      collapsed: true,
      summary: 'Section',
      fields: sectionFields,
    },
  ],
};

export default clients;
