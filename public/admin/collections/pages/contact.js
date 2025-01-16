const contact = {
  label: 'Contact',
  name: 'contact_page',
  file: 'src/data/pages/contact.md',
  widget: 'object',
  editor: {
    preview: false,
  },
  fields: [
    {
      label: 'Titre',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Formulaire',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Champ Nom',
          name: 'input_name',
          widget: 'object',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'Placeholder',
              name: 'placeholder',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Champ Email',
          name: 'input_email',
          widget: 'object',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'Placeholder',
              name: 'placeholder',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Champ Message',
          name: 'input_message',
          widget: 'object',
          fields: [
            {
              label: 'Label',
              name: 'label',
              widget: 'string',
            },
            {
              label: 'Placeholder',
              name: 'placeholder',
              widget: 'string',
            },
          ],
        },
        {
          label: "Message d'erreur pour les champs requis",
          name: 'error_required',
          widget: 'string',
        },
        {
          label: "Bouton d'envoie",
          name: 'button_text',
          widget: 'string',
        },
      ],
    },
    {
      label: 'Section - Réseaux sociaux',
      name: 'socials',
      widget: 'object',
      fields: [
        {
          label: 'Titre',
          name: 'title',
          widget: 'markdown',
          buttons: [],
          modes: ['rich_text'],
          editor_components: [],
        },
        {
          label: 'Liens',
          hint: "Vous pouvez changer l'ordre des différents liens",
          name: 'links',
          widget: 'list',
          fields: [
            {
              label: 'Type',
              name: 'type',
              widget: 'select',
              options: ['instagram', 'linkedin', 'twitter'],
            },
            {
              label: 'Url',
              name: 'url',
              widget: 'string',
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
      ],
    },
    {
      label: 'Section - Informations',
      name: 'infos',
      widget: 'object',
      fields: [
        {
          label: 'Email',
          name: 'email',
          widget: 'string',
        },
        {
          label: 'Addresse Siège social',
          name: 'address',
          widget: 'markdown',
          hint: "Utiliser l'italic pour utliser la font Atkinson",
          buttons: ['bold', 'italic'],
          modes: ['rich_text'],
          editor_components: [],
        },
      ],
    },
  ],
};

export default contact;
