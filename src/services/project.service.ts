import { getClient } from './client.service';
import { getTagsExpertiseByLabels } from './tag.service';
import { getMetadata, getSlugs, readFile } from './utils';

import type {
  InputProjectsPageType,
  InputProjectType,
  MetadataType,
  ProjectsPageType,
  ProjectType,
} from '@/ts';

const PATH_FOLDER = 'src/data/projects';

export const getProjectsSlug = () => {
  return getSlugs(PATH_FOLDER);
};

export const getProjectMetaData = (slug: string): MetadataType => {
  return getMetadata(`${PATH_FOLDER}/${slug}.md`);
};

export const getProjects = (): ProjectType[] => {
  const slugs = getProjectsSlug();
  return slugs.map((slug) => {
    const matterResult = readFile<InputProjectType>(
      `${PATH_FOLDER}/${slug}.md`
    );

    const client = getClient(matterResult.data.project_client);
    const tags = getTagsExpertiseByLabels(matterResult.data.project_tags);

    return {
      slug,
      title: matterResult.data.title,
      image: matterResult.data.image,
      client,
      tags,
      mission_body: matterResult.data.mission_body,
      context_body: matterResult.data.context_body,
      project_sections: matterResult.data.project_sections,
    };
  });
};

export const getProjectBySlug = (slug: string): ProjectType => {
  const matterResult = readFile<InputProjectType>(`${PATH_FOLDER}/${slug}.md`);
  const client = getClient(matterResult.data.project_client);
  const tags = getTagsExpertiseByLabels(matterResult.data.project_tags);
  return {
    slug,
    title: matterResult.data.title,
    image: matterResult.data.image,
    client,
    tags,
    mission_body: matterResult.data.mission_body,
    context_body: matterResult.data.context_body,
    project_sections: matterResult.data.project_sections,
  };
};

//#region  //*=========== Projects Page ===========
export const getProjectsMetadata = () => {
  return getMetadata('src/data/pages/projects.md');
};

export const getProjectsPageData = (): ProjectsPageType => {
  const matterResult = readFile<InputProjectsPageType>(
    'src/data/pages/projects.md'
  );

  const projectsSlugs = matterResult.data?.projectsFeatured || [];

  const projectsFeatured = projectsSlugs?.map((slug) => getProjectBySlug(slug));

  return {
    title: matterResult.data.title,
    intro: matterResult.data.intro,
    projectsFeatured,
  };
};
//#endregion  //*======== Projects Page ===========
