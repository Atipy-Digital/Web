'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';
import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { Box } from '@/components/common/Box';
import {
  Breadcrumb,
  type BreadcrumbLinkProps,
} from '@/components/common/Breadcrumb';

import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

type Props = {
  title: string;
  intro?: string;
  links?: BreadcrumbLinkProps[];
  currentLink: BreadcrumbLinkProps;
  prevLink?: BreadcrumbLinkProps;
  nextLink?: BreadcrumbLinkProps;
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
  prevLink,
  nextLink,
}: Props) => {
  const matchXL = useMediaQuery(MEDIA_QUERY.XL);
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const smallSize = matchSM ? 'md' : 'lg';
  const size = matchXL ? 'mxl' : smallSize;

  return (
    <Box className={clsxm('tl mb-0 md:mb-10 lg:mb-11 xl:mb-16', boxClassName)}>
      <div className='tl px-0 pt-5 pb-10 md:px-fluid md:py-fluid w-full'>
        <Breadcrumb
          links={links}
          currentLink={currentLink}
          align={align}
          className={breadcrumbClassName}
        />

        {!intro ? (
          <div
            className={clsxm(
              'w-full',
              prevLink && nextLink && 'flex items-center justify-between'
            )}
          >
            {prevLink && (
              <Link
                href={prevLink.url}
                className='mt-4 absolute l-fluid hidden 3xl:flex items-center gap-2 md:gap-4 lg:gap-6'
              >
                <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_LEFT} size={size} />
                <span className='link-hover-small text-[16px] md:text-body1'>
                  {prevLink.label}
                </span>
              </Link>
            )}
            <h2
              className={clsxm(
                'h2-primary w-full mt-4',
                align === 'center' ? 'text-center' : 'text-left'
              )}
            >
              {title}
            </h2>
            {nextLink && (
              <Link
                href={nextLink.url}
                className='mt-4 absolute r-fluid hidden 3xl:flex items-center gap-2 md:gap-4 lg:gap-6'
              >
                <span className='link-hover-small text-[16px] md:text-body1'>
                  {nextLink.label}
                </span>
                <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_RIGHT} size={size} />
              </Link>
            )}
          </div>
        ) : (
          <>
            <div
              className={clsxm(
                'w-full',
                prevLink && nextLink && 'flex items-center justify-between'
              )}
            >
              {prevLink && (
                <Link
                  href={prevLink.url}
                  className='mt-4 absolute l-fluid hidden 3xl:flex items-center gap-2 md:gap-4 lg:gap-6'
                >
                  <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_LEFT} size={size} />
                  <span className='link-hover-small text-[16px] md:text-body1'>
                    {prevLink.label}
                  </span>
                </Link>
              )}
              <h1
                className={clsxm(
                  'h2-primary w-full mt-4',
                  align === 'center' ? 'text-center' : 'text-left'
                )}
              >
                {title}
              </h1>

              {nextLink && (
                <Link
                  href={nextLink.url}
                  className='mt-4 absolute r-fluid hidden 3xl:flex items-center gap-2 md:gap-4 lg:gap-6'
                >
                  <span className='link-hover-small text-[16px] md:text-body1'>
                    {nextLink.label}
                  </span>
                  <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_RIGHT} size={size} />
                </Link>
              )}
            </div>

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
