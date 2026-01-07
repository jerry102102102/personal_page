import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://jerry102102102.github.io',
  base: isProd ? '/personal_page' : '/',
});
