import { ProjectType } from './project';

export type InputProjectsPageType = {
  title: string;
  intro: string;
  projectsFeatured: string[];
};
export type ProjectsPageType = {
  title: string;
  intro: string;
  projectsFeatured: ProjectType[];
};
