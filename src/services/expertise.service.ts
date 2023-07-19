import { readFile } from './utils';

import type { ExpertisePageDataType } from '@/ts';

export const getExpertisePageData = (): ExpertisePageDataType | null => {
  const matterResult = readFile<ExpertisePageDataType>(
    'src/data/pages/expertises.md'
  );

  if (!matterResult?.data) return null;

  return {
    cards: matterResult.data.cards,
  };
};
