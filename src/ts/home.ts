import { type CardType } from './card';

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

export interface IHome {
  bannerData: HomeBannerDataType;
  introData: HomeIntroDataType;
  offersData: HomeOffersDataType;
  agencyData: HomeAgencyDataType;
  newsletterData: HomeNewsletterDataType;
}
