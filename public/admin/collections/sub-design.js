import metadata from './common/metadata.js';
import sectionFields from './common/section.js';

const sub_design = {
  name: 'sub_design',
  label: 'Expertise - Design',
  folder: 'src/data/design',
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
      label: 'Picto',
      name: 'icon',
      widget: 'icon_select',
      type: 'design',
    },
    {
      label: 'Couleur de la Card',
      name: 'color',
      widget: 'select',
      options: [
        { label: 'Bleu', value: 'ENGINEER' },
        { label: 'Vert', value: 'DESIGN' },
        { label: 'Rouge', value: 'DIGITAL' },
        { label: 'Jaune', value: 'CONSEIL' },
      ],
    },
    {
      name: 'intro',
      label: 'Intro',
      widget: 'markdown',
      required: false,
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
      label: 'Sections',
      name: 'sections',
      widget: 'list',
      collapsed: true,
      summary: 'Section',
      fields: sectionFields,
    },
    {
      label: 'Bas de page',
      name: 'footer',
      widget: 'object',
      required: false,
      fields: [
        {
          name: 'btn',
          label: 'Bouton',
          widget: 'object',
          required: false,
          fields: [
            {
              name: 'label',
              label: 'Texte',
              widget: 'string',
              required: false,
            },
            {
              name: 'color',
              label: 'Couleur',
              widget: 'select',
              required: false,
              options: [
                { label: 'Bleu', value: 'blue' },
                { label: 'Vert', value: 'green' },
                { label: 'Rouge', value: 'red' },
                { label: 'Jaune', value: 'yellow' },
              ],
            },
            {
              name: 'tag',
              label: 'Tag',
              widget: 'relation',
              required: false,
              collection: 'tags',
              file: 'expertise_tags',
              search_fields: ['tag.*.type', 'tag.*.label', 'tag.*.color'],
              display_fields: ['tag.*.label'],
              value_field: 'tag.*.label',
            },
          ],
        },
        {
          name: 'titleContact',
          required: false,
          label: 'Titre Découverte',
          widget: 'string',
        },
      ],
    },
  ],
};

export default sub_design;
