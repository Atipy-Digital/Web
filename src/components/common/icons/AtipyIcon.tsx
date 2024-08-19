import React from 'react';

import clsxm from '@/lib/clsxm';

import { AboutIcon } from './vectors/About.icon';
import { ArrowCircleLeftIcon } from './vectors/ArrowCircleLeft.icon';
import { ArrowCircleRightIcon } from './vectors/ArrowCircleRight.icon';
import { ArrowDownIcon } from './vectors/ArrowDown.icon';
import { ArrowLeftIcon } from './vectors/ArrowLeft.icon';
import { ArrowRightIcon } from './vectors/ArrowRight.icon';
import { ArrowUpIcon } from './vectors/ArrowUp.icon';
import { ClockIcon } from './vectors/Clock.icon';
import { ConceptionIcon } from './vectors/Conception.icon';
import { CrossIcon } from './vectors/Cross.icon';
import { EnvelopIcon } from './vectors/Envelop.icon';
import { InstaIcon } from './vectors/Insta.icon';
import { IconProps as BaseIconProps } from './vectors/interface';
import { LinkedinIcon } from './vectors/Linkedin.icon';
import { MoonIcon } from './vectors/Moon.icon';
import { PartnersIcon } from './vectors/Partners.icon';
import { PhoneIcon } from './vectors/Phone.icon';
import { SunIcon } from './vectors/Sun.icon';
import { TribuIcon } from './vectors/Tribu.icon';
import { TwitterIcon } from './vectors/Twitter.icon';

interface IconProps extends BaseIconProps {
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

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
  ARROW_RIGHT = 'ARROW_RIGHT',
  CLOCK = 'CLOCK',
  ARROW_CIRCLE_LEFT = 'ARROW_CIRCLE_LEFT',
  ARROW_CIRCLE_RIGHT = 'ARROW_CIRCLE_RIGHT',
  TRIBU = 'TRIBU',
  PARTNERS = 'PARTNERS',
  CONCEPTION = 'CONCEPTION',
  ABOUT = 'ABOUT',
}

type AtipyIconSize =
  | 'xxs'
  | 'sm'
  | 'md'
  | 'mdx'
  | 'lg'
  | 'xl'
  | 'mxl'
  | 'xxl'
  | 'full';

type AtipyIconBaseProps = {
  size?: AtipyIconSize;
  type: ATIPY_ICON;
  className?: string;
  role?: string;
};

type AtipyIconInformative = AtipyIconBaseProps & {
  isInformative: true;
  isDecorative?: never;
};

type AtipyIconDecorative = AtipyIconBaseProps & {
  isDecorative: true;
  isInformative?: never;
};

export type AtipyIconProps = AtipyIconInformative | AtipyIconDecorative;

export type AtipyIconElement = (props: IconProps) => JSX.Element;

export const AtipyIcon = ({
  size = 'md',
  type,
  className,
  isInformative,
  isDecorative,
}: AtipyIconProps) => {
  const sizeClass = new Map<string, string>([
    ['xxs', 'w-[12px] h-[12px]'],
    ['sm', 'w-[18px] h-[18px]'],
    ['md', 'w-[24px] h-[24px]'],
    ['mdx', 'w-[28px] h-[28px]'],
    ['lg', 'w-[32px] h-[32px]'],
    ['xl', 'w-[40px] h-[40px]'],
    ['mxl', 'w-[56px] h-[56px]'],
    ['xxl', 'w-[102px] h-[102px]'],
    ['full', 'w-full h-full'],
  ]);

  const ariaLabels = new Map<ATIPY_ICON, string>([
    [ATIPY_ICON.SUN, 'Icône soleil'],
    [ATIPY_ICON.MOON, 'Icône lune'],
    [ATIPY_ICON.CROSS, 'Icône croix'],
    [ATIPY_ICON.INSTA, 'Icône Instagram'],
    [ATIPY_ICON.LINKEDIN, 'Icône LinkedIn'],
    [ATIPY_ICON.TWITTER, 'Icône Twitter'],
    [ATIPY_ICON.ARROW_DOWN, 'Flèche vers le bas'],
    [ATIPY_ICON.ARROW_UP, 'Haut de page'],
    [ATIPY_ICON.ARROW_LEFT, 'Flèche vers la gauche'],
    [ATIPY_ICON.PHONE, 'Icône téléphone'],
    [ATIPY_ICON.ENVELOP, 'Icône enveloppe'],
    [ATIPY_ICON.ARROW_RIGHT, 'Flèche vers la droite'],
    [ATIPY_ICON.CLOCK, 'Icône horloge'],
    [ATIPY_ICON.ARROW_CIRCLE_LEFT, 'Flèche circulaire vers la gauche'],
    [ATIPY_ICON.ARROW_CIRCLE_RIGHT, 'Flèche circulaire vers la droite'],
    [ATIPY_ICON.ABOUT, 'Icône à propos'],
    [ATIPY_ICON.PARTNERS, 'Icône partenaires'],
    [ATIPY_ICON.CONCEPTION, 'Icône conception'],
    [ATIPY_ICON.TRIBU, 'Icône tribu'],
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
    [ATIPY_ICON.ARROW_RIGHT, ArrowRightIcon],
    [ATIPY_ICON.CLOCK, ClockIcon],
    [ATIPY_ICON.ARROW_CIRCLE_LEFT, ArrowCircleLeftIcon],
    [ATIPY_ICON.ARROW_CIRCLE_RIGHT, ArrowCircleRightIcon],
    [ATIPY_ICON.ABOUT, AboutIcon],
    [ATIPY_ICON.PARTNERS, PartnersIcon],
    [ATIPY_ICON.CONCEPTION, ConceptionIcon],
    [ATIPY_ICON.TRIBU, TribuIcon],
  ]);

  const Icon: AtipyIconElement = icons.get(type) || CrossIcon;

  const iconProps: IconProps = {
    className: clsxm(sizeClass.get(size), className),
  };

  if (isInformative) {
    iconProps.role = 'img';
    iconProps['aria-label'] = ariaLabels.get(type) || 'icone atipy';
  } else if (isDecorative) {
    iconProps['aria-hidden'] = true;
  } else {
    iconProps['aria-hidden'] = true;
  }

  return <Icon {...iconProps} />;
};
