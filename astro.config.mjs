// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Despliegue en GitHub Pages (proyecto): el sitio vive en una subruta.
// Si más adelante usas un dominio propio, pon SITE al dominio y BASE a '/'.
const SITE_URL = 'https://alessandro468.github.io';
const BASE_PATH = '/paolo-skills';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [tailwind(), sitemap()],
});
