const { MessageEmbed } = require('discord.js');
const { canal_mensagem } = require('../config.json');

module.exports = {
    name: 'guildMemberRemove',
    execute(member) {
        const embed = new MessageEmbed()
            .setTitle(member.user.username + " Esperamos que Volte Logo :sob:")
            .setAuthor(member.client.user.username, member.client.user.displayAvatarURL())
            .setImage(member.user.avatarURL())
            .setColor('RANDOM')
            .setDescription(':sob: Volte logo!!! :sob:')
            .setTimestamp(new Date())

        member.guild.channels.cache.get(canal_mensagem).send({ embeds: [embed] })
    },
};