import { readFile } from '@/services/utils';

import { AccessibilityData } from '@/ts/accessibility.page';

export const getAccessibilityData = (): AccessibilityData | null => {
  const matterResult = readFile<AccessibilityData>(
    'src/data/pages/accessibility.md'
  );

  if (matterResult && matterResult.data) {
    return matterResult.data;
  }

  return null;
};
