import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
export default defineConfig({
  site: host ? (host.startsWith('http') ? host : `https://${host}`) : 'http://localhost:4321',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
