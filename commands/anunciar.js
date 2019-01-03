const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTimestamp()
    .setDescription("🚫 | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<a:sino:528238613943549954> **Comando:** --anuncio")
        .setColor("#ffffff")
        .setImage("")
        .setThumbnail("https://cdn.discordapp.com/attachments/528790256707698698/530161357329530910/logo.png")
        .addField("<a:sino:528238613943549954> Uso:", "\`\`!anuncio <mensagem>\`\`")
        .addField("<a:sino:528238613943549954> Exemplo:", "\`\`!anuncio Eu sou um bot`\`")
        .addField("<a:sino:528238613943549954> Alternativas:", "\`\`!anunciar\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
   


avatar = message.author.avatarURL
let say = args.join(" ")

const embed = new Discord.RichEmbed()

.setFooter(`Anunciado por: ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/528790256707698698/530161357329530910/logo.png")
.setColor("#ffffff")
.setDescription(`<a:sino:528238613943549954> **Anúncio** <a:sino:528238613943549954>\n\n${say}`)

message.delete().catch(O_o=>{});  
message.channel.send(embed);

}

module.exports.config = {
    name: "anunciar",
    aliases: ["anunciar", "anuncio"]
}