import clsxm from '@/lib/clsxm';

import { IconProps } from './vectors/interface';
import { MoonIcon } from './vectors/Moon.icon';
import { SunIcon } from './vectors/Sun.icon';

export enum ATIPY_ICON {
  SUN = 'SUN',
  MOON = 'MOON',
}

type AtipyIconSize = 'xxs' | 'sm' | 'md' | 'lg' | 'xl';

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
    ['lg', 'w-[32px] h-[32px]'],
    ['xl', 'w-[40px] h-[40px]'],
  ]);

  const icons = new Map<ATIPY_ICON, AtipyIconElement>([
    [ATIPY_ICON.SUN, SunIcon],
    [ATIPY_ICON.MOON, MoonIcon],
  ]);

  const Icon: AtipyIconElement = icons.get(type) || SunIcon;

  return <Icon className={clsxm(sizeClass.get(size), className)} />;
};
