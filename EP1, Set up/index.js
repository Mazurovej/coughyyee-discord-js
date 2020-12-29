const Discord = require('discord.js');

const bot = new Discord.Client();

const { token } = require('./config.json');

bot.on('ready', () => {
    console.log('Bot is ready!');
})


bot.login(token);