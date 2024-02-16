import { Events } from 'discord.js';
import { createGuild } from '../database/Guild.js';

export default {
  name: Events.GuildCreate,
  async execute(guild) {
    await createGuild(guild.id);
  },
};
