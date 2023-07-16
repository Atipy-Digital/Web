'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

import { Box } from '@/components/common/Box';
import {
  Breadcrumb,
  type BreadcrumbLinkProps,
} from '@/components/common/Breadcrumb';

type Props = {
  title: string;
  intro?: string;
  links?: BreadcrumbLinkProps[];
  currentLink: BreadcrumbLinkProps;
  boxClassName?: string;
  align?: 'center' | 'left';
  breadcrumbClassName?: string;
};

export const HeaderPage = ({
  title,
  intro,
  links,
  currentLink,
  boxClassName,
  align = 'center',
  breadcrumbClassName,
}: Props) => {
  return (
    <Box className={clsxm('tl mb-0 md:mb-10 lg:mb-11 xl:mb-16', boxClassName)}>
      <div className='tl px-0 pt-5 pb-10 md:px-fluid md:py-fluid relative w-full'>
        <Breadcrumb
          links={links}
          currentLink={currentLink}
          align={align}
          className={breadcrumbClassName}
        />

        {!intro ? (
          <h2
            className={clsxm(
              'h2-primary w-full mt-4',
              align === 'center' ? 'text-center' : 'text-left'
            )}
          >
            {title}
          </h2>
        ) : (
          <>
            <h1
              className={clsxm(
                'h2-primary w-full mt-4',
                align === 'center' ? 'text-center' : 'text-left'
              )}
            >
              {title}
            </h1>

            <h2
              className={clsxm(
                'h2-intro pt-6 md:pt-8 lg:pt-10',
                align === 'center' ? 'text-center' : 'text-left'
              )}
            >
              <ReactMarkdown
                components={{
                  em: 'span',
                }}
              >
                {intro}
              </ReactMarkdown>
            </h2>
          </>
        )}
      </div>
    </Box>
  );
};
