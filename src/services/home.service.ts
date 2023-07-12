import { readFile } from './utils';

import type { IHome } from '@/ts';

export const getHomeData = (): IHome => {
  const matterResult = readFile('src/data/pages/home.md');

  return {
    bannerData: matterResult.data.bannerData,
    introData: matterResult.data.introData,
    offersData: matterResult.data.offersData,
    agencyData: matterResult.data.agencyData,
    newsletterData: matterResult.data.newsletterData,
    contactData: matterResult.data.contactData,
  };
};
