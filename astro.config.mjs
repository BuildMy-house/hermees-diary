import sitemap from '@astrojs/sitemap';

export default {
  site: 'https://buildmy.house/diary',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    server: {
      port: 3000
    }
  }
};
