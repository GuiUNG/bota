var discord = require('discord.js')
var embed = new discord.RichEmbed()


exports.run = (client,message,args)=>{
  var embed = new discord.RichEmbed()

  .setColor("#9966CC")
  .setDescription("<a:hype:530122077173317663> https://discord.gg/KcdccpY")
  .setTitle("Discord do servidor!")
  message.channel.send(embed)

  };

module.exports.config = {
name: "anonovo",
aliases: ["massdm", "dm", "mass", "anuncioall"]
}