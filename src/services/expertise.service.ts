import { getExpertiseFeaturedSlugs, getSlugs, readFile } from './utils';

import {
  ExpertiseDesignType,
  ExpertiseDigitalType,
  ExpertiseEngineerType,
  ExpertiseFormationType,
  ExpertiseMobilitesType,
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
  const slugs = getExpertiseFeaturedSlugs('sub_display_expertises_design');
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

  return subPages;
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

//#region  //*=========== Expertise Formation ===========
const PATH_FOLDER_FORMATION = 'src/data/formation';

export const getExpertiseFormationSubPageSlugs = () => {
  return getSlugs(PATH_FOLDER_FORMATION);
};
export const getExpertiseFormationSubPageMetaData = (
  slug: string
): MetadataType | null => {
  const matterResult = readFile<ExpertiseSubPageType>(
    `${PATH_FOLDER_FORMATION}/${slug}.md`
  );
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};
export const getExpertiseFormationSubPages = (): ExpertiseSubPageType[] => {
  const slugs = getExpertiseFeaturedSlugs('sub_display_expertises_formation');
  if (!slugs) return [];
  const subPages: ExpertiseSubPageType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
      `${PATH_FOLDER_FORMATION}/${slug}.md`
    );

    if (matterResult?.data) {
      subPages.push({
        slug,
        ...matterResult.data,
      });
    }
  }

  if (!subPages.length) return [];

  return subPages;
};
export const getExpertiseFormationSubPageBySlug = (
  slug: string
): ExpertiseSubPageType | null => {
  const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
    `${PATH_FOLDER_FORMATION}/${slug}.md`
  );

  if (!matterResult?.data) return null;

  return {
    slug,
    ...matterResult.data,
  };
};
export const getExpertiseFormationSubPageNextLink = (slug: string) => {
  const subPages = getExpertiseFormationSubPages();
  if (!subPages.length) return undefined;

  const currentSubIndex = subPages.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex === -1) return undefined;
  if (currentSubIndex + 1 > subPages.length) return undefined;
  const subPage = subPages[currentSubIndex + 1];
  if (subPages.length === 1) return undefined;
  if (!subPage) {
    const first = subPages[0];
    return {
      label: first.title,
      url: `/expertises/formation/${first.slug}`,
    };
  }

  return {
    label: subPage.title,
    url: `/expertises/formation/${subPage.slug}`,
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
      expertises: getExpertiseFormationSubPages(),
    };
  };
//#endregion  //*======== Expertise Formation ===========

//#region  //*=========== Expertise Digital ===========
const PATH_FOLDER_DIGITAL = 'src/data/digital';

export const getExpertiseDigitalSubPageSlugs = () => {
  return getSlugs(PATH_FOLDER_DIGITAL);
};
export const getExpertiseDigitalSubPageMetaData = (
  slug: string
): MetadataType | null => {
  const matterResult = readFile<ExpertiseSubPageType>(
    `${PATH_FOLDER_DIGITAL}/${slug}.md`
  );
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};
export const getExpertiseDigitalSubPages = (): ExpertiseSubPageType[] => {
  const slugs = getExpertiseFeaturedSlugs('sub_display_expertises_digital');
  if (!slugs) return [];
  const subPages: ExpertiseSubPageType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
      `${PATH_FOLDER_DIGITAL}/${slug}.md`
    );

    if (matterResult?.data) {
      subPages.push({
        slug,
        ...matterResult.data,
      });
    }
  }

  if (!subPages.length) return [];

  return subPages;
};
export const getExpertiseDigitalSubPageBySlug = (
  slug: string
): ExpertiseSubPageType | null => {
  const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
    `${PATH_FOLDER_DIGITAL}/${slug}.md`
  );

  if (!matterResult?.data) return null;

  return {
    slug,
    ...matterResult.data,
  };
};
export const getExpertiseDigitalSubPageNextLink = (slug: string) => {
  const subPages = getExpertiseDigitalSubPages();
  if (!subPages.length) return undefined;

  const currentSubIndex = subPages.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex == -1) return undefined;
  if (currentSubIndex + 1 > subPages.length) return undefined;
  const subPage = subPages[currentSubIndex + 1];
  if (!subPage) return undefined;

  return {
    label: subPage.title,
    url: `/expertises/digital/${subPage.slug}`,
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
    expertises: getExpertiseDigitalSubPages(),
  };
};
//#endregion  //*======== Expertise Digital ===========

//#region  //*=========== Expertise Mobilites ===========
const PATH_FOLDER_MOBILITES = 'src/data/mobilites';

