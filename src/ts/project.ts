import { ClientType } from './client';
import { SectionType } from './section';
import { TagType } from './tag';

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
