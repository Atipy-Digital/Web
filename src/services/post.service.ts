import { getTagsExpertiseByLabels } from './tag.service';
import { getSlugs, readFile } from './utils';

import type { InputPostType, MetadataType, PostType } from '@/ts';

const PATH_FOLDER = 'src/data/posts';

export const getPostsSlug = () => {
  return getSlugs(PATH_FOLDER);
};

export const getPostMetaData = (slug: string): MetadataType | null => {
  const matterResult = readFile<InputPostType>(`${PATH_FOLDER}/${slug}.md`);
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};

export const getPosts = (): PostType[] => {
  const slugs = getPostsSlug();
  if (!slugs) return [];
  const posts: PostType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<InputPostType>(`${PATH_FOLDER}/${slug}.md`);

    if (matterResult?.data) {
      const tags = getTagsExpertiseByLabels(matterResult.data.post_tags);
      posts.push({
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        sections: matterResult.data.post_sections,
        source: matterResult.data.source,
        timeToRead: matterResult.data.timeToRead,
        tags,
      });
    }
  }

  if (!posts.length) return [];

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = (slug: string): PostType | null => {
  const matterResult = readFile<InputPostType>(`${PATH_FOLDER}/${slug}.md`);

  if (!matterResult?.data) return null;

  const tags = getTagsExpertiseByLabels(matterResult.data.post_tags);
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    sections: matterResult.data.post_sections,
    timeToRead: matterResult.data.timeToRead,
    tags,
    source: matterResult.data.source,
  };
};

export const getLastPosts = (num: number) => {
  const posts = getPosts();
  return posts.slice(0, num);
};

export const getNextPostLink = (slug: string) => {
  const posts = getPosts();
  if (!posts.length) return undefined;

  const currentSubIndex = posts.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex === -1) return undefined;
  if (currentSubIndex + 1 > posts.length) return undefined;
  const subPage = posts[currentSubIndex + 1];
  if (posts.length === 1) return undefined;
  if (!subPage) {
    const first = posts[0];
    return {
      label: first.title,
      url: `/posts/${first.slug}`,
    };
  }

  return {
    label: subPage.title,
    url: `/posts/${subPage.slug}`,
  };
};
