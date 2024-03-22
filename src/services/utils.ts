import fs from 'fs';
import matter from 'gray-matter';

import type { InputMetadataType, MetadataType } from '@/ts';

export interface GrayMatterFile<
  I extends matter.Input = matter.Input,
  T = object
> {
  data: T;
  content: string;
  excrept?: string;
  orig: Buffer | I;
  language: string;
  matter: string;
  stringify(lang: string): string;
}

export const readFile = <T>(path: string) => {
  try {
    const content = fs.readFileSync(path, {
      encoding: 'utf-8',
    });
    const matterResult = matter(content) as GrayMatterFile<string, T>;

    return matterResult;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err?.code === 'ENOENT') {
      console.warn('File not found!');
      return { data: null };
    } else {
      throw err;
    }
  }
};

export const readFolder = (pathFolder: string) => {
  try {
    const files = fs.readdirSync(pathFolder);
    const markDownFiles = files.filter((file) => file.endsWith('.md'));
    return markDownFiles;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err?.code === 'ENOENT') {
      console.warn('File not found!');
      return [];
    } else {
      throw err;
    }
  }
};

export const getSlugs = (pathFolder: string) => {
  const markDownFiles = readFolder(pathFolder);

  if (!markDownFiles.length) return null;

  const slugs = markDownFiles
    .map((file) => file.replace('.md', ''))
    .filter((val) => val);

  return slugs;
};

export const getExpertiseFeaturedSlugs = (file: string): string[] => {
  const matterResult = readFile<{
    display_expertises: {
      expertise: string;
    }[];
  }>(`src/data/display_expertises/${file}.md`);

  const data = matterResult.data?.display_expertises ?? [];

  if (!data.length) {
    return [];
  }

  return data.map(({ expertise }) => expertise);
};

export const getMetadata = (path: string): MetadataType => {
  const matterResult = readFile<{ metadata: InputMetadataType }>(path);
  return {
    title: matterResult.data?.metadata.title || 'Atipy',
    description:
      matterResult.data?.metadata.description ||
      "Une tribu au service d'un monde plus accessible - Nous vous accompagnons dans les domaines du digital, du design, de l'accessibilité et de la conception universelle",
    keywords: matterResult.data?.metadata.keywords?.map(
      ({ keyword }: { keyword: string }) => keyword
    ),
    ogImg: matterResult.data?.metadata.ogImg,
  };
};
