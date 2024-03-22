import sub_display_expertise_design from './sub-display-expertise-design.js';
import sub_display_expertise_digital from './sub-display-expertise-digital.js';
import sub_display_expertise_formation from './sub-display-expertise-formation.js';
import sub_display_expertise_ingenierie from './sub-display-expertise-ingenierie.js';

const display_expertises = {
  label: 'Affichage des expertises',
  name: 'display_expertises',
  files: [
    sub_display_expertise_design,
    sub_display_expertise_digital,
    sub_display_expertise_formation,
    sub_display_expertise_ingenierie,
  ],
};

export default display_expertises;
