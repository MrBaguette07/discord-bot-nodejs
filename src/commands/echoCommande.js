const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Choix du mot à répéter')
                .setRequired(true)),
        async execute(interaction) {
            const input = interaction.options.getString("input")
            await interaction.reply(input)
        }
};