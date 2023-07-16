import { DateTime } from 'luxon';

export const formatPublicationDate = (date: string): string => {
  const dateObj = new Date(date);
  const formatedDate = DateTime.fromJSDate(dateObj)
    .setLocale('fr')
    .toLocaleString(DateTime.DATE_FULL);
  return `Publié le ${formatedDate}`;
};
