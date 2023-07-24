import metadata from './common/metadata.js';
import sectionFields from './common/section.js';

const posts = {
  name: 'posts',
  label: 'Post',
  folder: 'src/data/posts',
  create: true,
  editor: {
    preview: false,
  },
  slug: '{{slug}}',
  fields: [
    metadata,
    {
      label: 'Titre',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Date de publication',
      name: 'date',
      widget: 'datetime',
    },
    {
      label: 'Temps de lecture',
      name: 'timeToRead',
      widget: 'string',
    },
    {
      label: 'Tags',
      name: 'post_tags',
      widget: 'relation',
      collection: 'tags',
      file: 'expertise_tags',
      search_fields: ['tag.*.label', 'tag.*.type', 'tag.*.color'],
      value_field: 'tag.*.label',
      multiple: true,
    },
    {
      label: 'Sections',
      name: 'post_sections',
      widget: 'list',
      collapsed: true,
      summary: 'Section',
      fields: sectionFields,
    },
    {
      label: 'Sources',
      name: 'source',
      widget: 'object',
      fields: [
        {
          name: 'col1',
          label: 'Colonne 1',
          widget: 'list',
          summary: 'Lien {{fields.label}}',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'Url',
              name: 'url',
              widget: 'string',
            },
          ],
        },
        {
          name: 'col2',
          label: 'Colonne 2',
          widget: 'list',
          summary: 'Lien {{fields.label}}',
          required: false,
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: false,
            },
            {
              label: 'Url',
              name: 'url',
              widget: 'string',
              required: false,
            },
          ],
        },
        {
          name: 'col3',
          label: 'Colonne 3',
          widget: 'list',
          summary: 'Lien {{fields.label}}',
          required: false,
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
              required: false,
            },
            {
              label: 'Url',
              name: 'url',
              widget: 'string',
              required: false,
            },
          ],
        },
      ],
    },
  ],
};

export default posts;
