import { MetadataType } from './metadata';
import { SectionType } from './section';
import { TagExpertiseType } from './tag';

export type InputPostType = {
  metadata: MetadataType;
  date: string;
  title: string;
  timeToRead: string;
  tags: string[];
  text: string;
  source: SectionType;
};

export type PostType = {
  slug: string;
  date: string;
  title: string;
  timeToRead: string;
  tags: TagExpertiseType[];
  text: string;
  source: SectionType;
};
