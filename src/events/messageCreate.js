import { Events } from 'discord.js';
import { addUserMessages } from '../database/text.js';

export default {
  name: Events.MessageCreate,
  async execute(message) {
    await addUserMessages(message.guild.id, message.author.id);
  },
};
