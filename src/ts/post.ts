import { DateTime } from 'luxon';

export type Post = {
  title: string;
  slug: string;
  body: string;
  date: DateTime;
};
