import { getProjectBySlug } from './project.service';
import { readFile } from './utils';

import type { IHome, InputIHome, ProjectType } from '@/ts';

export const getHomeData = (): IHome | null => {
  const matterResult = readFile<InputIHome>('src/data/pages/home.md');

  if (!matterResult?.data) return null;

  const home_projects = matterResult.data.projectData.home_projects ?? [];
  const homeProjects = home_projects.map(
    (p) => getProjectBySlug(p) as ProjectType
  );

  return {
    bannerData: matterResult.data.bannerData,
    introData: matterResult.data.introData,
    offersData: matterResult.data.offersData,
    agencyData: matterResult.data.agencyData,
    projectData: {
      title: matterResult.data.projectData.title,
      body: matterResult.data.projectData.body,
      buttonCta: matterResult.data.projectData.buttonCta,
      home_projects: homeProjects,
    },
    newsletterData: matterResult.data.newsletterData,
    contactData: matterResult.data.contactData,
  };
};
