module.exports= {
    name: 'ping',
    description: "see the bot's ping",
    execute(message, args){
        const Discord = require('discord.js');


        message.channel.send('Pinging...').then(pingMessage => {
            
            const start = message.createdTimestamp;
            const end = pingMessage.createdTimestamp;
            const subtraction = end - start;
            
            pingMessage.edit(`**PINGOO!** took \`${subtraction}ms.\``)
            })


    }
    
}
