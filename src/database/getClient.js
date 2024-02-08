import pkg from 'pg';

const { Client } = pkg;

import 'dotenv/config';

export async function getClient() {
  const client = new Client({
    hostname: process.env.PG_HOSTNAME,
    username: process.env.PG_USERNAME,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });

  await client.connect();
  return client;
}
