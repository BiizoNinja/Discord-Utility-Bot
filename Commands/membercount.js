module.exports = {
    name: 'membercount',
    description: "member",
    execute(message, args) {
        message.channel.send(`Alright bud, **${message.guild.name}** has **${message.guild.memberCount}** members.`);

    }
}


    