const Discord = require('discord.js');

const bot = new Discord.Client();


const { token } = require('./config.json');

const { readdirSync, read } = require('fs');

const { join } = require('path');


const config = require('./config.json');
bot.config = config;


bot.commands = new Discord.Collection();
//-----


const prefix = '.';
//this prefix can be what ever you want ;)

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);


//------------------------------------------------------------------------------
bot.on('ready', () => { //here is the changing status (bot.on('ready') part vv)
    console.log('Bot is ready!');

    const arrayOfStatus = [
        `Over ${bot.guilds.cache.size} servers!`,
        `Prefix is: '.'`,
        `This bot is for youtube!`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        //console.log(status);
        bot.user.setActivity(status, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 5000) //in ms
})
//------------------------------------------------------------------------------

bot.on("message", async message => {

    if(message.author.bot) return;   
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command)) return;


        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.error(error);
        }
    }
})

bot.login(token);