const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://rss.itunes.apple.com',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/lookup', {
      target: 'https://itunes.apple.com',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/search', {
      target: 'https://itunes.apple.com',
      changeOrigin: true,
    })
  );
};