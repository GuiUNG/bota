﻿const Discord = require("discord.js");
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	    const serverinfo = new Discord.RichEmbed();
        if (message.guild === null) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não parece estar executando o comando num servidor.');
        } else {
            if (message.guild.iconUrl === null) {
                serverinfo.setAuthor('Informações de ' + message.guild.name, 'https://cdn.discordapp.com/attachments/528790256707698698/530161357329530910/logo.png')
            } else {
                serverinfo.setAuthor('Informações de ' + message.guild.name, message.guild.iconURL);
                serverinfo.setThumbnail(message.guild.iconURL);
            }
            serverinfo.addField('Nome do server', message.guild.name, true);
            serverinfo.addField('Região do server', message.guild.region, true);
            serverinfo.addField('Dono', message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true);
            message.guild.fetchMembers();
            serverinfo.addField('Membros', message.guild.memberCount, true);
            serverinfo.addField('Cargos', message.guild.roles.size, true);
            membrosOn = ['']
    message.guild.members.forEach(member => {
    if(member.presence.status === 'online' || member.presence.status === 'idle' || member.presence.status === 'dnd' ) {
    membrosOn.push(member.user.username)
    }
    })  
            serverinfo.addField('Membros online', membrosOn.length - 1, true)
            serverinfo.setTimestamp();
            serverinfo.setFooter('Solicitado por ' + message.author.username, message.author.avatarURL);
            if (message.member.highestRole.color !== undefined) {
                serverinfo.setColor(message.member.highestRole.color);
            }
            if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(serverinfo);
            } else {
                message.author.sendEmbed(serverinfo);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        }
}