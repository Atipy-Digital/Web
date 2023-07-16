import { readFile } from './utils';

import { INavigation } from '@/ts/navigation';

export const getNavigations = (): INavigation[] => {
  const matterResult = readFile<{ mainNavigation: INavigation[] }>(
    'src/data/layout/header.md'
  );

  if (!matterResult?.data) return [];

  return matterResult.data.mainNavigation;
};
