const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rss.applemarketingtools.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/lookup',
    createProxyMiddleware({
      target: 'https://itunes.apple.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/search',
    createProxyMiddleware({
      target: 'https://itunes.apple.com',
      changeOrigin: true,
    })
  );
};
