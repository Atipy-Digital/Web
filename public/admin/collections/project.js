import metadata from './common/metadata.js';
import sectionFields from './common/section.js';

const project = {
  name: 'projects',
  label: 'Réalisations',
  folder: 'src/data/projects',
  create: true,
  slug: '{{slug}}',
  editor: {
    preview: false,
  },
  fields: [
    metadata,
    {
      label: 'Titre du projet',
      name: 'title',
      hint: '**Identifiant unique**',
      widget: 'string',
    },
    {
      label: 'Image principale',
      name: 'image',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'url',
          widget: 'image',
          allow_multiple: false,
          choose_url: false,
        },
        {
          label: 'Texte alternatif',
          name: 'alt',
          widget: 'string',
          required: false,
        },
        {
          name: 'decorativeOrInformative',
          label:
            'Est décorative ou informative (valeur par défaut : décoratif)',
          widget: 'boolean',
          default: false,
          required: false,
        },
      ],
    },
    {
      label: 'Client',
      name: 'project_client',
      widget: 'relation',
      collection: 'clients',
      search_fields: ['name', 'client_tags.label'],
      display_fields: ['name'],
      value_field: '{{slug}}',
    },
    {
      label: 'Mission Section',
      name: 'mission_body',
      widget: 'markdown',
      buttons: ['bold', 'italic', 'code', 'link'],
      modes: ['rich_text'],
      editor_components: [],
    },
    {
      label: 'Context Section',
      name: 'context_body',
      widget: 'markdown',
      buttons: ['bold', 'italic', 'code', 'link'],
      modes: ['rich_text'],
      editor_components: [],
    },
    {
      label: 'Badges Afficher sur la card',
      name: 'project_tags',
      widget: 'relation',
      collection: 'tags',
      file: 'expertise_tags',
      search_fields: ['tag.*.type', 'tag.*.label', 'tag.*.color'],
      display_fields: ['tag.*.label'],
      value_field: 'tag.*.label',
      multiple: true,
    },
    {
      label: 'Sections',
      name: 'project_sections',
      widget: 'list',
      collapsed: true,
      summary: 'Section',
      fields: sectionFields,
    },
    {
      label: 'Projects similaires',
      name: 'projectsFeatured',
      widget: 'relation',
      collection: 'projects',
      search_fields: ['title', 'project_client.label'],
      display_fields: ['title'],
      value_field: '{{slug}}',
      multiple: true,
    },
    {
      label: 'Bas de page',
      name: 'footer',
      widget: 'object',
      fields: [
        {
          name: 'btn',
          label: 'Bouton',
          widget: 'object',
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
      ],
    },
  ],
};

export default project;
