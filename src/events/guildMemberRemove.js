import { Events } from 'discord.js';
import { deleteUser } from '../database/User.js';

export default {
  name: Events.GuildMemberRemove,
  async execute(member) {
    await deleteUser(member.guild.id, member.user.id);
  },
};
