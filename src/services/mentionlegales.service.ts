import { readFile } from '@/services/utils';

import { MentionsLegalesData } from '@/ts/mentionsLegales.page';

export const getMentionslegalesData = (): MentionsLegalesData | null => {
  const matterResult = readFile<MentionsLegalesData>(
    'src/data/pages/mentions_legales.md'
  );

  if (matterResult && matterResult.data) {
    return matterResult.data;
  }

  return null;
};
