import { Events } from 'discord.js';
import { deleteGuild } from '../database/Guild.js';

export default {
  name: Events.GuildDelete,
  async execute(guild) {
    await deleteGuild(guild.id);
  },
};
