import sectionFields from '../display-sitemap/section.js';

const sitemap = {
  label: 'Sitemap',
  name: 'sitemap_page',
  file: 'src/data/pages/sitemap.md',
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

export default sitemap;
