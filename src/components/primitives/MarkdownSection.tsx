'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

import { ColSectionType, SectionType } from '@/ts';

const Col = ({ text, image, reverseMobile }: ColSectionType) => {
  const getColorText = (
    color: 'blue' | 'red' | 'green' | 'yellow' | undefined
  ) => {
    switch (color) {
      case 'blue':
        return '!text-a-blue-dark dark:!text-a-blue-dark';
      case 'red':
        return '!text-a-red-dark dark:!text-a-red-dark';
      case 'green':
        return '!text-a-green-dark dark:!text-a-green-dark';
      case 'yellow':
        return '!text-a-yellow-dark dark:!text-a-yellow-dark';

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
                    getColorText(text.color)
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
      {image && (
        <figure className='block w-full'>
          <img
            src={image.url}
            alt={image?.legend ?? ''}
            className='rounded-[10px] w-full h-auto'
          />
          {image?.legend && (
            <legend className='text-grey-110 text-[16px] lg:text-[18px] xl:text-[20px] my-2'>
              {image.legend}
            </legend>
          )}
        </figure>
      )}
    </div>
  );
};

export const MarkdownSection = ({ col1, col2, col3 }: SectionType) => {
  if (!col2 && !col3) {
    return (
      <div className='w-full flex flex-col mb-6 md:mb-10'>
        <Col {...col1} />
      </div>
    );
  }
  return (
    <section
      className={clsxm(
        'tl w-full flex flex-col mb-6 md:mb-10 md:gap-x-10 lg:gap-x-16 xl:gap-x-24',
        'md:flex-row'
      )}
    >
      <Col {...col1} />
      {col2?.text && <Col {...col2} />}
      {col3?.text && <Col {...col3} />}
    </section>
  );
};
