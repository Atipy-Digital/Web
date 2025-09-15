import client from './client.js';
import layout from './layout/index.js';
import modals from './modals.js';
import pages from './pages/index.js';
import posts from './posts.js';
import project from './project.js';
import sub_design from './sub-design.js';
import sub_mobilites from './sub-mobilites.js';
import sub_formation from './sub-formation.js';
import sub_ingenierie from './sub-ingenierie.js';
import tags from './tags.js';
import display_expertises from './display_expertises/index.js';
import display_projects from './display_projects.js';

const collections = [
  layout,
  pages,
  project,
  client,
  tags,
  modals,
  posts,
  sub_design,
  sub_formation,
  sub_mobilites,
  sub_ingenierie,
  display_expertises,
  display_projects,
];

export default collections;
