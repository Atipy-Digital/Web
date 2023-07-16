import { readFile } from './utils';

import type { IFooter } from '@/ts';

export const getFooterData = (): IFooter | null => {
  const matterResult = readFile<IFooter>('src/data/layout/footer.md');

  if (!matterResult?.data) return null;

  return {
    menuText1: matterResult.data.menuText1,
    menuText2: matterResult.data.menuText2,
    menuSocial: matterResult.data.menuSocial,
  };
};
