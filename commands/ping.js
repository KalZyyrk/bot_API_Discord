const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('../events/ready');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!')
    },
};