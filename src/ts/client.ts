import { SectionType } from './section';
import { TagBusinessType } from './tag';

export interface InputClientType {
  slug: string;
  name: string;
  logo?: string;
  decorativeOrInformative?: boolean;
  client_tags: string[];
}
export interface ClientType {
  slug: string;
  name: string;
  logo?: string;
  decorativeOrInformative?: boolean;
  tags: TagBusinessType[];
}

export type ClientPageDataType = {
  intro: string;
  sections: SectionType[];
};
