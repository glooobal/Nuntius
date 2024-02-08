import { SlashCommandBuilder } from 'discord.js';
import { addUserMessages } from '../modules/textStatistics.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

export async function execute(interaction) {
  await interaction.reply('Pong!');
  await addUserMessages(interaction.guildId, interaction.user.id);
}
