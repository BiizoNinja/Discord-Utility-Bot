module.exports = {
    name: 'slowmode',
    description: "Changes the slowmode",
    execute(message, args) {
             
        if (!message.member.permissions.has("MANAGE_CHANNELS")) 
        return message.channel.send('You do not have the permission to do this!');
        

            if (isNaN(args[0])) return message.channel.send("Please set the slowmode to some **NUMBER**.");
            if (args[0] > 21600) return message.channel.send("I cannot set the slowmode above 6 hours (21600 seconds)");
            message.channel.setRateLimitPerUser(args[0])
            message.channel.send(`EPIC! set the slowmode to \`${args[0]}\` second(s)`)
    
    }

}
