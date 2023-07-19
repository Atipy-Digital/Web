import { MetadataType } from './metadata';
import { SectionType } from './section';

export type CardExpertisePageType = {
  type: 'ingenierie' | 'design' | 'digital' | 'formation';
  title: string;
  text: string;
};

export type ExpertisePageDataType = {
  cards: CardExpertisePageType[];
};

export type ExpertiseSubPageType = {
  metadata: MetadataType;
  slug: string;
  title: string;
  icon: string;
  intro: string;
  sections: SectionType[];
  btn: {
    label: string;
    color: 'blue' | 'green' | 'red' | 'yellow';
    tag: string;
  };
  titleContact: string;
};
