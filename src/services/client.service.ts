import { getTagsBusinessByLabels } from './tag.service';
import { getSlugs, readFile } from './utils';

import type { ClientType, InputClientType } from '@/ts';

const PATH_FOLDER = 'src/data/clients';

export const getClientsSlug = () => {
  return getSlugs(PATH_FOLDER);
};

export const getClients = (): ClientType[] => {
  const slugs = getClientsSlug();
  return slugs.map((slug) => {
    const matterResult = readFile<InputClientType>(`${PATH_FOLDER}/${slug}.md`);
    const tags = getTagsBusinessByLabels(matterResult.data.client_tags);

    return {
      slug,
      name: matterResult.data.name,
      logo: matterResult.data.logo,
      tags,
    };
  });
};

export const getClient = (slug: string): ClientType => {
  const matterResult = readFile<InputClientType>(`${PATH_FOLDER}/${slug}.md`);
  const tags = getTagsBusinessByLabels(matterResult.data.client_tags);
  return {
    slug,
    name: matterResult.data.name,
    logo: matterResult.data.logo,
    tags,
  };
};
