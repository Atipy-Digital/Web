import clsxm from '@/lib/clsxm';

import { ArrowDownIcon } from './vectors/ArrowDown.icon';
import { ArrowLeftIcon } from './vectors/ArrowLeft.icon';
import { ArrowUpIcon } from './vectors/ArrowUp.icon';
import { CrossIcon } from './vectors/Cross.icon';
import { EnvelopIcon } from './vectors/Envelop.icon';
import { InstaIcon } from './vectors/Insta.icon';
import { IconProps } from './vectors/interface';
import { LinkedinIcon } from './vectors/Linkedin.icon';
import { MoonIcon } from './vectors/Moon.icon';
import { PhoneIcon } from './vectors/Phone.icon';
import { SunIcon } from './vectors/Sun.icon';
import { TwitterIcon } from './vectors/Twitter.icon';

export enum ATIPY_ICON {
  SUN = 'SUN',
  MOON = 'MOON',
  CROSS = 'CROSS',
  INSTA = 'INSTA',
  LINKEDIN = 'LINKEDIN',
  TWITTER = 'TWITTER',
  ARROW_DOWN = 'ARROW_DOWN',
  ARROW_UP = 'ARROW_UP',
  ARROW_LEFT = 'ARROW_LEFT',
  PHONE = 'PHONE',
  ENVELOP = 'ENVELOP',
}

type AtipyIconSize = 'xxs' | 'sm' | 'md' | 'mdx' | 'lg' | 'xl' | 'xxl' | 'full';

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
    ['xxl', 'w-[102px] h-[102px]'],
    ['full', 'w-full h-full'],
  ]);

  const icons = new Map<ATIPY_ICON, AtipyIconElement>([
    [ATIPY_ICON.SUN, SunIcon],
    [ATIPY_ICON.MOON, MoonIcon],
    [ATIPY_ICON.CROSS, CrossIcon],
    [ATIPY_ICON.INSTA, InstaIcon],
    [ATIPY_ICON.LINKEDIN, LinkedinIcon],
    [ATIPY_ICON.TWITTER, TwitterIcon],
    [ATIPY_ICON.ARROW_DOWN, ArrowDownIcon],
    [ATIPY_ICON.ARROW_UP, ArrowUpIcon],
    [ATIPY_ICON.ARROW_LEFT, ArrowLeftIcon],
    [ATIPY_ICON.PHONE, PhoneIcon],
    [ATIPY_ICON.ENVELOP, EnvelopIcon],
  ]);

  const Icon: AtipyIconElement = icons.get(type) || CrossIcon;

  return <Icon className={clsxm(sizeClass.get(size), className)} />;
};
