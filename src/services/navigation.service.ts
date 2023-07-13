import { readFile } from './utils';

import { INavigation } from '@/ts/navigation';

export const getNavigations = (): INavigation[] => {
  const matterResult = readFile<{ mainNavigation: INavigation[] }>(
    'src/data/layout/header.md'
  );

  return matterResult.data.mainNavigation;
};
