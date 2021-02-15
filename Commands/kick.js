module.exports = {
    name: 'kick' ,
    description:'kicks a user!',
    execute(message, args) {

        if(!message.member.permissions.has('KICK_MEMBERS'))
        return message.reply('You don\'t have the permissions')
    
       const user = message.mentions.users.first(); 

       if(!user) return message.channel.send(`Please specify a member to kick :x:`)
       if(!user == message.author) return message.channel.send(`You can kick yourself! :x:`)
       if(!user == message.guild.owner) return message.channel.send(`You Can't kick the owner can you? :x:`)
       
       if(user) {
           const member = message.guild.member(user);
       if(!member) {
           message.channel.send(`Make Sure the person you want to kick is in the server :x:`)
       }
       if(member) {
           member.kick().then(()=> {
               message.reply(`Successfully kicked **${user.tag}**`)
               //DM's the banned user
               member.send(`You were kicked from **${message.guild.name}**.`)
           }).catch(err =>{
               message.reply(`There was a problem kicking that user! \n **POSSIBLE ERROR** \n\`\`\` => I do not have a permission. \`\`\` `);
               console.log(err);
           });
        }
    }

   }
}
