import React from 'react';

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
  col1?: Column;
  col2?: Column;
  col3?: Column;
  col4?: Column;
  col5?: Column;
}

interface SitemapProps {
  data: {
    sections: Section[];
  };
}

const SitemapCategories: React.FC<SitemapProps> = ({ data }) => (
  <div className='container mx-auto px-8'>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
      {data.sections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {(Object.entries(section) as [keyof Section, Column][]).map(
            ([colKey, colValue]) => (
              <div key={colKey} className='mb-6'>
                <h3 className='font-bold text-lg mb-4'>
                  <a
                    href={colValue.page.Url}
                    className='hover:underline text-black dark:text-white'
                  >
                    {colValue.page.Titre}
                  </a>
                </h3>
                {colValue.page.secondaryPages && (
                  <ul className='space-y-2'>
                    {colValue.page.secondaryPages.map(
                      (item: SecondaryPage, itemIndex: number) => (
                        <li key={itemIndex} className='text-sm'>
                          <a
                            href={item.secondaryUrl}
                            className='hover:underline text-gray-800 dark:text-gray-200'
                          >
                            {item.secondaryTitre}
                          </a>
                          {item.subPages && (
                            <ul className='ml-4 mt-1 space-y-1'>
                              {item.subPages.map(
                                (subItem: SubPage, subIndex: number) => (
                                  <li key={subIndex} className='text-xs'>
                                    <a
                                      href={subItem.subPageUrl}
                                      className='hover:underline text-gray-700 dark:text-gray-300'
                                    >
                                      {subItem.subPageTitre}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default SitemapCategories;
