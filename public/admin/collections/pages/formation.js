import sectionFields from '../common/section.js';

const formation = {
  label: 'Conseils et formations',
  name: 'expertise_formation_page',
  file: 'src/data/pages/formation.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'title',
      label: 'Titre',
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
        'heading-three',
        'quote',
        'bulleted-list',
        'numbered-list',
      ],
      modes: ['rich_text'],
      editor_components: [],
      hint: 'Utiliser **code (<>)** pour surligner du texte',
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

export default formation;
