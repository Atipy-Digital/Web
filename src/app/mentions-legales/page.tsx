import { Metadata } from 'next';
import { Key } from 'react';

import { siteOrigin } from '@/lib/constants';

import { Box } from '@/components/common/Box';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import { getMentionslegalesData } from '@/services/mentionlegales.service';

import { ColSectionType } from '@/ts';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/mentions-legales`,
  },
  title: 'Mentions légales',
};

export default function Sitemap() {
  const mentionsLegalesData = getMentionslegalesData();
  return (
    <Page>
      <HeaderPage
        title='Mentions légales'
        currentLink={{
          label: 'Mentions légales',
          url: 'mentions-legales',
        }}
      />

      <Box className='tl sm:px2-fluid lg:px-fluid'>
        {mentionsLegalesData ? (
          mentionsLegalesData.sections.map(
            (
              section: {
                inverseCol: boolean | undefined;
                col1: ColSectionType;
                col2: ColSectionType | undefined;
                col3: ColSectionType | undefined;
              },
              index: Key | null | undefined
            ) => (
              <MarkdownSection
                key={index}
                inverseCol={section.inverseCol}
                col1={section.col1}
                col2={section.col2}
                col3={section.col3}
              />
            )
          )
        ) : (
          <p>Données des mentions légales non disponibles.</p>
        )}
      </Box>
    </Page>
  );
}
