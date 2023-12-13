const config = {
  version: '1.0.2',
  name: 'Node Express TS',
  description: 'Simple express-ts starter with file based routing',

  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 3000,

  clientCorsOrigins: {
    test: process.env.DEV_ORIGIN ?? '*',
    development: process.env.DEV_ORIGIN ?? '*',
    production: process.env.PROD_ORIGIN ?? 'none',
  },
};

export default config;
