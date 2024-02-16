import { Events } from 'discord.js';
import { getGuild } from '../database/Guild.js';

export default {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.info(`Connected to Discord as ${client.user.tag}`);
    // await getGuild('1073961931523764344');
    const guild = await client.guilds.fetch('1073961931523764344');
    client.emit('guildMemberAdd', await guild.members.fetch('614503044968742922'));
  },
};
