const { execute } = require("./kick");
const Discord = require('discord.js')

module.exports = {
    name: 'gamerrate',
    description: 'gamer',
    execute(message,args) {

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const GamerEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.tag}'s Gamer r8`)
        .setDescription(`${user} is ${rate}% gamer`)
        .setTimestamp()
        .setFooter('nice')

        message.channel.send(GamerEmbed)
      }

    }
