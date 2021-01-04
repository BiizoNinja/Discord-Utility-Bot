const fetch = require('node-fetch')
const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'clyde',
    description: "CLYDE",
    execute(message, args) {
        const text = args.slice(0).join(" ")
        if (!text) return message.channel.send("you need some text there")
        fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
            .then((res) => res.json())
            .then((body) => {
                
                let embed = new MessageEmbed()
                    .setImage(body.message)
                    .setColor("GOLD")
                message.channel.send(embed)
            })
    }

}


