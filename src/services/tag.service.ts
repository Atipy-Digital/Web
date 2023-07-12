import { readFile } from './utils';

import type { TagBusinessType, TagExpertiseType, TagType } from '@/ts';

const PATH_BUSINESS = 'src/data/tags/business_tags.md';
const PATH_EXPERTISE = 'src/data/tags/expertise_tags.md';

export const getTagsBusiness = (): TagBusinessType[] => {
  const matterResult = readFile(PATH_BUSINESS);
  return matterResult.data.tag ?? [];
};
export const getTagsBusinessByLabels = (
  labels: string[]
): TagBusinessType[] => {
  const businessTags = getTagsBusiness();

  return labels.map((label) => {
    const tag = businessTags.find(
      (tag) => tag.label === label
    ) as TagBusinessType;
    return tag;
  });
};

export const getTagsExpertise = (): TagExpertiseType[] => {
  const matterResult = readFile(PATH_EXPERTISE);
  return matterResult.data.tag ?? [];
};
export const getTagsExpertiseByLabels = (
  labels: string[]
): TagExpertiseType[] => {
  const expertiseTags = getTagsExpertise();

  return labels.map((label) => {
    const tag = expertiseTags.find(
      (tag) => tag.label === label
    ) as TagExpertiseType;
    return tag;
  });
};

export const getTags = (): TagType[] => {
  const businessTags = getTagsBusiness();
  const expertiseTags = getTagsExpertise();

  return [...businessTags, ...expertiseTags];
};
