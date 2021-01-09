const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'socials' ,
    description:'Displays BiizoNinja\'s Socials!',
    execute(message, args) {
        const SocialEmbed = new MessageEmbed()
        .setTitle('Socials Command!')
        .setDescription('haha yes socials')
        .addFields(
            {name: '**YouTube**', value: 'https://www.youtube.com/channel/UCboTvaABasieF8WMDOwizBg'} ,
            {name: '**Twitter**', value: 'https://twitter.com/BiizoNinja' , incline: 'true'} ,
            {name: '**Twitch**' , value: 'https://www.twitch.tv/BiizoNinja123'} ,
            {name: '**Reddit**' , value: 'https://www.reddit.com/r/BiizoNinja/', incline: 'true'} ,
            {name: '**Instagram**' , value: 'https://www.instagram.com/biizoninja/'}

        )
        .setFooter('Mind if you give a little follow? ')
        .setColor('#3399ff')
        .setTimestamp()

    message.channel.send(SocialEmbed);
       

    }
}
