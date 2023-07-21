import { FC, SVGProps } from 'react';

import accessibiliteCadreBati from './accessibiliteCadreBati.svg';
import accessibiliteConceptionUniverselle from './accessibiliteConceptionUniverselle.svg';
import espacesPublics from './espacesPublics.svg';
import formation from './formation.svg';
import releveMultitechnique from './releveMultitechnique.svg';
import schemaDirecteurs from './schemaDirecteurs.svg';
import transportMobilite from './transportMobilite.svg';

const icons: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  accessibiliteCadreBati,
  accessibiliteConceptionUniverselle,
  espacesPublics,
  formation,
  releveMultitechnique,
  schemaDirecteurs,
  transportMobilite,
};

export default icons;
