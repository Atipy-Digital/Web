export interface Column {
  reverseMobile: boolean;
  text?: {
    content: string;
  };
}

export interface Section {
  inverseCol: boolean;
  col1: Column;
  col2: Column;
  col3: Column;
}

export interface MentionsLegalesData {
  sections: Section[];
}
