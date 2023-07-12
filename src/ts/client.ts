import { TagBusinessType } from './tag';

export interface ClientType {
  slug: string;
  name: string;
  logo?: string;
  tags: TagBusinessType[];
}
