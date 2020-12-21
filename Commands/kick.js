const Discord = require('discord.js')
module.exports = {
    name: 'kick' ,
    description:'kicks a user!',
    execute(message, args) {
        if(!message.member.permissions.has('KICK_MEMBERS'))
        return message.reply('You don\'t have the permissions')
        
        const member = message.mentions.users.first();
    if(member){
        const guild = message.guild()
        const reason = args.slice(1).join(' ')
        const memberTarget = message.guild.members.cache.get(member.id)
        memberTarget.kick(); 

        let KickEmbed = new Discord.MessageEmbed()
        .setTitle('Member Kicked!')
        .setDescription(`${member} Kicked Successfully! For the reason ${reason}`)
        .setFooter('NOICE!'); 

        var DMKickEmbed = new Discord.MessageEmbed()
        .setTitle('Member Kicked!')
        .setDescription(`You Kicked From ${guild}. For the reason ${reason}`)
        .setFooter('Don\'t do this again boi')
        
        message.channel.send(KickEmbed); 
        user.send(DMKickEmbed);
        

    } else {
        message.channel.send('You coudn\'t kick that member!')

    }
        
    }
}