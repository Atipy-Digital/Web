import { nanoid } from 'nanoid';
import Link from 'next/link';
import { Fragment } from 'react';

import { FooterMenuTextType } from '@/ts';

export const FooterMenuText = ({ title, rows }: FooterMenuTextType) => {
  return (
    <ul>
      <li className='pb-3 md:pb-5'>
        <h6 className='text-center md:text-left'>{title}</h6>
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
