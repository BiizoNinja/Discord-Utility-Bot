module.exports = {
    name: 'say',
    description: "says stuff",
    execute(message, args) {
        const content = args.slice(1).join(' ')


        if(!content) return 
        message.channel.send('What should i say smh...')

        if(content) {
            message.channel.send(content)
        }
    }
}