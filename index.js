const Discord = require('discord.js');
const Client = new Discord.Client() 


const Prefix = '>'; 

const fs = require('fs');
const { clearScreenDown } = require('readline');
const keyboardsmash = require('./Commands/keyboardsmash');

 
Client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
 
    Client.commands.set(command.name, command);
}

Client.on('ready',  () => {

  Client.user.setActivity('BiizoNinja AFK! Sleeping... ' , {
    type: 'PLAYING'
  })
  Client.on('guildMemberAdd', message => {

   const channel = member.guild.channels.cache.finds(channel => channel.name === "general")
   if(!channel) return;

   console.log('Channel not found!')
  
   channel.send(`<:BL_wave:781730670594490379> New member has joined ${guild.name}. Welcome! ${member}`)
  })

  })

Client.on('message', message => {
  if(!message.content.startsWith(Prefix) ||message.author.bot) return;

  const args = message.content.slice(Prefix.length).split(" ");
  const Command = args.shift().toLowerCase();
  if (!Command.guildOnly && message.channel.type === 'dm') return;


   if(Command === 'ping') {
    Client.commands.get('ping').execute(message, args);
       
   } else if(Command == 'boop') {
     Client.commands.get('boop').execute(message, args);

   } else if(Command == 'wel') {
     Client.commands.get('wel').execute(message, args);

   } else if(Command == 'help') {
     Client.commands.get('help').execute(message, args);

   } else if(Command == 'clear') {
    Client.commands.get('clear').execute(message, args);

   } else if(Command == 'socials') {
     Client.commands.get('socials').execute(message, args);

   } else if(Command == 'deadchat') {
     Client.commands.get('deadchat').execute(message, args);

   } else if(Command == 'pet') {
     Client.commands.get('pet').execute(message, args);

   } else if(Command == 'kick') {
     Client.commands.get('kick').execute(message, args); 

   } else if(Command == 'ban') {
     Client.commands.get('ban').execute(message, args);

   } else if(Command =='vote') {
     Client.commands.get('vote').execute(message, args);

   } else if(Command == 'slowmode') {
     Client.commands.get('slowmode').execute(message, args);

   } else if (Command == 'warn') {
    Client.commands.get('warn').execute(message, args);

   } else if(Command == 'kill') {
     Client.commands.get('kill').execute(message, args);

   } else if(Command == 'kbs') {
     Client.commands.get('keyboardsmash').execute(message, args);

   } else if(Command == 'keyboardsmash') {
     Client.commands.get('keyboardsmash').execute(message, args);

   }  else if(Command == 'welcome') {
     Client.commands.get('wel').execute(message, args);

   } else if(Command == 'w') {
    Client.commands.get('warn').execute(message, args);

   } else if(Command == 'membercount') {
     Client.commands.get('membercount').execute(message, args);

   } 
});

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

   } else if(Command == 'mute') {
     Client.commands.get('mute').execute(message, args);

   } else if(Command == 'lb') {
     Client.commands.get('lambsauce').execute(message, args);

   } else if(Command == 'lambsauce') {
    Client.commands.get('lambsauce').execute(message, args);

   } else if(Command == 'cakesmash') {
    Client.commands.get('cakesmash').execute(message, args);

   } else if(Command == 'cs') {
    Client.commands.get('cakesmash').execute(message, args);
   }

});


//Client.login(process.env.token)
Client.login('NzczODk5MDIzNTI5OTM0ODY4.X6P7oQ.k2k3qPuVMM2oYEboD-MKPCxOHrs');