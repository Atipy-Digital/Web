import { readFile } from './utils';

import type { ContactPageType } from '@/ts';

export const getContactData = (): ContactPageType => {
  const matterResult = readFile<ContactPageType>('src/data/pages/contact.md');

  return matterResult.data;
};
