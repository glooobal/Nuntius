import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('user')
  .setDescription('View your or other user profile');

export async function execute(interaction) {}
