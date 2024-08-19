import sectionFields from '../common/section.js';

const mentionsLegales = {
  label: 'Mentions légales',
  name: 'mentions_legales_page',
  file: 'src/data/pages/mentions_legales.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
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

export default mentionsLegales;
