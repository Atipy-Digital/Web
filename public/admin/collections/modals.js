const modals = {
  name: 'modals',
  label: 'Popups',
  files: [
    {
      label: 'Popup Engagement',
      name: 'engagement_modal',
      file: 'src/data/modals/engagement.md',
      create: true,
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
          label: 'Intro',
          name: 'intro',
          widget: 'markdown',
          buttons: ['bold', 'italic'],
          modes: ['rich_text'],
          editor_components: [],
        },
        {
          label: 'Contenue',
          name: 'text',
          widget: 'markdown',
          buttons: ['bold', 'italic'],
          modes: ['rich_text'],
          editor_components: [],
        },
        {
          label: 'Outro',
          name: 'outro',
          widget: 'markdown',
          buttons: ['bold', 'italic'],
          modes: ['rich_text'],
          editor_components: [],
        },
      ],
    },
  ],
};

export default modals;
