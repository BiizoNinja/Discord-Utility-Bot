const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help' ,
    description:'A help command!',
    execute(message, args) {
        const HelpEmbed = new MessageEmbed()

        .setTitle('Help Command!')
        .setDescription('Prefix is ">"')
        .addFields(
            {name: '**Fun Section**', value: '`ping`, `wel`, `kill`, `yeet`, `rickroll`, `cakesmash`, `gamer` ,', inline: true} ,
            {name: '**Moderation Section**', value: '`clear` , `ban` , `kick` ,`slowmode`  ', inline: true},
            {name: '**Utility Section**', value: ' `membercount` , `userinfo' }
        )
        .setColor('RANDOM')
        .setFooter('DM BiizoNinja#3337 for more info!')
        .setTimestamp();

        message.channel.send(HelpEmbed);
        
    }
}

