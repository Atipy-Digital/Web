import sectionFields from '../common/section.js';

const conception = {
  label: 'La conception universelle',
  name: 'conception',
  file: 'src/data/pages/conception.md',
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

export default conception;
