const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const opcao = ['pedra', 'papel', 'tesoura'];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jokenpo')
        .setDescription('Jogo jokenpô')
        .addStringOption(option =>
            option
                .setName('jogada')
                .setDescription('Jogada Escolhida')
                .setRequired(true)
                .addChoice('Pedra', 'pedra')
                .addChoice('Papel', 'papel')
                .addChoice('Terousa', 'terousa')),

    async execute(interaction) {

        const result = opcao[Math.floor(Math.random() * opcao.length)];

        const jogada = interaction.options.getString('jogada');

        if (jogada === 'pedra') {
            if (result === 'papel') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :fist:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :hand_splayed:\n
                    <@${interaction.client.user.id}> **VENCEU!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;

            }
            if (result === 'tesoura') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :fist:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :v:\n
                    <@${interaction.user.id}> **VENCEU!!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }
            else {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :fist:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :fist:\n
                    **DEU EMPATE**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }

        }


        if (jogada === 'papel') {
            if (result === 'tesoura') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :hand_splayed:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :v:\n
                    <@${interaction.client.user.id}> **VENCEU!!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }
            if (result === 'pedra') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :hand_splayed:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :fist:\n
                    <@${interaction.user.id}> **VENCEU!!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }
            else {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :hand_splayed:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :hand_splayed:\n
                    **DEU EMPATE**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }

        }


        if (jogada === 'terousa') {
            if (result === 'pedra') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :v:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :fist:\n
                    <@${interaction.client.user.id}> **VENCEU!!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }
            if (result === 'papel') {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou: ${jogada.toUpperCase()}** :v:\n
                    <@${interaction.client.user.id}> **Jogou: ${result.toUpperCase()}** :hand_splayed:\n
                    <@${interaction.user.id}> **VENCEU!!**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }
            else {
                const embed = new MessageEmbed()
                    .setTitle('JOKENPÔ')
                    .setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL())
                    .setColor('RANDOM')
                    .setDescription(`<@${interaction.user.id}> **Jogou:${jogada.toUpperCase()}** :v:\n
                    <@${interaction.client.user.id}> **Jogou:${result.toUpperCase()}** :v:\n
                    **DEU EMPATE**`)
                    .setTimestamp(new Date())

                await interaction.reply({ embeds: [embed] });
                return;
            }

        }

    }
}