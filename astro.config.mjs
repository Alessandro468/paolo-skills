// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Cambia esto por el dominio final cuando publiques.
const SITE_URL = 'https://maderadesign.example';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), sitemap()],
});
