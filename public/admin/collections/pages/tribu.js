const tribu = {
  label: 'La Tribu',
  name: 'tribu',
  file: 'src/data/pages/tribu.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      name: 'team',
      label: "Section - L'équipe",
      widget: 'object',
      fields: [
        {
          name: 'text',
          label: 'Texte',
          widget: 'markdown',
          buttons: ['bold', 'italic', 'heading-three'],
          modes: ['rich_text'],
          editor_components: [],
        },
        {
          name: 'image',
          label: "Image de L'équipe",
          widget: 'image',
          hint: '**Penser au dark mode,** format en **.webp** et renomer le fichier de type **{membre}.webp**',
          choose_url: false,
          allow_multiple: false,
        },
      ],
    },
    {
      name: 'particularity',
      label: 'Section - Particularité',
      widget: 'markdown',
      buttons: ['bold', 'italic', 'heading-four'],
      modes: ['rich_text'],
      editor_components: [],
    },
    {
      name: 'philosophy',
      label: 'Section - Philosophie',
      widget: 'markdown',
      buttons: ['bold', 'italic', 'heading-four'],
      modes: ['rich_text'],
      editor_components: [],
    },
    {
      name: 'members',
      label: 'Membres',
      hint: "Vous pouvez changer l'ordre des différentes cards",
      collapsed: true,
      widget: 'list',
      summary: '{{fields.name}}',
      fields: [
        {
          name: 'name',
          label: 'Prénom Nom',
          widget: 'string',
        },
        {
          name: 'image',
          label: 'Image Profil',
          widget: 'image',
          hint: '**Penser au dark mode,** format en **.webp** et renomer le fichier de type **{membre}.webp**',
          choose_url: false,
          allow_multiple: false,
        },
        {
          label: 'Badge',
          widget: 'object',
          name: 'badge',
          fields: [
            {
              name: 'color',
              label: 'Couleur',
              widget: 'select',
              options: [
                { value: 'a-blue', label: 'Bleu' },
                { value: 'a-red', label: 'Rouge' },
                { value: 'a-green', label: 'Vert' },
                { value: 'a-yellow', label: 'Jaune' },
              ],
            },
            {
              name: 'label',
              label: 'Text',
              widget: 'string',
            },
          ],
        },
        {
          name: 'linkedin',
          label: 'Lien Linkedin',
          widget: 'string',
        },
        {
          name: 'skills',
          label: 'Compétences',
          widget: 'list',
          collapsed: true,
          summary: '{{fields.text}}',
          fields: [
            {
              name: 'text',
              label: 'Texte',
              widget: 'string',
            },
          ],
        },
      ],
    },
  ],
};

export default tribu;
