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

export type FooterMenuText1Type = {
  title: string;
  rows: FooterMenuTextRowType[];
};

export type FooterMenuText2Type = {
  title: string;
  email: string;
};

export type FooterMenuTextType = FooterMenuText1Type | FooterMenuText2Type;

export type FooterMenuSocialType = {
  title: string;
  rows: FooterMenuRowSocialType[];
};

export interface IFooter {
  menuText1: FooterMenuText1Type;
  menuText2: FooterMenuText2Type;
  menuSocial: FooterMenuSocialType;
}

export function isFooterMenuText1Response(
  response: FooterMenuTextType
): response is FooterMenuText1Type {
  return 'rows' in response;
}
