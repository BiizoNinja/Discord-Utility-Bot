const { description } = require("./kick");

module.exports = {
    name: 'userinfo',
    description: 'displays the user info of the users',
    execute(message, args) {
        const Discord = require('discord.js')
        const Author = message.author 
        const joinedDate = new Date(message.member.joinedTimestamp).toUTCString()
        var userEmbed = new Discord.MessageEmbed()
        .setTitle('Simple User Info!')
        .setDescription(`Here is your Info!`)
        .addFields(

            {name: ':information_source: User Id', value: `${Author.id}`, inline: true},
            {name: ':green_circle: Discord Status', value: `${Author.presence.status}`, inline: true},
            {name: ':calendar_spiral: Joined Discord At', value: `${Author.createdAt}`, inline: false},
            {name: ':calendar: Joined Server', value: `${joinedDate}`, inline: false},

       
        )
        .setFooter(`${Author.tag}`)
        .setTimestamp()
        .setColor('FFFF00');

    message.channel.send(userEmbed)
    }
    

}