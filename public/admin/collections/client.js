const client = {
  name: 'clients',
  label: 'Clients',
  folder: 'src/data/clients',
  create: true,
  identifier_field: 'name',
  slug: '{{slug}}',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Nom',
      name: 'name',
      widget: 'string',
      hint: '**Identifiant unique**',
    },
    {
      label: 'Logo',
      name: 'logo',
      widget: 'image',
      required: false,
      hint: '**Penser au dark mode,** format en **.webp** et renomer le fichier de type **{client}-{logo}.webp**',
      choose_url: false,
      allow_multiple: false,
    },
    {
      name: 'decorativeOrInformative',
      label: 'Est décorative ou informative (valeur par défaut : décoratif)',
      widget: 'boolean',
      default: false,
      required: false,
    },
    {
      label: 'Tag',
      name: 'client_tags',
      widget: 'relation',
      collection: 'tags',
      file: 'business_tags',
      search_fields: ['tag.*.type', 'tag.*.label', 'tag.*.color'],
      display_fields: ['tag.*.label'],
      value_field: 'tag.*.label',
      multiple: true,
    },
  ],
};

export default client;
