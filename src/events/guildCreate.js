import { Events } from 'discord.js';
import { getClient } from '../database/getClient.js';

export default {
  name: Events.GuildCreate,
  async execute(guild) {
    const pgClient = await getClient();

    await pgClient.query(`INSERT INTO guilds(guildId) VALUES('${guild.id}')`);

    await pgClient.query(
      `CREATE TABLE "${guild.id}" ( userId VARCHAR(64) PRIMARY KEY, totalMessages BIGINT )`
    );

    await pgClient.end();
  },
};
