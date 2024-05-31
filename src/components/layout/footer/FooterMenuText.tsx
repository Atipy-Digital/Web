import { nanoid } from 'nanoid';
import Link from 'next/link';
import { Fragment } from 'react';

import { type FooterMenuTextType, isFooterMenuText1Response } from '@/ts';

export const FooterMenuText = (data: FooterMenuTextType) => {
  const isMenuText1 = isFooterMenuText1Response(data);

  return (
    <ul className='flex flex-col xl:flex-row xl:gap-x-11 xl:items-center'>
      <li className='pb-3 md:pb-5 xl:pb-0'>
        <span className='h6 block text-center md:text-left'>{data.title}</span>
      </li>
      {isMenuText1 ? (
        <li className='flex items-center gap-x-4 lg:gap-x-7'>
          {data.rows.map(({ link1, link2 }) => (
            <Fragment key={`footer-menu-text-${nanoid(7)}`}>
              <div>
                <Link
                  href={link1.url}
                  className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
                >
                  {link1.label}
                </Link>
              </div>
              <div>
                <Link
                  href={link2.url}
                  className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
                >
                  {link2.label}
                </Link>
              </div>
            </Fragment>
          ))}
        </li>
      ) : (
        <li>
          <a
            href={`mailto:${data.email}`}
            className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
          >
            {data.email}
          </a>
        </li>
      )}
    </ul>
  );
};
