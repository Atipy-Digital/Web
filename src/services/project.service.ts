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
        projectsFeatured: [],
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

  const projectsSlugs = matterResult.data?.projectsFeatured || [];
  const projectsFeatured: ProjectType[] = [];

  for (const project_slug of projectsSlugs) {
    const result = readFile<InputProjectType>(
      `${PATH_FOLDER}/${project_slug}.md`
    );

    if (result.data) {
      const project_client = getClient(result.data.project_client);
      const project_tags = getTagsExpertiseByLabels(result.data.project_tags);
      projectsFeatured.push({
        slug: project_slug,
        title: result.data.title,
        image: result.data.image,
        client: project_client,
        tags: project_tags,
        mission_body: result.data.mission_body,
        context_body: result.data.context_body,
        project_sections: result.data.project_sections,
        projectsFeatured: [],
      });
    }
  }

  return {
    slug,
    title: matterResult.data.title,
    image: matterResult.data.image,
    client,
    tags,
    mission_body: matterResult.data.mission_body,
    context_body: matterResult.data.context_body,
    project_sections: matterResult.data.project_sections,
    projectsFeatured,
    footer: matterResult.data?.footer,
  };
};
export const getProjectNextLink = (slug: string) => {
  const projects = getProjects();
  if (!projects.length) return undefined;

  const currentSubIndex = projects.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex === -1) return undefined;
  if (currentSubIndex + 1 > projects.length) return undefined;
  const subPage = projects[currentSubIndex + 1];
  if (projects.length === 1) return undefined;
  if (!subPage) {
    const first = projects[0];
    return {
      label: first.title,
      url: `/realisations/${first.slug}`,
    };
  }

  return {
    label: subPage.title,
    url: `/realisations/${subPage.slug}`,
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
