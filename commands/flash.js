const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
var count = 0

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flash')
        .setDescription('Flash Errado'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle('Flash Errados')
            .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail('https://media.giphy.com/media/XGOnPgiiqcwb1JEQJN/giphy.gif')
            .setDescription(`Ja foram **${count = count + 1}** Flash's Errados!`)
            .setTimestamp(new Date())

        await interaction.reply({ embeds: [embed] });
    },
};
