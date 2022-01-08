// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

// Switch to true to see logs about proxy rewrite
const DEBUG = true;

module.exports = (app) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function defineProxy(apiUrl, reactUri) {
    console.log(`${apiUrl} -> ${reactUri}`);
    const proxyOptions = {
      target: apiUrl,
      changeOrigin: true,
      secure: false,
      pathRewrite: { [`^${reactUri}`]: '' },
      logLevel: DEBUG ? 'debug' : 'info',
    };
    app.use(createProxyMiddleware(reactUri, proxyOptions));
  }

  defineProxy(process.env.BFF_COLLABORATOR_SPACE_URL, '/api');
};
