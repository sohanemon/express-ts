import packageJson from '../../package.json' assert { type: 'json' };

const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,
  author: packageJson.author,

  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5000,

  clientCorsOrigins: {
    development: process.env.DEV_ORIGIN ?? '*',
    production: process.env.PROD_ORIGIN ?? 'none',
  },
};

export default config;
