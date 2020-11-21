const Discord = require('discord.js');
const Client = new Discord.Client() 


const Prefix = '>'; 

const fs = require('fs');
const { clearScreenDown } = require('readline');
 
Client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
 
    Client.commands.set(command.name, command);
}

Client.on('ready', () => {

  Client.user.setActivity('mc with Biomeium!  ' , {
    type: 'PLAYING'
  })
    
   
  })




Client.on('message', message => {
  if(!message.content.startsWith(Prefix) ||message.author.bot) return;

  const args = message.content.slice(Prefix.length).split(" ");
  const Command = args.shift().toLowerCase();

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
   }

      
});




 



Client.login(process.env.token);
