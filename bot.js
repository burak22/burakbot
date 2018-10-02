const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 'b!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'BU') {
    msg.channel.send('RAK!');
  }
  
    if (msg.content === 'sa') {
    msg.channel.send('as miraderim :)');
  }
  
    if (msg.content === 'ping') {
    msg.channel.send(client.ping + 'ms');
  }
  
  if (msg.content === prefix + 'pp') {
    msg.reply(msg.author.avatarURL);
  }
  
});

client.login('NDk2Njg4MDg0ODUxNzUyOTYw.DpUQ8w.PowlW_GM9AXdW-85XNVsR8sMq9M');