export type CardExpertisePageType = {
  type: 'ingenierie' | 'design' | 'digital' | 'formation';
  title: string;
  text: string;
};

export type ExpertisePageDataType = {
  cards: CardExpertisePageType[];
};
