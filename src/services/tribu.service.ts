import { readFile } from './utils';

import type { TribuPageType } from '@/ts';

export const getTribuData = (): TribuPageType | null => {
  const matterResult = readFile<TribuPageType>('src/data/pages/tribu.md');

  if (!matterResult?.data) return null;

  return {
    team: matterResult.data.team,
    particularity: matterResult.data.particularity,
    philosophy: matterResult.data.philosophy,
    members: matterResult.data.members,
  };
};
