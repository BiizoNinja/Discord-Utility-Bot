module.exports = {
    name: 'ping' ,
    description:'Pong!',
    execute(message, args) {
        message.channel.send('yes, ping pong! <:meow:748376557248315486>')
       

    }
}