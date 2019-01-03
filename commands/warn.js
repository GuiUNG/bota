const Discord = require('discord.js');
const settings = require('../config.json');
exports.run = (client, message, args) => {
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).kickable) return message.reply("eu não posso kickar essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Warn")
   .addField("Usuário:",usuario.username)
   .addField("razão:", razão);

    message.mention.user.get(embed)
}