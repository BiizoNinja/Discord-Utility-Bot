const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help' ,
    description:'A help command!',
    execute(message, args) {
        const HelpEmbed = new MessageEmbed()

        .setTitle('Help Command!')
        .setDescription('Prefix is ">"')
        .addFields(
            {name: '**Fun Section**', value: '`ping` , `boop` , `wel`'} ,
            {name: '**Moderation Section**', value: '`Clear` , `Ban` , `Kick`'},
            {name: '**Utility Section**', value: '`socials`'}
        )
        .setColor('#3399ff')
        .setFooter('DM BiizoNinja#3337 for more info!')
        .setTimestamp();

        message.channel.send(HelpEmbed);
        
    }
}
