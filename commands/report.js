const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Usuario reportado:", `${rUser} with ID: ${rUser.id}`)
    .addField("Reportado por:", `${message.author} with ID: ${message.author.id}`)
    .addField("Canal:", message.channel)
    .addField("Hora:", message.createdAt)
    .addField("Razao:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    reportschannel.send(reportEmbed);
    message.channel.send(" <a:check:529165811542130688> | Seu Report Foi Enviado Diretamente Aos Administradores Do Servidor!");

}
 
module.exports.help = {
  name: "report"
}