const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('./ping');
const wow_api = require('../assets/wow_api')

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
        )
        .addStringOption(username =>
            username.setName('username')
                .setDescription('give your username')
                .setRequired(true),
        ),
    async execute(interaction) {
        const region = interaction.options.getString('region');
        const realms = interaction.options.getString('serveur');
        const username = interaction.options.getString('username')
        const response = await wow_api.getPVEStatistic(region, realms, username)

        await interaction.reply(`La cote en MM+ de ${response.character.name} est de ${parseInt(response.current_mythic_rating.rating)} !`)
    }
}