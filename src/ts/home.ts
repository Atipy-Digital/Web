import { type CardType } from './card';
import { ProjectType } from './project';

export type HomeBannerDataType = {
  title: string;
};
export type HomeIntroDataType = {
  title: string;
  button: { label: string; url: string };
};

export type HomeOffersDataType = {
  cards: CardType[];
};

export type HomeAgencyDataType = {
  title: string;
  body: string;
  buttonEngagement: { label: string };
  buttonCta: { label: string };
};

export type HomeNewsletterDataType = {
  title: string;
  subtitle: string;
  placeholder: string;
  button: { label: string };
};

export type HomeContactDataType = {
  title: string;
  email: string;
};

export type InputHomeProjectDataType = {
  title: string;
  body: string;
  home_projects: string[];
  buttonCta: { label: string };
};

export type HomeProjectDataType = {
  title: string;
  body: string;
  home_projects: ProjectType[];
  buttonCta: { label: string };
};

export interface InputIHome {
  bannerData: HomeBannerDataType;
  introData: HomeIntroDataType;
  offersData: HomeOffersDataType;
  agencyData: HomeAgencyDataType;
  projectData: InputHomeProjectDataType;
  newsletterData: HomeNewsletterDataType;
  contactData: HomeContactDataType;
}

export interface IHome {
  bannerData: HomeBannerDataType;
  introData: HomeIntroDataType;
  offersData: HomeOffersDataType;
  agencyData: HomeAgencyDataType;
  projectData: HomeProjectDataType;
  newsletterData: HomeNewsletterDataType;
  contactData: HomeContactDataType;
}
