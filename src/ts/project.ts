import { ClientType } from './client';
import { SectionType } from './section';
import { TagType } from './tag';

export type InputProjectType = {
  slug: string;
  title: string;
  image: string;
  project_client: string;
  project_tags: string[];
  mission_body: string;
  context_body: string;
  project_sections: SectionType[];
};
export type ProjectType = {
  slug: string;
  title: string;
  image: string;
  client: ClientType;
  tags: TagType[];
  mission_body: string;
  context_body: string;
  project_sections: SectionType[];
};
