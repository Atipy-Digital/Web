import xml2js from 'xml2js';

type UrlEntry = {
  loc: string;
};

type SiteMap = {
  urlset: {
    url: UrlEntry[];
  };
};

export const getSiteMapUrls = async (): Promise<string[]> => {
  try {
    const response = await fetch('/sitemap.xml');
    const sitemapText = await response.text();
    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });

    const result: SiteMap = await parser.parseStringPromise(sitemapText);
    return result.urlset.url.map((urlEntry: UrlEntry) => urlEntry.loc);
  } catch (e) {
    console.error('Erreur lors du chargement du sitemap:', e);
    return [];
  }
};
