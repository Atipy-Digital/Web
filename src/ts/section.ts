export type ColSectionType = {
  reverseMobile: boolean;
  image?: {
    url: string;
    legend?: string;
    className?: string;
  };
  text?: {
    color?: 'blue' | 'red' | 'green' | 'yellow';
    content: string;
  };
};

export type SectionType = {
  col1: ColSectionType;
  col2?: ColSectionType;
  col3?: ColSectionType;
};
