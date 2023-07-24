const metadata = {
  label: 'Metadonnées',
  name: 'metadata',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      label: 'Titre',
      name: 'title',
      widget: 'string',
      pattern: ['^.{1,70}$', 'Doit comporter au maximum 70 caractères'],
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'string',
      pattern: ['^.{1,160}$', 'Doit comporter au maximum 160 caractères'],
    },
    {
      label: 'Image pour réseaux social',
      name: 'ogImg',
      widget: 'image',
      required: false,
      hint: "Optimiser l'image au format **.webp** et renomer le fichier de type **{nom projet}-{og}.webp** le format doit être de **1200x630**",
      choose_url: false,
      allow_multiple: false,
    },
    {
      label: 'Mots clés',
      name: 'keywords',
      widget: 'list',
      required: false,
      fields: [{ label: 'Mot clé', name: 'keyword', widget: 'string' }],
    },
  ],
};

export default metadata;
