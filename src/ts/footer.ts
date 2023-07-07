export type FooterMenuRowTextType = {
  label: string;
  url: string;
};
export type FooterMenuRowSocialType = {
  type: 'instagram' | 'linkedin' | 'twitter';
  url: string;
};

export type FooterMenuTextRowType = {
  link1: FooterMenuRowTextType;
  link2: FooterMenuRowTextType;
};

export type FooterMenuTextType = {
  title: string;
  rows: FooterMenuTextRowType[];
};

export type FooterMenuSocialType = {
  title: string;
  rows: FooterMenuRowSocialType[];
};

export interface IFooter {
  menuText1: FooterMenuTextType;
  menuText2: FooterMenuTextType;
  menuSocial: FooterMenuSocialType;
}
