const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('d4')
	.setDescription('Rola um Dado D4'),

    async execute( interaction ){

			const embed = new MessageEmbed()
            .setTitle(`**${interaction.user.username}** Rolou um D4 :game_die:`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail('https://media.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif')
            .setDescription(`:game_die: Rolou **${Math.floor(Math.random() * 4 + 1)}**`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed ]});
			
		}



    }