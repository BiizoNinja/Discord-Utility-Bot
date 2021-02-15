const Discord = require('discord.js');

module.exports= {
    name: 'kill',
    description: "Kills a user",
    execute(message, args){

        const user = message.mentions.members.first();
        if(!user) return message.reply(" Please mention a user whom you want to kill")

        const killEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**KILLED!**')
        .setDescription(message.author.username  +   ` killed `  +  `${user}`   )
        .setImage('https://media1.tenor.com/images/a0d13ec25f9774f155b6cd5ebf12a6c8/tenor.gif?itemid=18258403')
        message.channel.send(killEmbed) 

    }
}

