import fs from 'fs';
import matter from 'gray-matter';

import { Post } from '@/ts';

const PATH_FOLDER = 'src/data/posts';

const getMarkdownPosts = () => {
  const files = fs.readdirSync(PATH_FOLDER);
  const markDownFiles = files.filter((file) => file.endsWith('.md'));
  return markDownFiles;
};

const getMatterResult = (slug: string) => {
  const content = fs.readFileSync(`src/data/posts/${slug}.md`, {
    encoding: 'utf-8',
  });
  const matterResult = matter(content);

  return matterResult;
};

export const getPostsSlug = (): string[] => {
  const markDownFiles = getMarkdownPosts();
  const slugs = markDownFiles
    .map((file) => file.replace('.md', ''))
    .filter((val) => val);

  return slugs;
};

export const getPostMetaData = (slug: string): { title: string } => {
  const matterResult = getMatterResult(slug);
  return {
    title: matterResult.data.title,
  };
};

export const getPosts = (): Post[] => {
  const slugs = getPostsSlug();
  const posts = slugs.map((slug) => {
    const matterResult = getMatterResult(slug);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      body: matterResult.data?.content || '',
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
