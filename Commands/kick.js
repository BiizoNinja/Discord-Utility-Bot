module.exports = {
    name: 'kick' ,
    description:'kicks a user!',
    execute(message, args) {

        if(!message.member.permissions.has('KICK_MEMBERS'))
         return message.reply('You don\'t have the permissions')
        

        const user = message.mentions.users.first(); 

        if(user) {
            const member = message.guild.member(user);

        if(member) {
            member.kick(`you were kicked from Biizo's Lab!`).then(()=> {
                message.reply(`Successfully Kicked **${user.tag}**`)
            }).catch(err =>{
                message.reply('I was enable to kick that user');
                console.log(err);
            });
        } else{
            message.reply('That user isn\'t in the server!')
            }

        } else {
            message.reply('You need to specify a user!')
        }




    }
}