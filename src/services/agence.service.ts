import { readFile } from './utils';

import type { AgencePageDataType } from '@/ts';

export const getAgenceData = (): AgencePageDataType | null => {
  const matterResult = readFile<AgencePageDataType>('src/data/pages/agence.md');

  if (!matterResult?.data) return null;

  return {
    cards: matterResult.data.cards,
  };
};
