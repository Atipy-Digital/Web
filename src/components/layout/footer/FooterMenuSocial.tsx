import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

import { FooterMenuRowSocialType, FooterMenuSocialType } from '@/ts';

export const FooterMenuSocial = ({ title, rows }: FooterMenuSocialType) => {
  return (
    <ul className='mb-8 md:mb-0'>
      <li className='pb-3 md:pb-5'>
        <label className='h6 text-center md:text-left'>{title}</label>
      </li>
      <li className='flex items-center justify-center gap-x-4 md:gap-x-7'>
        {rows.map(({ type, url }) => {
          const iconTypes = new Map<
            FooterMenuRowSocialType['type'],
            ATIPY_ICON
          >([
            ['instagram', ATIPY_ICON.INSTA],
            ['linkedin', ATIPY_ICON.LINKEDIN],
            ['twitter', ATIPY_ICON.TWITTER],
          ]);

          const currentType = iconTypes.get(type) || ATIPY_ICON.CROSS;

          return (
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-8 h-8 rounded-full flex items-center justify-center bg-black dark:bg-white text-white dark:text-black'
              key={`footer-menu-social-${type}`}
              aria-label={`lien vers la page ${type}`}
            >
              <AtipyIcon type={currentType} />
            </a>
          );
        })}
      </li>
    </ul>
  );
};
