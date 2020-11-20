module.exports = {
    name: 'deadchat' ,
    description:'Pings for dead chat',
    execute(message, args) {
        if(!message.members.permissions.has('MANAGE_MESSAGES'))
        return message.reply('This command is locked for staff only!')
        
        message.channel.send('<@&763413779676397589> oh dead chat eh?')
    }
}
    
