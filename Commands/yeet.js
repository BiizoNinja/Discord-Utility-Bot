const Discord = require ('discord.js')

module.exports = {
    name: 'yeet' ,
    description: 'yeet.. ?',
    execute(message, args) {
        
        const user = message.mentions.members.first();
        if(!user) return message.reply(" Please mention a user whom you want to yeet!")

        const YeetEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**YEETED!**')
        .setDescription(message.author.username  +   ` Yeeted `  +  `${user}`   )
        .setImage('https://media1.tenor.com/images/4b61af267c84ebc16befebe8853744ac/tenor.gif?itemid=16194362')

    message.channel.send(YeetEmbed) 

    }
}