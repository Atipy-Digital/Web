import { getSlugs, readFile } from './utils';

import type {
  ExpertiseDesignType,
  ExpertiseDigitalType,
  ExpertiseEngineerType,
  ExpertiseFormationType,
  ExpertisePageDataType,
  ExpertiseSubPageType,
  MetadataType,
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

//#region  //*=========== Expertise Design ===========
const PATH_FOLDER_DESIGN = 'src/data/design';

export const getExpertiseDesignSubPageSlugs = () => {
  return getSlugs(PATH_FOLDER_DESIGN);
};
export const getExpertiseDesignSubPageMetaData = (
  slug: string
): MetadataType | null => {
  const matterResult = readFile<ExpertiseSubPageType>(
    `${PATH_FOLDER_DESIGN}/${slug}.md`
  );
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};
export const getExpertiseDesignSubPages = (): ExpertiseSubPageType[] => {
  const slugs = getExpertiseDesignSubPageSlugs();
  if (!slugs) return [];
  const subPages: ExpertiseSubPageType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
      `${PATH_FOLDER_DESIGN}/${slug}.md`
    );

    if (matterResult?.data) {
      subPages.push({
        slug,
        ...matterResult.data,
      });
    }
  }

  if (!subPages.length) return [];

  return subPages.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
export const getExpertiseDesignSubPageBySlug = (
  slug: string
): ExpertiseSubPageType | null => {
  const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
    `${PATH_FOLDER_DESIGN}/${slug}.md`
  );

  if (!matterResult?.data) return null;

  return {
    slug,
    ...matterResult.data,
  };
};
export const getExpertiseDesignSubPageNextLink = (slug: string) => {
  const subPages = getExpertiseDesignSubPages();
  if (!subPages.length) return undefined;

  const currentSubIndex = subPages.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex == -1) return undefined;
  if (currentSubIndex + 1 > subPages.length) return undefined;
  const subPage = subPages[currentSubIndex + 1];
  if (!subPage) return undefined;

  return {
    label: subPage.title,
    url: `/expertises/design/${subPage.slug}`,
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
    expertises: getExpertiseDesignSubPages(),
  };
};
//#endregion  //*======== Expertise Design ===========

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
