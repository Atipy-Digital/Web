export type ColSectionType = {
  reverseMobile: boolean;
  image?: {
    url: string;
    legend?: string;
    className?: string;
    altText?: string;
    isAriaHidden?: boolean;
  };
  text?: {
    color?: 'blue' | 'red' | 'green' | 'yellow';
    content: string;
  };
};

export type SectionType = {
  inverseCol?: boolean;
  col1: ColSectionType;
  col2?: ColSectionType;
  col3?: ColSectionType;
};
