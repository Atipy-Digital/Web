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
import { MarkdownText } from '../primitives/MarkdownText';

type Props = {
  title: string;
  intro?: string;
  links?: BreadcrumbLinkProps[];
  currentLink: BreadcrumbLinkProps;
  prevLink?: BreadcrumbLinkProps;
  nextLink?: BreadcrumbLinkProps;
  boxClassName?: string;
  breadcrumbBoxClassName?: string;
  align?: 'center' | 'left';
  breadcrumbClassName?: string;
  titleClassName?: string;
  wrapperClassname?: string;
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
  titleClassName,
  breadcrumbBoxClassName,
  wrapperClassname,
}: Props) => {
  const matchXL = useMediaQuery(MEDIA_QUERY.XL);
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const smallSize = matchSM ? 'md' : 'lg';
  const size = matchXL ? 'mxl' : smallSize;

  return (
    <Box
      className={clsxm(
        'tl mb-0 md:mb-10 lg:mb-11 xl:mb-16 !max-w-full',
        boxClassName
      )}
    >
      <div
        className={clsxm(
          'tl px-0 pt-0 md:pt-5 pb-8 sm:pb-10 md:py-fluid w-full',
          wrapperClassname
        )}
      >
        <Breadcrumb
          links={links}
          currentLink={currentLink}
          align={align}
          className={breadcrumbClassName}
          boxClassName={breadcrumbBoxClassName}
        />

        {!intro ? (
          <div
            className={clsxm(
              'mt-8 md:mt-4 w-full',
              (prevLink || nextLink) && 'flex items-center justify-between'
            )}
          >
            {prevLink && (
              <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full min-w-[160px]'>
                <Link
                  href={prevLink.url}
                  className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 2xl:gap-6 leading-none mr-auto min-w-[160px]'
                >
                  <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_LEFT} size={size} />
                  <span className='block line-truncate link-to-hover text-left text-[16px] md:text-body1 !leading-none my-auto'>
                    {prevLink.label}
                  </span>
                </Link>
              </div>
            )}
            <h1
              className={clsxm(
                'h2-primary w-full sm:px-4 lg:px-6 xl:px-8 whitespace-break-spaces flex-grow',
                align === 'center' ? 'text-center' : 'text-left',
                titleClassName
              )}
            >
              <MarkdownText
                components={{
                  p: ({ children }) => <>{children}</>,
                }}
              >
                {title}
              </MarkdownText>
            </h1>
            {nextLink ? (
              <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full'>
                <Link
                  href={nextLink.url}
                  className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 2xl:gap-6 leading-none ml-auto'
                >
                  <span className='block line-truncate link-to-hover text-right text-[16px] md:text-body1 !leading-none my-auto'>
                    {nextLink.label}
                  </span>
                  <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_RIGHT} size={size} />
                </Link>
              </div>
            ) : (
              <>
                {prevLink && (
                  <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full' />
                )}
              </>
            )}
          </div>
        ) : (
          <>
            <div
              className={clsxm(
                'mt-4 w-full',
                (prevLink || nextLink) && 'flex items-center justify-between'
              )}
            >
              {prevLink && (
                <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full min-w-[160px]'>
                  <Link
                    href={prevLink.url}
                    className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 2xl:gap-6 leading-none mr-auto min-w-[160px]'
                  >
                    <AtipyIcon
                      type={ATIPY_ICON.ARROW_CIRCLE_LEFT}
                      size={size}
                    />
                    <span className='block line-truncate link-to-hover text-left text-[16px] md:text-body1 !leading-none my-auto'>
                      {prevLink.label}
                    </span>
                  </Link>
                </div>
              )}
              <h1
                className={clsxm(
                  'h2-primary w-full sm:px-4 lg:px-6 xl:px-8 whitespace-break-spaces flex-grow',
                  align === 'center' ? 'text-center' : 'text-left',
                  titleClassName
                )}
              >
                <MarkdownText
                  components={{
                    p: ({ children }) => <>{children}</>,
                  }}
                >
                  {title}
                </MarkdownText>
              </h1>

              {nextLink ? (
                <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full'>
                  <Link
                    href={nextLink.url}
                    className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 2xl:gap-6 leading-none ml-auto'
                  >
                    <span className='block line-truncate link-to-hover text-right text-[16px] md:text-body1 !leading-none my-auto'>
                      {nextLink.label}
                    </span>
                    <AtipyIcon
                      type={ATIPY_ICON.ARROW_CIRCLE_RIGHT}
                      size={size}
                    />
                  </Link>
                </div>
              ) : (
                <div className='hidden md:flex items-center flex-grow max-w-[20%] w-full' />
              )}
            </div>

            <h1
              className={clsxm(
                'h2-intro pt-6 md:pt-8 lg:pt-10 max-w-8xl mx-auto',
                align === 'center' ? 'sm:text-center' : 'text-left',
                titleClassName
              )}
            >
              <ReactMarkdown
                components={{
                  em: 'span',
                }}
              >
                {intro}
              </ReactMarkdown>
            </h1>
          </>
        )}
      </div>
    </Box>
  );
};
