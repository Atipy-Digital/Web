import { nanoid } from 'nanoid';
import Link from 'next/link';

import { type FooterMenuTextType, isFooterMenuText1Response } from '@/ts';

export const FooterMenuText = (data: FooterMenuTextType) => {
  const isMenuText1 = isFooterMenuText1Response(data);
  return (
    <ul className='flex flex-col xl:flex-row xl:gap-x-11 xl:items-center'>
      <li className='pb-3 md:pb-5 xl:pb-0'>
        <span className='h6 block text-center md:text-left'>{data.title}</span>
      </li>
      {isMenuText1 ? (
        data.rows.map(({ link1, link2, link3 }) => [
          <li key={`link1-${nanoid(7)}`}>
            <Link
              href={link1.url}
              className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
            >
              {link1.label}
            </Link>
          </li>,
          <li key={`link2-${nanoid(7)}`}>
            <Link
              href={link2.url}
              className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
            >
              {link2.label}
            </Link>
          </li>,
          <li key={`link3-${nanoid(7)}`}>
            <Link
              href={link3.url}
              className='link-hover tl font-secondary text-[16px] md:text-[18px] lg:text-[20px]'
            >
              {link3.label}
            </Link>
          </li>,
        ])
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
