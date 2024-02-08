import { getClient } from './getClient.js';

export async function createGuild(guildId) {
  const pgClient = await getClient();

  await pgClient.query(`INSERT INTO guilds(guildId) VALUES('${guildId}')`);

  await pgClient.query(
    `CREATE TABLE "${guildId}" ( userId VARCHAR(64) PRIMARY KEY, totalMessages BIGINT )`
  );

  await pgClient.end();
}

export async function deleteGuild(guildId) {
  const pgClient = await getClient();

  await pgClient.query(`DELETE FROM guilds WHERE guildId = '${guildId}'`);
  await pgClient.query(`DROP TABLE "${guildId}"`);

  await pgClient.end();
}
