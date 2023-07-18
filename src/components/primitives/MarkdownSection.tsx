'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

import { ColSectionType, SectionType } from '@/ts';

interface SectionProps extends SectionType {
  smallGap?: boolean;
  pClassName?: string;
}

interface ColProps extends ColSectionType {
  pClassName?: string;
}

const Col = ({ text, image, reverseMobile, pClassName }: ColProps) => {
  const getColorText = (
    color: 'blue' | 'red' | 'green' | 'yellow' | undefined
  ) => {
    switch (color) {
      case 'blue':
        return '!text-a-blue-dark dark:!text-a-blue-light';
      case 'red':
        return '!text-a-red-dark dark:!text-a-red-light';
      case 'green':
        return '!text-a-green-dark dark:!text-a-green-light';
      case 'yellow':
        return '!text-a-yellow-dark dark:!text-a-yellow-light';

      default:
        return '!text-current dark:!text-current';
    }
  };

  return (
    <div
      className={clsxm(
        'w-full flex gap-y-6',
        reverseMobile ? 'flex-col-reverse md:flex-col' : 'flex-col'
      )}
    >
      {text && (
        <article
          className={clsxm(
            'w-full prose max-w-none dark:prose-invert lg:prose-xl',
            getColorText(text.color)
          )}
        >
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p
                  className={clsxm(
                    'block w-full flex-grow',
                    getColorText(text.color),
                    pClassName
                  )}
                >
                  {children}
                </p>
              ),
              code: ({ children }) => (
                <u className={clsxm('underline', getColorText(text.color))}>
                  {children}
                </u>
              ),
            }}
          >
            {text.content}
          </ReactMarkdown>
        </article>
      )}
      {image?.url && (
        <figure className='block w-full'>
          <img
            src={image.url}
            alt={image?.legend ?? ''}
            className='rounded-[10px] w-full h-auto'
          />
          {image?.legend && (
            <legend className='text-grey-110 text-[16px] lg:text-[18px] xl:text-[20px] my-2 dark:text-grey-100'>
              {image.legend}
            </legend>
          )}
        </figure>
      )}
    </div>
  );
};

export const MarkdownSection = ({
  col1,
  col2,
  col3,
  smallGap = false,
  pClassName,
}: SectionProps) => {
  if (
    !col2?.text?.content &&
    !col2?.image?.url &&
    !col3?.text?.content &&
    !col3?.image?.url
  ) {
    return (
      <div className='w-full flex flex-col mb-6 md:mb-10'>
        <Col {...col1} pClassName={pClassName} />
      </div>
    );
  }
  return (
    <section
      className={clsxm(
        'tl w-full flex flex-col mb-6 md:mb-10',
        'md:flex-row',
        smallGap
          ? 'gap-6 lg:gap-8 xl:gap-10'
          : 'gap-6 md:gap-10 lg:gap-16 xl:gap-24'
      )}
    >
      <Col {...col1} pClassName={pClassName} />
      {(col2?.text?.content || col2?.image?.url) && (
        <Col {...col2} pClassName={pClassName} />
      )}
      {(col3?.text?.content || col3?.image?.url) && (
        <Col {...col3} pClassName={pClassName} />
      )}
    </section>
  );
};
