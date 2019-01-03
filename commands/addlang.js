/**
 * O Comando "addlang" adicionar� os cargos aos membros.
 */

const LanguageManager = require('../utils/languagemanager')
const langmgr = new LanguageManager()

exports.run = (client,message,args)=>{
    /** Verificamos se o n�mero de argumentos � v�lido. */
    if (args.length < 1) return message.reply(`?? Talvez isso possa ajud�-lo: \`\`\`${process.env.PREFIX}${module.exports.help.usage}\`\`\``)

    /** Ent�o verificamos os argumentos e instanciamos o cargo que queremos pelo nome. */
    let langs = langmgr.getLanguages()
    let langName = langs.map(l => l.toLowerCase()).find(l => l === args.join(' ').toLowerCase())
    let role = langName && message.guild.roles.find(r => r.name.toLowerCase() === langName)

    if (!role) {
      const emoji = message.guild.emojis.find('name', 'MEMBRO')
      message.react(emoji || '??')
      return message.reply(`?? Talvez isso possa ajud�-lo: \`\`\`${process.env.PREFIX}addlang [${langs.join('|')}]\`\`\``)
    }

    /** Logo ent�o atribuimos o cargo ao membro e mandamos uma mensagem como resposta
     * Caso o membro j� possua o cargo ent�o � enviada uma mensagem retornando.
     */
    if (!message.member.roles.has(role.id)) {
      message.member.addRole(role)
      return message.reply(`*Beep boop!@* Agora voc� possui o cargo **${role.name}**`)
    } else {
      return message.reply(`Voc� j� possui esse cargo!`)
    }
  },
});