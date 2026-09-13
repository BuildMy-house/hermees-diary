import sitemap from '@astrojs/sitemap';

export default {
  site: 'https://buildmy.house/diary',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    server: {
      port: 3000
    }
  }
};
