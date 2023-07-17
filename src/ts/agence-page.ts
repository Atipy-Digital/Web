export type CardPageType = {
  type: 'about' | 'conception' | 'tribu' | 'partners';
  title: string;
  text: string;
};

export type AgencePageDataType = {
  cards: CardPageType[];
};
