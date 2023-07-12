import { readFile } from './utils';

import { INavigation } from '@/ts/navigation';

export const getNavigations = (): INavigation[] => {
  const matterResult = readFile('src/data/layout/header.md');

  return matterResult.data.mainNavigation;
};
