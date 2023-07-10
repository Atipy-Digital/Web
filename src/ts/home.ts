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

export interface IHome {
  bannerData: HomeBannerDataType;
  introData: HomeIntroDataType;
  offersData: HomeOffersDataType;
}
