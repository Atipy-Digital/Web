import { nanoid } from 'nanoid';
import Link from 'next/link';
import { Fragment } from 'react';

import type { FooterMenuTextType } from '@/ts';

export const FooterMenuText = ({ title, rows }: FooterMenuTextType) => {
  return (
    <ul>
      <li className='pb-3 md:pb-5'>
        <label className='h6 block text-center md:text-left'>{title}</label>
      </li>
      <li className='flex items-center gap-x-4 lg:gap-x-7'>
        {rows.map(({ link1, link2 }) => (
          <Fragment key={`footer-menu-text-${nanoid(7)}`}>
            <Link
              href={link1.url}
              className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
            >
              {link1.label}
            </Link>
            <Link
              href={link2.url}
              className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
            >
              {link2.label}
            </Link>
          </Fragment>
        ))}
      </li>
    </ul>
  );
};
