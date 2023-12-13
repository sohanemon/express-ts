const config = {
  version: '1.0.0',
  name: 'express-ts',
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
