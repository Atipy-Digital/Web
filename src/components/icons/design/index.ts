import { FC, SVGProps } from 'react';

import arrowRight from './arrowRight.svg';
import formation from './formation.svg';
import geometry from './geometry.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  formation,
  arrowRight,
  geometry,
};

export default icons;
