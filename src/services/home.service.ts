import { getProjectBySlug } from './project.service';
import { readFile } from './utils';

import type { IHome, InputIHome } from '@/ts';

export const getHomeData = (): IHome => {
  const matterResult = readFile<InputIHome>('src/data/pages/home.md');
  const { title, body, home_projects, buttonCta } =
    matterResult.data.projectData;
  const homeProjects = home_projects?.map((p) => getProjectBySlug(p));

  return {
    bannerData: matterResult.data.bannerData,
    introData: matterResult.data.introData,
    offersData: matterResult.data.offersData,
    agencyData: matterResult.data.agencyData,
    projectData: {
      title,
      body,
      buttonCta,
      home_projects: homeProjects,
    },
    newsletterData: matterResult.data.newsletterData,
    contactData: matterResult.data.contactData,
  };
};
