module.exports= {
    name: 'clear',
    description: "Clears messages",
    execute(message, args){
        const messageArray = message.content.split(' ');
    const args2 = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You don\'t have the permission to do this!');
    
    let deleteAmount;

    if (isNaN(args2[0]) || parseInt(args2[0]) <= 0) { return message.reply('Please specify some number of messages to delete, and make sure it is a **number**.') }

    if (parseInt(args2[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args2[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted **${deleteAmount}** Messages.`)
    }
}


