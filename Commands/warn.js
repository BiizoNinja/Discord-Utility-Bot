const Discord = require ('discord.js')

module.exports = {
    name: 'warn' ,
    description:'warns a user!',
    execute(message, args) {
        if(!message.member.roles.cache.has('727076911926476822')) return message.reply("<:WokePepe:748831596785827870> You do not have the permission to do this!")

        const Reason = message.content.split(' ').slice(2).join(" ") 

        
        const user = message.mentions.users.first(); 

        if(user) {
            const Member = message.guild.member(user);
        
        if(Member){
            const WarnEmbed = new Discord.MessageEmbed()
            .setTitle('MEMBER WARNED!')
            .setDescription(` <:up_vote:748383108465688637> ${user.tag} Has been warned for the reason ${Reason}`)
            .setFooter('We highly recommend not to do this again!')
            .setColor('#00ccff')
            .setThumbnail('https://media.discordapp.net/attachments/753832377054396448/779717997429260308/BiizoNinjas_Lab.png?width=461&height=461')
            .setTimestamp();

        message.channel.send(WarnEmbed);
                    
        } else(!Reason) 
        return message.reply('<:down_vote:748383106444034050> Please provide a reason')
                                  
        }
       

    }
}
    