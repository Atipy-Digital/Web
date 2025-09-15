const header = {
  label: 'Header',
  name: 'header',
  file: 'src/data/layout/header.md',
  fields: [
    {
      label: 'Navigation',
      hint: "Vous pouvez changer l'ordre des différents element",
      name: 'mainNavigation',
      widget: 'list',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'select',
          options: [
            '/agence',
            '/expertises',
            '/realisations',
            '/publications',
            '/contact',
          ],
        },
      ],
    },
  ],
};

export default header;
