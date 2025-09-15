import { FC, SVGProps } from 'react';

import amoEtudeFaisabilite from './amoEtudeFaisabilite.svg';
import busAccessible from './busAccessible.svg';
import busArret from './busArret.svg';
import carte from './carte.svg';
import cartographieTemps from './cartographieTemps.svg';
import designEtDeploiement from './designEtDeploiement.svg';
import engrenage from './engrenage.svg';
import fleche from './fleche.svg';
import flecheDirectionnelle from './flecheDirectionnelle.svg';
import soutienMessage from './soutienMessage.svg';
import transportCommun from './transportCommun.svg';
import velo from './velo.svg';
import veloFauteuille from './veloFauteuille.svg';
import veloSoutien from './veloSoutien.svg';
import veloTriple from './veloTriple.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  amoEtudeFaisabilite,
  busAccessible,
  busArret,
  carte,
  cartographieTemps,
  designEtDeploiement,
  engrenage,
  fleche,
  flecheDirectionnelle,
  soutienMessage,
  transportCommun,
  velo,
  veloFauteuille,
  veloSoutien,
  veloTriple,
};

export default icons;
