import { readFile } from './utils';

import type { EngagementType } from '@/ts';

export const getEngagementData = (): EngagementType | null => {
  const matterResult = readFile<EngagementType>(
    'src/data/modals/engagement.md'
  );

  return matterResult.data;
};
