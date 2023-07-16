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
  if (!slugs) return [];
  const projects = [];

  for (const slug of slugs) {
    const matterResult = readFile<InputProjectType>(
      `${PATH_FOLDER}/${slug}.md`
    );

    if (matterResult?.data) {
      const client = getClient(matterResult.data?.project_client);
      const tags = getTagsExpertiseByLabels(matterResult.data.project_tags);

      projects.push({
        slug,
        title: matterResult.data.title,
        image: matterResult.data.image,
        client,
        tags,
        mission_body: matterResult.data.mission_body,
        context_body: matterResult.data.context_body,
        project_sections: matterResult.data.project_sections,
      });
    }
  }

  return projects;
};

export const getProjectBySlug = (slug: string): ProjectType | null => {
  const matterResult = readFile<InputProjectType>(`${PATH_FOLDER}/${slug}.md`);

  if (!matterResult.data) return null;

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

export const getProjectsPageData = (): ProjectsPageType | null => {
  const matterResult = readFile<InputProjectsPageType>(
    'src/data/pages/projects.md'
  );

  if (!matterResult?.data) return null;

  const projectsSlugs = matterResult.data?.projectsFeatured || [];

  const projectsFeatured = projectsSlugs?.map(
    (slug) => getProjectBySlug(slug) as ProjectType
  );

  return {
    title: matterResult.data.title,
    intro: matterResult.data.intro,
    projectsFeatured,
  };
};
//#endregion  //*======== Projects Page ===========
