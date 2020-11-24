const Discord = require ('discord.js')

module.exports = {
    name: 'keyboardsmash' ,
    description: 'smash keuboaed',
    execute(message, args) {
        
        let ksembed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('When your so angry, <a:pepeRAGE:780696356414685204>')
        .setImage('https://media.discordapp.net/attachments/753832377054396448/780687393266073603/unknown.png?width=570&height=49')
        .setTimestamp()

    message.channel.send(ksembed)
    }
}