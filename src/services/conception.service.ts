import { readFile } from './utils';

import type { ConceptionDataType } from '@/ts';

export const getConceptionData = (): ConceptionDataType | null => {
  const matterResult = readFile<ConceptionDataType>(
    'src/data/pages/conception.md'
  );

  if (!matterResult?.data) return null;

  return {
    intro: matterResult.data.intro,
    sections: matterResult.data.sections,
  };
};
