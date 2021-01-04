const Discord = require ('discord.js')

module.exports = {
    name: 'warn' ,
    description:'warns a user!',
    execute(message, args) {
        if(!(args[0])) return message.reply('This command is used to warn people!')
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("**You do not have the permission to do this!** :lock:")

       
        var user = message.mentions.users.first() 
        const guild = message.guild
        const reason = args.slice(1).join(' ')
        if(!user) {
            message.channel.send('Please specify a user!')
          }
        if( user = message.author) return message.reply('Why would you wanna warn your self?!')

     
        const WarnEmbed = new Discord.MessageEmbed()
        .setTitle('**The member has been successfully warned!**')
        .setDescription(`**${user.tag}** Has been warned for the reason: **${reason}**`)
        .setFooter('Please check your DMs')
        .setColor('#00ff00')
        .setTimestamp();
        message.channel.send(WarnEmbed);

        const DMWarnEmbed = new Discord.MessageEmbed()
        .setTitle( `**${user.tag}**`)
        .setDescription(`You have been warned in ${guild.name}.`)
        .setFooter('We highly recommend not doing this again!')
        .addFields(
            {name: `> **For the reason:** \`${reason} \`` , value: `> **By the Moderator:** ${message.author}`},
        )
        .setColor('#ff0000')
        .setTimestamp();
 
        user.send(DMWarnEmbed)
        

    
    }
  
}   