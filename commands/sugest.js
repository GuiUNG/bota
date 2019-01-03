var discord = require('discord.js')

exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("Escreva sua sugestão")
        client.guilds.get("527364185605275649").channels.get("530229294010597394").send("<a:sino:528238613943549954>  Sugestão <a:sino:528238613943549954> \n \n"  + sugest + "\n \n Sugestão Enviada por <@" + message.author.id + "> ou " + message.author.tag + "")
        var embed = new discord.RichEmbed()
        .setColor("#000000")
        .setFooter('Sugestão Feita Por: ' + message.author.tag,message.author.avatarURL)
        message.channel.send(" <a:check:529165811542130688> | Sua Sugestão Foi Enviada Aos Administradores Do Servidor!")

        message.channel.send(embed)

}
