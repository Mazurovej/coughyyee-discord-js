const Discord = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ['p', 'pp'],
    cooldown: 1000 * 5, //1 second === 1000ms
    description: "p",

    async run (bot, message, args) {
        message.reply('pong!')
    }
}