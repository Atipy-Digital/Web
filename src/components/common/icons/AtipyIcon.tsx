import clsxm from '@/lib/clsxm';

import { CrossIcon } from './vectors/Cross.icon';
import { InstaIcon } from './vectors/Insta.icon';
import { IconProps } from './vectors/interface';
import { LinkedinIcon } from './vectors/Linkedin.icon';
import { MoonIcon } from './vectors/Moon.icon';
import { SunIcon } from './vectors/Sun.icon';
import { TwitterIcon } from './vectors/Twitter.icon';

export enum ATIPY_ICON {
  SUN = 'SUN',
  MOON = 'MOON',
  CROSS = 'CROSS',
  INSTA = 'INSTA',
  LINKEDIN = 'LINKEDIN',
  TWITTER = 'TWITTER',
}

type AtipyIconSize = 'xxs' | 'sm' | 'md' | 'mdx' | 'lg' | 'xl';

export interface AtipyIconProps {
  size?: AtipyIconSize;
  type: ATIPY_ICON;
  className?: string;
}

export type AtipyIconElement = (props: IconProps) => JSX.Element;

export const AtipyIcon = ({ size = 'md', type, className }: AtipyIconProps) => {
  const sizeClass = new Map<string, string>([
    ['xxs', 'w-[12px] h-[12px]'],
    ['sm', 'w-[18px] h-[18px]'],
    ['md', 'w-[24px] h-[24px]'],
    ['mdx', 'w-[28px] h-[28px]'],
    ['lg', 'w-[32px] h-[32px]'],
    ['xl', 'w-[40px] h-[40px]'],
  ]);

  const icons = new Map<ATIPY_ICON, AtipyIconElement>([
    [ATIPY_ICON.SUN, SunIcon],
    [ATIPY_ICON.MOON, MoonIcon],
    [ATIPY_ICON.CROSS, CrossIcon],
    [ATIPY_ICON.INSTA, InstaIcon],
    [ATIPY_ICON.LINKEDIN, LinkedinIcon],
    [ATIPY_ICON.TWITTER, TwitterIcon],
  ]);

  const Icon: AtipyIconElement = icons.get(type) || CrossIcon;

  return <Icon className={clsxm(sizeClass.get(size), className)} />;
};
