export type PartnerType = {
  name: string;
  logo: string;
  isSingle: boolean;
  aboutUs: string;
  collaborate: string;
  projects: string;
  decorativeOrInformative: boolean;
};

export type PartnerDataType = {
  intro: string;
  partners: PartnerType[];
};
