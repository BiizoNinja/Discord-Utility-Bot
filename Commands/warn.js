const Discord = require ('discord.js')

module.exports = {
    name: 'warn' ,
    description:'warns a user!',
    execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("**You do not have the permission to do this!** :lock:")

       
        const user = message.mentions.users.first() || message.author;
        const guild = message.guild
        if(!args[1]) {
            return message.reply('**Please specify a reason!**')
        }
     
        let WarnEmbed = new Discord.MessageEmbed()
        .setTitle('**The member has been successfully warned!**')
        .setDescription(`**${user.tag}** Has been warned for the reason **${args[1]}**.`)
        .setFooter('Please check your DMs')
        .setColor('#00ff00')
        .setTimestamp();
        message.channel.send(WarnEmbed);

        let DMWarnEmbed = new Discord.MessageEmbed()
        .setTitle( `**${user.tag}**`)
        .setDescription(`You have been warned in ${guild.name}.`)
        .setFooter('We highly recommend not doing this again!')
        .addFields(
            {name: `> **For the reason:** \`${args[1]}\`` , value: `> **By the Moderator:** ${message.author}`},
        )
        .setColor('#ff0000')
        .setTimestamp();
 
        user.send(DMWarnEmbed)
        

    
    }
  
}   