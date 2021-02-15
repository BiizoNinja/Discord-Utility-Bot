const Discord = require ('discord.js')

module.exports = {
    name: 'cakesmash',
    description: "Smashes cake on the face of the specified user",
    execute(message, args) {
        const user = message.mentions.members.first() || message.author;
        if(!user || user == message.author) {
            message.reply('**Please Mention the user whom you want to cakesmash!**')
        } else {
            const cakembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Cakesmash Command!')
            .setDescription(message.author.username +  ` Cakesmashed ${user}!` )
            .setImage('https://media.giphy.com/media/3ohfFL4cVIjSTmqpsA/giphy.gif')
            .setTimestamp()
            message.channel.send(cakembed)
        }
    }
    
    
}