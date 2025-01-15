import { getTagsBusinessByLabels } from './tag.service';
import { getSlugs, readFile } from './utils';

import type { ClientPageDataType, ClientType, InputClientType } from '@/ts';

const PATH_FOLDER = 'src/data/clients';

export const getClientsSlug = () => {
  return getSlugs(PATH_FOLDER);
};

export const getClients = (): ClientType[] => {
  const slugs = getClientsSlug();
  if (!slugs) return [];

  return slugs.map((slug) => {
    const matterResult = readFile<InputClientType>(`${PATH_FOLDER}/${slug}.md`);
    const tags = getTagsBusinessByLabels(matterResult.data?.client_tags || []);

    return {
      slug,
      name: matterResult.data?.name || '',
      logo: matterResult.data?.logo,
      decorativeOrInformative: matterResult.data?.decorativeOrInformative,
      tags,
    };
  });
};

export const getClient = (slug: string): ClientType => {
  const matterResult = readFile<InputClientType>(`${PATH_FOLDER}/${slug}.md`);
  const tags = getTagsBusinessByLabels(matterResult.data?.client_tags || []);
  return {
    slug,
    name: matterResult.data?.name || '',
    logo: matterResult.data?.logo,
    decorativeOrInformative: matterResult.data?.decorativeOrInformative,
    tags,
  };
};

export const getClientPage = (): ClientPageDataType | null => {
  const matterResult = readFile<ClientPageDataType>(
    'src/data/pages/clients.md'
  );

  if (!matterResult?.data) return null;

  return {
    intro: matterResult.data.intro,
    sections: matterResult.data.sections,
  };
};
