const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction ) {

		const embed = new MessageEmbed()
			.setTitle('Ping do Bot')
			.setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
			.setColor('RANDOM')
			.setDescription(`O ping do **BOT** é de :stopwatch:**${Math.round(interaction.client.ws.ping)}**ms!`)
			.setTimestamp(new Date())
		await interaction.reply({embeds:[embed]});
	},
};