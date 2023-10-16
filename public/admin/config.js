import collections from './collections/index.js';

const config = {
  local_backend: true,
  backend: {
    name: 'git-gateway',
    branch: 'master',
  },
  load_config_file: false,
  media_folder: 'public/media',
  public_folder: '/media',
  slug: {
    encoding: 'ascii',
    clean_accents: true,
  },
  collections: collections,
};

window.CMS_CONFIGURATION = config;

CMS.init({ config });
