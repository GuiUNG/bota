var discord = require('discord.js')
var embed = new discord.RichEmbed()


exports.run = (client,message,args)=>{
  client.user.setPresence({ game: { name: 'Feliz Ano Novo!', type: 1, url: 'https://www.twitch.tv/thebigfamilydc'} })
  var embed = new discord.RichEmbed()

  .setColor("#9966CC")
  .setDescription("Agora Eu Estou Desejando Feliz Ano Novo A Todos!<a:check:529165811542130688>")
  .setTitle("Mudança De Status!")
  message.channel.send(embed)
    .setColor("#9966CC")
    .setDescription("Agora Eu Estou Transmitindo!<a:sucesso:529073005960232962>")
    .setTitle("Mudança De Status!")
    message.channel.send(embed)
  
  };

module.exports.config = {
name: "anonovo",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}