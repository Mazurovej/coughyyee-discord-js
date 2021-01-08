const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "helpinfo",
    description: "more adv. help command",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor(0xD866BE)
        .setTitle('Bot Information')
        .addField('**Prefix**', 'Bots prefix is: `.`')
        .addField('**Pages**', '`1.Bot Information`, `2.Information`, `3.Fun`')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor(0xD86685)
        .setTitle('Information')
        .addField('`.ping`', 'Shows you the bots ping!')

        const fun = new Discord.MessageEmbed()
        .setColor(0xD88066)
        .setTitle('Fun')
        .addField('`.8ball`', 'Ask it a question and it will respond.....')
        .addField('`.howgay`', 'Tells you how gay someone is 👀')
        .addField('`.meme`', 'Sends a random meme from random meme redits!')
        .addField('`.rps`', 'Play rock paper scissors against the bot')
        .addField('`.tictactoe`', 'Play tictactoe against a specified user!')

        const pages = [
            BotInfo,
            Information,
            fun,
        ]

        const emojiList = ["⏪", "⏩"]

        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)
    }
}