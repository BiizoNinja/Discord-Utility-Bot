const { DiscordAPIError } = require("discord.js");
const { description } = require("./help");
const Discord = require('discord.js');


module.exports = {
    name: 'pet',
    description:'Send!',
    execute (message, args) {

    message.channel.send(new Discord.MessageAttachment('/.PET_COMMAND/'+Math.floor(+Math.random()*30)`+.jpg`));

    }
}