export const getExpertiseMobilitesSubPageSlugs = () => {
  return getSlugs(PATH_FOLDER_MOBILITES);
};
export const getExpertiseMobilitesSubPageMetaData = (
  slug: string
): MetadataType | null => {
  const matterResult = readFile<ExpertiseSubPageType>(
    `${PATH_FOLDER_MOBILITES}/${slug}.md`
  );
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};
export const getExpertiseMobilitesSubPages = (): ExpertiseSubPageType[] => {
  const slugs = getExpertiseFeaturedSlugs('sub_display_expertises_mobilites');
  if (!slugs) return [];
  const subPages: ExpertiseSubPageType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
      `${PATH_FOLDER_MOBILITES}/${slug}.md`
    );

    if (matterResult?.data) {
      subPages.push({
        slug,
        ...matterResult.data,
      });
    }
  }

  if (!subPages.length) return [];

  return subPages;
};
export const getExpertiseMobilitesSubPageBySlug = (
  slug: string
): ExpertiseSubPageType | null => {
  const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
    `${PATH_FOLDER_MOBILITES}/${slug}.md`
  );

  if (!matterResult?.data) return null;

  return {
    slug,
    ...matterResult.data,
  };
};
export const getExpertiseMobilitesSubPageNextLink = (slug: string) => {
  const subPages = getExpertiseMobilitesSubPages();
  if (!subPages.length) return undefined;

  const currentSubIndex = subPages.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex == -1) return undefined;
  if (currentSubIndex + 1 > subPages.length) return undefined;
  const subPage = subPages[currentSubIndex + 1];
  if (!subPage) return undefined;

  return {
    label: subPage.title,
    url: `/expertises/mobilites/${subPage.slug}`,
  };
};
export const getExpertiseMobilitesPageData =
  (): ExpertiseMobilitesType | null => {
    const matterResult = readFile<ExpertiseMobilitesType>(
      'src/data/pages/mobilites.md'
    );

    if (!matterResult?.data) return null;

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      sections: matterResult.data.sections,
      expertises: getExpertiseMobilitesSubPages(),
    };
  };
//#endregion  //*======== Expertise Mobilites ===========

//#region  //*=========== Expertise Ingenierie ===========
const PATH_FOLDER_INGENIERIE = 'src/data/ingenierie';

export const getExpertiseIngenierieSubPageSlugs = () => {
  return getSlugs(PATH_FOLDER_INGENIERIE);
};
export const getExpertiseIngenierieSubPageMetaData = (
  slug: string
): MetadataType | null => {
  const matterResult = readFile<ExpertiseSubPageType>(
    `${PATH_FOLDER_INGENIERIE}/${slug}.md`
  );
  if (!matterResult?.data) return null;
  return matterResult.data.metadata;
};
export const getExpertiseIngenierieSubPages = (): ExpertiseSubPageType[] => {
  const slugs = getExpertiseFeaturedSlugs('sub_display_expertises_ingenierie');
  if (!slugs) return [];
  const subPages: ExpertiseSubPageType[] = [];

  for (const slug of slugs) {
    const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
      `${PATH_FOLDER_INGENIERIE}/${slug}.md`
    );

    if (matterResult?.data) {
      subPages.push({
        slug,
        ...matterResult.data,
      });
    }
  }

  if (!subPages.length) return [];

  return subPages;
};
export const getExpertiseIngenierieSubPageBySlug = (
  slug: string
): ExpertiseSubPageType | null => {
  const matterResult = readFile<Omit<ExpertiseSubPageType, 'slug'>>(
    `${PATH_FOLDER_INGENIERIE}/${slug}.md`
  );

  if (!matterResult?.data) return null;

  return {
    slug,
    ...matterResult.data,
  };
};
export const getExpertiseIngenierieSubPageNextLink = (slug: string) => {
  const subPages = getExpertiseIngenierieSubPages();
  if (!subPages.length) return undefined;

  const currentSubIndex = subPages.findIndex((sp) => sp.slug === slug);
  if (currentSubIndex == -1) return undefined;
  if (currentSubIndex + 1 > subPages.length) return undefined;
  const subPage = subPages[currentSubIndex + 1];
  if (!subPage) return undefined;

  return {
    label: subPage.title,
    url: `/expertises/ingenierie/${subPage.slug}`,
  };
};
export const getExpertiseIngenieriePageData =
  (): ExpertiseEngineerType | null => {
    const matterResult = readFile<ExpertiseEngineerType>(
      'src/data/pages/ingenierie.md'
    );

    if (!matterResult?.data) return null;

    return {
      title: matterResult.data.title,
      intro: matterResult.data.intro,
      sections: matterResult.data.sections,
      expertises: getExpertiseIngenierieSubPages(),
    };
  };
//#endregion  //*======== Expertise Ingenierie ===========
