const Discord = require ('discord.js')

module.exports = {
    name: 'warn' ,
    description:'warns a user!',
    execute(message, args) {
        if(!message.member.roles.cache.has('727076911926476822')) return message.reply("<:WokePepe:748831596785827870> You do not have the permission to do this!")

        const Reason = args[2]
       
        const user = message.mentions.users.first(); 

        if(user) {
            const Member = message.guild.member(user);

        if(args[20]) {
            if(member){
                message.channel.send(WarnEmbed)
            }
        }
        if(Member){
            let WarnEmbed = new Discord.MessageEmbed()
            .setTitle('MEMBER WARNED!')
            .setDescription(` <a:animated_check_2:780277155874603008> **${user.tag}** Has been warned for the reason ${args[2]} > ${args[20]}`)
            .setFooter('We highly recommend not to do this again!')
            .setColor('#00ccff')
            .setTimestamp();

            if(args[20]) {
                if(member){
                    message.channel.send(WarnEmbed)
                }
            }
                    
        } else if(!Reason) 
        return message.reply('<:down_vote:748383106444034050> Please provide a reason')
                                  
        }
       

    }
}
    