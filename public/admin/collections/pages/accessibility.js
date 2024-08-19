import sectionFields from '../common/section.js';

const accessibility = {
  label: 'Accessibilité',
  name: 'accessibility_page',
  file: 'src/data/pages/accessibility.md',
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

export default accessibility;
