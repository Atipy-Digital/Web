import { FC, SVGProps } from 'react';

import coConception from './coConception.svg';
import conceptionGraphique from './conceptionGraphique.svg';
import formation from './formation.svg';
import identiteVisuelle from './identiteVisuelle.svg';
import langageClair from './langageClair.svg';
import mobilite from './mobilite.svg';
import signaletique from './signaletique.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  formation,
  coConception,
  conceptionGraphique,
  identiteVisuelle,
  langageClair,
  mobilite,
  signaletique,
};

export default icons;
