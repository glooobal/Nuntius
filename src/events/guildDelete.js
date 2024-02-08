import { Events } from 'discord.js';
import { getClient } from '../database/getClient.js';

export default {
  name: Events.GuildDelete,
  async execute(guild) {
    const pgClient = await getClient();

    await pgClient.query(`DELETE FROM guilds WHERE guildId = '${guild.id}'`);
    await pgClient.query(`DROP TABLE "${guild.id}"`);

    await pgClient.end();
  },
};
