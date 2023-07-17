import { readFile } from './utils';

import type { AboutType } from '@/ts';

export const getAboutData = (): AboutType | null => {
  const matterResult = readFile<AboutType>('src/data/pages/about.md');

  if (!matterResult?.data) return null;

  return {
    naissance: matterResult.data.naissance,
    fusion: matterResult.data.fusion,
    fusion2: matterResult.data.fusion2,
    challenges: matterResult.data.challenges,
    cards: matterResult.data.cards,
  };
};
