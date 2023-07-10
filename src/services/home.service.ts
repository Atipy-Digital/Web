import { readFile } from './read-file';

import type { IHome } from '@/ts';

export const getHomeData = (): IHome => {
  const matterResult = readFile('src/data/pages/home.md');

  return {
    bannerData: matterResult.data.bannerData,
    introData: matterResult.data.introData,
    offersData: matterResult.data.offersData,
  };
};
