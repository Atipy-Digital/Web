import { readFile } from './utils';

import type { PartnerDataType } from '@/ts';

export const getPartnerPageData = (): PartnerDataType | null => {
  const matterResult = readFile<PartnerDataType>('src/data/pages/partners.md');

  if (!matterResult?.data) return null;

  return {
    intro: matterResult.data.intro,
    partners: matterResult.data.partners,
  };
};
