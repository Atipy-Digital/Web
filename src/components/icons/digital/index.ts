import { FC, SVGProps } from 'react';

import accessibiliteNumerique from './accessibiliteNumerique.svg';
import applicationMobile from './applicationMobile.svg';
import conceptionExpertise from './conceptionExpertise.svg';
import formation from './formation.svg';
import solutionWeb from './solutionWeb.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  formation,
  solutionWeb,
  conceptionExpertise,
  applicationMobile,
  accessibiliteNumerique,
};

export default icons;
