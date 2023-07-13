import fs from 'fs';
import matter from 'gray-matter';

import type { InputMetadataType, MetadataType } from '@/ts';

interface GrayMatterFile<I extends matter.Input = matter.Input, T = object> {
  data: T;
  content: string;
  excrept?: string;
  orig: Buffer | I;
  language: string;
  matter: string;
  stringify(lang: string): string;
}

export const readFile = <T>(path: string) => {
  const content = fs.readFileSync(path, {
    encoding: 'utf-8',
  });
  const matterResult = matter(content) as GrayMatterFile<string, T>;

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
  const matterResult = readFile<{ metadata: InputMetadataType }>(path);
  return {
    title: matterResult.data.metadata.title,
    description: matterResult.data.metadata.description,
    keywords: matterResult.data.metadata.keywords?.map(
      ({ keyword }: { keyword: string }) => keyword
    ),
    ogImg: matterResult.data.metadata.ogImg,
  };
};
