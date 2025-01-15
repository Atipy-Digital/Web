export type ContactInputType = {
  label: string;
  placeholder: string;
};

export type ContactFormType = {
  input_name: ContactInputType;
  input_email: ContactInputType;
  input_message: ContactInputType;
  error_required: string;
  button_text: string;
};

export type ContactLinkType = {
  type: 'instagram' | 'linkedin' | 'twitter';
  url: string;
  decorativeOrInformative?: boolean;
};

export type ContactSocialsType = {
  title: string;
  links: ContactLinkType[];
};

export type ContactInfosType = {
  email: string;
  address: string;
};

export type ContactPageType = {
  title: string;
  form: ContactFormType;
  socials: ContactSocialsType;
  infos: ContactInfosType;
};
