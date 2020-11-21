const Discord = require('discord.js')

module.exports = {
    name: 'vote' ,
    description:'Vote for Biizo\'s Lab',
    execute(message, args) {

        const VoteEmbed = new Discord.MessageEmbed
        .setTitle('Vote Command!')
        .setDescription('Oh so you wanna vote? Well you can vote by clicking on the link!')
        .addFields(
           {name: 'VOTE LINK' , value: 'https://top.gg/servers/727018252437291040/vote'}
        )
        .setImage('https://media.discordapp.net/attachments/753832377054396448/779717997429260308/BiizoNinjas_Lab.png?width=461&height=461')
        .setFooter('We really do appreciate votes!')
        .setColor('#0099ff')
        .setTimestamp();

    message.channel.send(VoteEmbed);
    }

}
    