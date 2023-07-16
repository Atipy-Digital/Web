import { MetadataType } from './metadata';
import { SectionType } from './section';
import { TagExpertiseType } from './tag';

export type PostSourceLinkType = {
  label?: string;
  url?: string;
};

export type PostSourceType = {
  col1: PostSourceLinkType[];
  col2?: PostSourceLinkType[];
  col3?: PostSourceLinkType[];
};

export type InputPostType = {
  metadata: MetadataType;
  date: string;
  title: string;
  timeToRead: string;
  post_tags: string[];
  post_sections: SectionType[];
  source: PostSourceType;
};

export type PostType = {
  slug: string;
  date: string;
  title: string;
  timeToRead: string;
  tags: TagExpertiseType[];
  sections: SectionType[];
  source: PostSourceType;
};
