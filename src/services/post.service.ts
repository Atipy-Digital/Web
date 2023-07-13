import { getSlugs, readFile } from './utils';

import type { Post } from '@/ts';

const PATH_FOLDER = 'src/data/posts';

export const getPostsSlug = () => {
  return getSlugs(PATH_FOLDER);
};

export const getPostMetaData = (slug: string): { title: string } => {
  const matterResult = readFile<Post>(`src/data/posts/${slug}.md`);
  return {
    title: matterResult.data.title,
  };
};

export const getPosts = (): Post[] => {
  const slugs = getPostsSlug();
  const posts = slugs.map((slug) => {
    const matterResult = readFile<Post>(`src/data/posts/${slug}.md`);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      body: matterResult.data?.body,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
