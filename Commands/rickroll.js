const Discord = require ('discord.js')

module.exports = {
    name: 'rickroll' ,
    description: 'rick roll someone wink',
    execute(message, args) {
        
        const user = message.mentions.members.first(); 
    if(!user) return message.reply("<:down_vote:748383106444034050> Please mention a user whom you want to rickroll!")

       const rrembed = new Discord.MessageEmbed()

        .setColor('#FF0000')
        .setTitle(`RICK ROLL!`)
        .setDescription(message.author.tag    +     `RickRolled` +  ` ${user} ` )
        .setImage('https://media1.tenor.com/images/4324d537dbc06f422b34ae131c7b3e14/tenor.gif?itemid=7755460')
        .setTimestamp()

    message.channel.send(rrembed)
    }
}
