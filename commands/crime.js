const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('crime')
	.setDescription('Crime Cometido')
	.addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Crime Cometido pelo Usuario')
			.addUserOption(option => option.setName('target').setDescription('O Usuario'))),

    async execute( interaction ){
        if (interaction.options.getSubcommand() === 'user') {

			const user = interaction.options.getUser('target');

			const embed = new MessageEmbed()
            .setTitle('Crime em Andamento!!')
            .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setImage('https://media.giphy.com/media/j5br6C7ECI3WOalgzR/giphy.gif')
            .setDescription(`Um crime Foi Cometido por **<@${user.id}>!!**`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed ]});
			
		}



    }
}