const client = new Discord.Client(); 
const config = require("./config.json"); 
const fs = require("fs");
const express = require('express');
const Discord = require("discord.js"); 
const PORT = process.env.PORT || 5000

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on('guildMemberAdd', member => {
  // Localiza um canal de texto para enviar a msg
  const canal = member.guild.channels.find('name', 'entrada');
  // Caso não ache o canal não faz nada
  if (!canal) return;
  // Envia a msg
  canal.send(`<a:hype:530122077173317663> Seja bem vindo a Rede Noxus, ${member}`);
});



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client,message,args);
  } catch (err) {
    console.error(err)
                return console.log('Não encontrei este comando');
  }
 
});
 
client.login(config.token);
