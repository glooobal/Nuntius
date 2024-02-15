import { Events } from 'discord.js';
import { addUserMessage } from '../database/User.js';

export default {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

    await addUserMessage(message.guild.id, message.author.id, 1);
  },
};
