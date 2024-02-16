import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('language')
  .setNameLocalizations({
    pl: 'język',
    de: 'sprache'
  })
  .setDescription('Set the language you want the bot to use')
  .setDescriptionLocalizations({
    pl: 'Ustaw język, którego ma używać bot',
    de: 'Legen Sie die Sprache fest, die der Bot verwenden soll'
  })
  .addStringOption(option =>
    option
      .setName('language')
      .setNameLocalizations({
        pl: 'język',
        de: 'sprache'
      })
      .setDescription('Language you want the bot to use')
      .setDescriptionLocalizations({
        pl: 'Język, którego ma używać bot',
        de: 'Sprache, die der Bot verwenden soll'
      })
      .setRequired(true)
      .addChoices(
        { name: 'English', value: 'en' },
        { name: 'Polski', value: 'pl' },
        { name: 'Deutsch', value: 'de' }
      ));

export async function execute(interaction) {
  await interaction.reply('Pong!');
}
