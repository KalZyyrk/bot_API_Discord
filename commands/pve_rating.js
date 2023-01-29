const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pve_rating')
        .setDescription('Give ur RIO')
        .addStringOption(region =>
            region.setName('region')
                .setDescription('quel region tu appartien')
                .setRequired(true)
                .addChoices(
                    { name: 'Europe', value: 'eu' },
                    { name: 'Amerique', value: 'us' }
                )
        )
        .addStringOption(realms =>
            realms.setName('serveur')
                .setDescription('sur quell serveru est tu ?')
                .setRequired(true)
                .addChoices(
                    { name: 'Archimonde', value: 'archimonde' },
                    { name: 'Ysondre', value: 'ysondre' },
                    { name: 'Hyjal', value: 'hyjal' }
                )
        ),
    async execute(interaction) {
        const region = interaction.options.getString('region');
        const realms = interaction.options.getString('serveur');
        await interaction.reply('En Construction ' + region + realms)
    }
}