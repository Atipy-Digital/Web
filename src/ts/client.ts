import { SectionType } from './section';
import { TagBusinessType } from './tag';

export interface InputClientType {
  slug: string;
  name: string;
  logo?: string;
  client_tags: string[];
}
export interface ClientType {
  slug: string;
  name: string;
  logo?: string;
  tags: TagBusinessType[];
}

export type ClientPageDataType = {
  intro: string;
  sections: SectionType[];
};
