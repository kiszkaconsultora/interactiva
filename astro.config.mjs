import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://interactiv.ar',
  output: 'static',
  redirects: {
    '/gimnasio-de-innovacion': '/gimnasio',
    '/entrenamientos': '/gimnasio',
  },
});
