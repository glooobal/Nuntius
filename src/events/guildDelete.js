import { Events } from 'discord.js';
import { deleteGuild } from '../database/guild/index.js';

export default {
  name: Events.GuildDelete,
  async execute(guild) {
    await deleteGuild(guild.id);
  },
};
