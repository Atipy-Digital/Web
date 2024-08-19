import { readFile } from './utils';

interface SubPage {
  subPageTitre: string;
  subPageUrl: string;
}

interface SecondaryPage {
  secondaryTitre: string;
  secondaryUrl: string;
  subPages?: SubPage[];
}

interface Column {
  page: {
    Titre: string;
    Url: string;
    secondaryPages?: SecondaryPage[];
  };
}

interface Section {
  col1: Column;
  col2: Column;
  col3: Column;
  col4: Column;
  col5: Column;
}

interface SitemapData {
  sections: Section[];
}

export const getSitemapData = (): SitemapData | null => {
  const matterResult = readFile<SitemapData>('src/data/pages/sitemap.md');

  return matterResult.data;
};
