import { Events } from 'discord.js';
<<<<<<< Updated upstream
import { addUserMessages } from '../database/textStatistics/userMessages.js';
=======
import { addUserMessages } from '../database/User.js';
>>>>>>> Stashed changes

export default {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

<<<<<<< Updated upstream
    await addUserMessages(message.guild.id, message.author.id);
=======
    await addUserMessages(message.guild.id, message.author.id, 1);
>>>>>>> Stashed changes
  },
};
