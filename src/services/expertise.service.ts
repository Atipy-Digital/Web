import { readFile } from './utils';

import type {
  ExpertiseDesignType,
  ExpertiseDigitalType,
  ExpertiseEngineerType,
  ExpertiseFormationType,
  ExpertisePageDataType,
} from '@/ts';

export const getExpertisePageData = (): ExpertisePageDataType | null => {
  const matterResult = readFile<ExpertisePageDataType>(
    'src/data/pages/expertises.md'
  );

  if (!matterResult?.data) return null;

  return {
    cards: matterResult.data.cards,
  };
};

export const getExpertiseDesignPageData = (): ExpertiseDesignType | null => {
  const matterResult = readFile<ExpertiseDesignType>(
    'src/data/pages/design.md'
  );

  if (!matterResult?.data) return null;

  return {
    title: matterResult.data.title,
    intro: matterResult.data.intro,
    sections: matterResult.data.sections,
    expertises: [],
  };
};
export const getExpertiseDigitalPageData = (): ExpertiseDigitalType | null => {
  const matterResult = readFile<ExpertiseDigitalType>(
    'src/data/pages/digital.md'
  );

  if (!matterResult?.data) return null;

  return {
    title: matterResult.data.title,
    intro: matterResult.data.intro,
    sections: matterResult.data.sections,
    expertises: [],
  };
};

export const getExpertiseEngineerPageData =
  (): ExpertiseEngineerType | null => {
    const matterResult = readFile<ExpertiseEngineerType>(
      'src/data/pages/engineer.md'
    );

    if (!matterResult?.data) return null;

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      sections: matterResult.data.sections,
      expertises: [],
    };
  };
export const getExpertiseFormationPageData =
  (): ExpertiseFormationType | null => {
    const matterResult = readFile<ExpertiseFormationType>(
      'src/data/pages/formation.md'
    );

    if (!matterResult?.data) return null;

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      sections: matterResult.data.sections,
      expertises: [],
    };
  };
