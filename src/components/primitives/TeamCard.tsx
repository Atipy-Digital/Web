'use client';

import { AtipyImage } from '@/components/common/icons/AtipyImage';

import { Tag } from './Tag';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

import type { MemberType } from '@/ts';

type Props = MemberType;

export const TeamCard = ({
  image,
  badge,
  linkedin,
  name,
  skills,
  decorativeOrInformative,
}: Props) => {
  return (
    <article className='col-span-1 flex-grow w-full h-full rounded-[10px] p-4 flex flex-col bg-white shadow-project-card dark:bg-background dark:border-2 dark:border-white dark:shadow-none max-w-[450px] m-auto'>
      <figure className='block w-full aspect-video rounded-[10px] overflow-hidden'>
        {decorativeOrInformative ? (
          // Image informative
          <AtipyImage
            src={image}
            altText={image}
            className='w-full h-auto rounded-[10px]'
            isInformative
            isDecorative={false}
          />
        ) : (
          // Image décorative
          <AtipyImage
            src={image}
            className='w-full h-auto rounded-[10px]'
            isDecorative
          />
        )}
      </figure>
      <div className='pt-4'>
        <div className='flex items-center justify-between'>
          <Tag
            color={badge.color}
            label={badge.label}
            type='expertise'
            className='!w-fit !py-2 !text-[15px]'
          />

          <a
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-hidden={false}
            aria-label={`profil linkedin de ${name}`}
            className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-background text-white dark:bg-white dark:text-black'
          >
            <AtipyIcon isInformative type={ATIPY_ICON.LINKEDIN} />
          </a>
        </div>
      </div>

      <footer className='pb-4'>
        <p className='mt-4 mb-1 text-body1 font-bold'>{name}</p>
        <ul className='flex flex-col'>
          {skills.map((skill) => (
            <li
              key={`skill-${name}-${skill.text}`}
              className='tl text-[18px] md:text-[20px]'
            >{`+ ${skill.text}`}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
};
