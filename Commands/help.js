const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help' ,
    description:'A help command!',
    execute(message, args) {
        const HelpEmbed = new MessageEmbed()

        .setTitle('Help Command!')
        .setDescription('Prefix is ">"')
        .addFields(
            {name: '**Fun Section**', value: '`ping` , `boop` , `wel`, `kill`, `keyboardsmash` , `yeet`, `rickroll`, `cakesmash`, `gamer` , `changappa`', inline: false} ,
            {name: '**Moderation Section**', value: '`Clear` , `Ban` , `Kick` `slowmode` `warn` ', inline: false},
            {name: '**Utility Section**', value: '`socials`, `deadchat`, `vote`, `membercount` , `userinfo` , `version` '}
        )
        .setColor('RANDOM')
        .setFooter('DM BiizoNinja#3337 for more info!')
        .setTimestamp();

        message.channel.send(HelpEmbed);
        
    }
}

