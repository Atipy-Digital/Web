import fs from 'fs';
import matter from 'gray-matter';

import { INavigation } from '@/ts/navigation';

export const getNavigations = (): INavigation[] => {
  const content = fs.readFileSync('src/data/layout/header.md', {
    encoding: 'utf-8',
  });
  const matterResult = matter(content);

  return matterResult.data.mainNavigation;
};
