export type HomeBannerDataType = {
  title: string;
};
export type HomeIntroDataType = {
  title: string;
  button: { label: string; url: string };
};

export interface IHome {
  bannerData: HomeBannerDataType;
  introData: HomeIntroDataType;
}
