module.exports = {
    name: 'ban' ,
    description:'Bans a user!',
    execute(message, args) {

        if(!message.member.permissions.has('BAN_MEMBERS'))
        return message.reply('You don\'t have the permissions')
       

       const user = message.mentions.users.first(); 

       if(user) {
           const member = message.guild.member(user);

       if(member) {
           member.ban(`you were Banned from Biizo's Lab!`).then(()=> {
               message.reply(`Successfully Banned **${user.tag}**`)
           }).catch(err =>{
               message.reply('I was enable to Ban that user');
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
      