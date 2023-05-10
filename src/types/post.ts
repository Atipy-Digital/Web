import { DateTime } from "luxon";

export type Post = {
  title: string;
  slug: string;
  content: string;
  date: DateTime;
};
