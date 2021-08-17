const { MessageEmbed } = require('discord.js');
const { canal_mensagem } = require('../config.json');

module.exports = {
        name: 'guildMemberAdd',
        execute(member) {
                const embed = new MessageEmbed()
                        .setTitle(member.user.username + " Bem vindo(a) ao Inferno! :smiling_imp:")
                        .setAuthor(member.client.user.username, member.client.user.displayAvatarURL())
                        .setImage(member.user.avatarURL())
                        .setColor('RANDOM')
                        .setDescription(':smiling_imp: Criticancia do inicio ao Fim! :smiling_imp:')
                        .setTimestamp(new Date())

                member.guild.channels.cache.get(canal_mensagem).send({ embeds: [embed] })
        },
};