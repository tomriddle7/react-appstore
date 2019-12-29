const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/rss', {
      target: 'https://rss.itunes.apple.com/',
      changeOrigin: true,
    })
  );
  app.use(
    proxy('/itunes', {
      target: 'http://itunes.apple.com/',
      changeOrigin: true,
    })
  );
};