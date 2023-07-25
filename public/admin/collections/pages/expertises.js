import pageCardFields from '../common/page-card.js';

const expertises = {
  label: 'Nos Expertises',
  name: 'expertises_page',
  file: 'src/data/pages/expertises.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'cards',
      label: 'Cards',
      collapsed: true,
      widget: 'list',
      summary: 'Card - {{fields.title}}',
      fields: pageCardFields,
    },
  ],
};

export default expertises;
