import sectionFields from '../common/section.js';

const mobilites = {
  label: 'Mobilites',
  name: 'expertise_mobilites_page',
  file: 'src/data/pages/mobilites.md',
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

export default mobilites;
