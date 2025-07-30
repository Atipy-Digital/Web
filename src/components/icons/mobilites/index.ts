import { FC, SVGProps } from 'react';

import carte from './carte.svg';
import engrenage from './engrenage.svg';
import fleche from './fleche.svg';
import soutienMessage from './soutienMessage.svg';
import transportCommun from './transportCommun.svg';
import velo from './velo.svg';
import veloFauteuille from './veloFauteuille.svg';
import veloSoutien from './veloSoutien.svg';
import veloTriple from './veloTriple.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  carte,
  engrenage,
  fleche,
  soutienMessage,
  transportCommun,
  velo,
  veloFauteuille,
  veloSoutien,
  veloTriple,
};

export default icons;
