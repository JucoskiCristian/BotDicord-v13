const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const msg1 = ['Deu ruim Aventureiro', 'Vishh, essa foi feia', 'Boa sorte da proxima vez!']
const msg20 = ['Boa jogada Aventureiro', 'Rolagem Perfeita', 'Vc pediu um 20??', 'Qué OTA?']

let resultAanterior = '';
let jogadorPassado = '';


module.exports = {
    data: new SlashCommandBuilder()
    .setName('d20')
	.setDescription('Rola um Dado D20'),

    async execute( interaction ){
        
        const result = Math.floor(Math.random() * 20 + 1);

        if (resultAanterior == 20 && jogadorPassado == interaction.user.username) {

            resultAanterior = result;
            jogadorPassado = interaction.user.username;

            const embed = new MessageEmbed()
            .setTitle(`**${interaction.user.username}** Rolou um D20 :game_die:`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
            .setColor('GOLD')
            .setImage('https://media.giphy.com/media/3oEjI5VtIhHvK37WYo/giphy.gif')
            .setDescription(`:game_die: Rolou: **${result}** \n**Melhor que isso só dois disso, NÃO PERA!**`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed]});

            return
            
        }if (result == 1) {

            resultAanterior = result;
            jogadorPassado = interaction.user.username;
            
            const embed = new MessageEmbed()
            .setTitle(`**${interaction.user.username}** Rolou um D20 :game_die:`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail('https://media.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif')
            .setDescription(`:game_die: Rolou: ***${result}*** \n***${msg1[Math.floor(Math.random() * msg1.length)]}***`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed]});
            
        }if (result == 20) {

            resultAanterior = result;
            jogadorPassado = interaction.user.username;

            const embed = new MessageEmbed()
            .setTitle(`**${interaction.user.username}** Rolou um D20 :game_die:`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail('https://media.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif')
            .setDescription(`:game_die: Rolou: **${result}** \n**${msg20[Math.floor(Math.random() * msg20.length)]}**`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed]});
            
        }if(result !== 1 && result !== 20){

            resultAanterior = result;
            jogadorPassado = interaction.user.username;

            const embed = new MessageEmbed()
            .setTitle(`**${interaction.user.username}** Rolou um D20 :game_die:`)
            .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail('https://media.giphy.com/media/3oriNPdeu2W1aelciY/giphy.gif')
            .setDescription(`:game_die: Rolou: **${result}**`)
            .setTimestamp(new Date())

			await interaction.reply({embeds: [embed]});
            
        }
			
		}
    }