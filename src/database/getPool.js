import pkg from 'pg';
const { Pool } = pkg;

import 'dotenv/config';

export const getPool = () => {
  return new Pool({
    hostname: process.env.PG_HOSTNAME,
    username: process.env.PG_USERNAME,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
};
