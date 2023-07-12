import fs from 'fs';
import matter from 'gray-matter';

import type { MetadataType } from '@/ts';

export const readFile = (path: string) => {
  const content = fs.readFileSync(path, {
    encoding: 'utf-8',
  });
  const matterResult = matter(content);

  return matterResult;
};

export const readFolder = (pathFolder: string) => {
  const files = fs.readdirSync(pathFolder);
  const markDownFiles = files.filter((file) => file.endsWith('.md'));
  return markDownFiles;
};

export const getSlugs = (pathFolder: string) => {
  const markDownFiles = readFolder(pathFolder);
  const slugs = markDownFiles
    .map((file) => file.replace('.md', ''))
    .filter((val) => val);

  return slugs;
};

export const getMetadata = (path: string): MetadataType => {
  const matterResult = readFile(path);
  return {
    title: matterResult.data.metadata.title,
    description: matterResult.data.metadata.description,
    keywords: matterResult.data.metadata.keywords.map(
      ({ keyword }: { keyword: string }) => keyword
    ),
    ogImg: matterResult.data.metadata.ogImg,
  };
};
