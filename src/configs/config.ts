const config = {
  version: '1.0.0',
  name: 'express-ts',
  description: 'A minimal typescript & express starter',

  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 3000,

  clientCorsOrigins: {
    test: process.env.DEV_ORIGIN ?? '*',
    development: process.env.DEV_ORIGIN ?? '*',
    production: process.env.PROD_ORIGIN ?? 'none',
  },
};

export default config;
