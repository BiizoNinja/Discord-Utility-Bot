//Basic Variables!
const Discord = require('discord.js');
const Client = new Discord.Client() 
const Prefix = '>'; 
const fs = require('fs');
const { clearScreenDown } = require('readline');
const keyboardsmash = require('./Commands/keyboardsmash');


 // Command Handler
Client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
 
    Client.commands.set(command.name, command);
}

//Ready Event
Client.on('ready',  () => {

  Client.user.setActivity(`${Client.users.cache.size} members :O` , {
    type: 'WATCHING'
  })
  Client.on('guildMemberAdd', message => {

   const channel = member.guild.channels.cache.finds(channel => channel.name === "general")
   if(!channel) return;

   console.log('Channel not found!')
  
   channel.send(`New member has joined ${guild.name}. Welcome! ${member}`)
  })

  })
//Message Event!
Client.on('message', message => {
  if(!message.content.startsWith(Prefix) ||message.author.bot) return;

  const args = message.content.slice(Prefix.length).split(" ");
  const Command = args.shift().toLowerCase();
  if (!Command.guildOnly && message.channel.type === 'dm') return;


   if(Command === 'ping') {
    Client.commands.get('ping').execute(message, args);

   } else if(Command == 'wel') {
     Client.commands.get('wel').execute(message, args);

   } else if(Command == 'help') {
     Client.commands.get('help').execute(message, args);

   } else if(Command == 'clear') {
    Client.commands.get('clear').execute(message, args);

   } else if(Command == 'kick') {
     Client.commands.get('kick').execute(message, args); 

   } else if(Command == 'slowmode') {
     Client.commands.get('slowmode').execute(message, args);

   } else if(Command == 'kill') {
     Client.commands.get('kill').execute(message, args);

   } else if(Command == 'membercount') {
     Client.commands.get('membercount').execute(message, args);

   } 
});
//Second Message Event
Client.on('message', message => {
  if(!message.content.startsWith(Prefix) ||message.author.bot) return;

  const args = message.content.slice(Prefix.length).split(" ");
  const Command = args.shift().toLowerCase();

  if (!Command.guildOnly && message.channel.type === 'dm') return;
   
   if(Command == 'yeet') {
     Client.commands.get('yeet').execute(message, args);

   } else if(Command == 'mb') {
     Client.commands.get('membercount').execute(message, args);

   } else if(Command == 'rr') {
     Client.commands.get('rickroll').execute(message, args);

   } else if(Command == 'rickroll') {
     Client.commands.get('rickroll').execute(message, args);

   } else if(Command == 'lb') {
     Client.commands.get('lambsauce').execute(message, args);

   } else if(Command == 'lambsauce') {
    Client.commands.get('lambsauce').execute(message, args);

   } else if(Command == 'cakesmash') {
    Client.commands.get('cakesmash').execute(message, args);

   } else if(Command == 'cs') {
    Client.commands.get('cakesmash').execute(message, args);

   } else if(Command == 'ui') {
     Client.commands.get('userinfo').execute(message, args);

   } else if(Command == 'gamerrate') {
    Client.commands.get('gamerrate').execute(message, args);

   } else if(Command == 'userinfo') {
    Client.commands.get('userinfo').execute(message, args);
   }
  // Another Message Event
   Client.on('message', message => {
    if(!message.content.startsWith(Prefix) ||message.author.bot) return;
  
    const args = message.content.slice(Prefix.length).split(" ");
    const Command = args.shift().toLowerCase();
  
    if (!Command.guildOnly && message.channel.type === 'dm') return;
    
    if(Command == 'gamer') {
      Client.commands.get('gamerrate').execute(message, args)

    } else if(Command == 'eval') {
      Client.commands.get('eval').execute(message, args)

    } else if(Command == 'clyde') {
      Client.commands.get('clyde').execute(message, args)
    }

   })



});

//Logging-in to the bot
Client.login('BOT_TOKEN');