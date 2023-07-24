'use client';

import ReactMarkdown from 'react-markdown';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

import type {
  ContactInfosType,
  ContactLinkType,
  ContactSocialsType,
} from '@/ts';

type Props = {
  socials: ContactSocialsType;
  infos: ContactInfosType;
};

export const ContactFooter = ({ socials, infos }: Props) => {
  const matchesSM = useMediaQuery(MEDIA_QUERY.SM);
  return (
    <Box className='max-w-2xl flex flex-col items-center justify-center my-16 text-center'>
      <h3 className='pb-6'>
        <ReactMarkdown>{socials.title}</ReactMarkdown>
      </h3>
      <div className='w-fit flex items-center justify-center gap-x-4'>
        {socials.links.map((link) => {
          const iconTypes = new Map<ContactLinkType['type'], ATIPY_ICON>([
            ['instagram', ATIPY_ICON.INSTA],
            ['linkedin', ATIPY_ICON.LINKEDIN],
            ['twitter', ATIPY_ICON.TWITTER],
          ]);

          const currentType = iconTypes.get(link.type) || ATIPY_ICON.CROSS;

          return (
            <a
              aria-label={`atipy ${link.type}`}
              key={`contact-link-${link.type}`}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-background text-white dark:bg-white dark:text-black w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-xl'
            >
              <AtipyIcon type={currentType} size={matchesSM ? 'md' : 'xl'} />
            </a>
          );
        })}
      </div>

      <div className='flex items-center gap-x-2 md:gap-x-6 py-14 md:py-20'>
        <AtipyIcon type={ATIPY_ICON.ENVELOP} size={matchesSM ? 'md' : 'xl'} />
        <a href={`mailto:${infos.email}`} className='text-body1 font-secondary'>
          {infos.email}
        </a>
      </div>

      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className='text-body1 text-center leading-snug font-secondary'>
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className='font-primary'>{children}</strong>
          ),
        }}
      >
        {infos.address}
      </ReactMarkdown>
    </Box>
  );
};
