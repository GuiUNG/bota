const Discord = require("discord.js");
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	    let user = message.mentions.users.first();
        if (message.mentions.users.first() === undefined) {
            message.channel.sendMessage('<:vpRedTick:257437215615877129> | O usu�rio mencionado n�o foi reconhecido pelo bot, ou voc� n�o mencionou ningu�m.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        } else {
            const whoIs = new Discord.RichEmbed();
            whoIs.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
            if (user.presence.game !== null) {
                if (user.presence.game.streaming) {
                    whoIs.setDescription('Transmitindo **' + user.presence.game.name + '**.');
                } else {
                    whoIs.setDescription('Jogando **' + user.presence.game.name + '**.');
                }
            }
            whoIs.addField('Nome de Usuario', user.username, true)
            whoIs.addField('ID', user.id, true);
            whoIs.setThumbnail(user.avatarURL);
            whoIs.addField('Status', user.presence.status, true);
            whoIs.addField('Conta criada', moment(user.createdAt).format('LL'), true);
            whoIs.setTimestamp();

            if (message.channel.type === 'dm') {
                message.channel.sendEmbed(whoIs);
            } else if (message.channel.permissionsFor(message.guild.member(bot.user)).hasPermission('EMBED_LINKS')) {
            	whoIs.addField('Entrou no server', moment(message.guild.member(user).joinedAt).format('LL'), true);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.channel.sendEmbed(whoIs);
            } else {
            	whoIs.addField('Entrou no server', moment(message.guild.member(user).joinedAt).format('LL'), true);
            	if (message.member.highestRole.color !== undefined) {
                whoIs.setColor(message.member.highestRole.color)
            }
                message.author.sendEmbed(whoIs);
                message.channel.sendMessage(':warning: | Eu n�o tenho a permiss�o `EMBED_LINKS` neste servidor. O resultado foi enviado por privado.');
            }
        }
}