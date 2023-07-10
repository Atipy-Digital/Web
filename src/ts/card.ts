export enum CARD_TYPE {
  ACCESIBILITY = 'ACCESIBILITY',
  DESIGN = 'DESIGN',
  DIGITAL = 'DIGITAL',
  CONSEIL = 'CONSEIL',
}
export type CardType = {
  title: string;
  type: CARD_TYPE;
  body: string;
  button: { label: string };
};
