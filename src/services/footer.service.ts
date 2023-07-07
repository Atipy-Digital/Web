import { readFile } from './read-file';

import { IFooter } from '@/ts';

export const getFooterData = (): IFooter => {
  const matterResult = readFile('src/data/layout/footer.md');

  return {
    menuText1: matterResult.data.menuText1,
    menuText2: matterResult.data.menuText2,
    menuSocial: matterResult.data.menuSocial,
  };
};
