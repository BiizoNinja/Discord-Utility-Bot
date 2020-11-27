const Discord = require ('discord.js')

module.exports = {
    name: 'lambsauce' ,
    description: 'lambsauce',
    execute(message, args) {
        let lbembed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Gordon Be like`)
        .setImage('https://media.tenor.com/images/d187db2551ad03b70f9397079b9f5c16/tenor.gif')
        .setTimestamp()
             
    message.channel.send(lbembed)
    }

}