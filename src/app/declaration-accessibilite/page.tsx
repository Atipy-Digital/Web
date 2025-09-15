import { Metadata } from 'next';
import { Key } from 'react';

import { siteOrigin } from '@/lib/constants';

import { Box } from '@/components/common/Box';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import { getAccessibilityData } from '@/services/accessibility.service';

import { ColSectionType } from '@/ts';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/declaration-accessibilite`,
  },
  title: 'Accessibilité',
};

export default function Accessibility() {
  const accessibilityData = getAccessibilityData();

  return (
    <Page>
      <HeaderPage
        title='Accessibilité'
        currentLink={{
          label: 'Accessibilité',
          url: 'declaration-accessibilite',
        }}
      />
      <Box
        className='tl sm:px2-fluid lg:px-fluid pb-64
      '
      >
        {accessibilityData ? (
          accessibilityData.sections.map(
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
          <p>Données d'accessibilité non disponibles.</p>
        )}
      </Box>
    </Page>
  );
}
