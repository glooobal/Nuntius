import { Events } from 'discord.js';
import { addUserMessages } from '../database/textStatistics/userMessages.js';

export default {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

    await addUserMessages(message.guild.id, message.author.id);
  },
};
