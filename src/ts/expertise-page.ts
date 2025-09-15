import { CARD_TYPE } from './card';
import { MetadataType } from './metadata';
import { SectionType } from './section';

export type CardExpertisePageType = {
  type: 'ingenierie' | 'design' | 'digital' | 'mobilites' | 'formation';
  title: string;
  text: string;
  url: string;
  imagesTheme?: {
    light?: string;
    dark?: string;
  };
  decorativeOrInformative: boolean;
};

export type ExpertisePageDataType = {
  cards: CardExpertisePageType[];
};

export type ExpertiseSubPageType = {
  metadata: MetadataType;
  date: string;
  slug: string;
  title: string;
  color: CARD_TYPE;
  icon: {
    type: 'ingenierie' | 'design' | 'digital' | 'mobilites' | 'formation';
    value: string;
  };
  intro?: string;
  sections: SectionType[];
  footer?: {
    btn?: {
      label?: string;
      color?: 'blue' | 'green' | 'red' | 'yellow';
      tag?: string;
    };
    titleContact?: string;
  };
};
