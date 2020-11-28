const Discord = require('discord.js')

module.exports = {
    name: 'mute' ,
    description:'mutes people!',
    execute(message, args) {
        if(!message.member.roles.has('727076911926476822'))
        return message.reply('You don\'t have the permissions')
       
       const user = message.mentions.users.first(); 

        if(user) {
            const member = message.guild.member(user);

        if(member) {
            member.roles.add('739342937581682800') 
              return message.reply(`Successfully Muted ${user}`)

       
        }
        let DMMuteEmbed = new Discord.MessageEmbed()
        setTitle( `**${user.tag}**`)
         .setDescription(`You have been Muted! in ${guild.name}.`)
         .setFooter('We highly recommend not doing this again!')
         .addFields(
             {name: `> **For the reason:** \`${args[1]}  \`` , value: `> **By the Moderator:** ${message.author}`},
         )
         .setColor('#ff0000')
         .setTimestamp();
        
     user.send(DMMuteEmbed);

        }

    }
}