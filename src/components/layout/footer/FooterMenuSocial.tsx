import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

import type { FooterMenuRowSocialType, FooterMenuSocialType } from '@/ts';

export const FooterMenuSocial = ({ title, rows }: FooterMenuSocialType) => {
  return (
    <ul className='flex flex-col mb-8 md:mb-0 xl:flex-row xl:gap-x-11 xl:items-center'>
      <li className='pb-3 md:pb-5 xl:pb-0'>
        <span className='h6 block text-center md:text-left'>{title}</span>
        <ul className='flex items-center justify-center gap-x-4 md:gap-x-7 xl:gap-x-4'>
          {rows.map(({ type, url }) => {
            const iconTypes = new Map<
              FooterMenuRowSocialType['type'],
              ATIPY_ICON
            >([
              ['instagram', ATIPY_ICON.INSTA],
              ['linkedin', ATIPY_ICON.LINKEDIN],
              ['twitter', ATIPY_ICON.TWITTER],
            ]);

            const currentType = iconTypes.get(type) ?? ATIPY_ICON.CROSS;

            return (
              <li key={`footer-menu-social-${type}`}>
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-8 h-8 rounded-md flex items-center justify-center bg-background dark:bg-white text-white dark:text-black'
                >
                  <AtipyIcon
                    type={currentType}
                    isAriaHidden={true}
                    role='img'
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
