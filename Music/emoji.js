const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/762954136744099842/799811562427777063/Enes_Acar_15.gif", "https://media.discordapp.net/attachments/762954136744099842/800835842422734898/4270_Panda.gif", "https://media.discordapp.net/attachments/699520919328129055/803613686656401418/Haraketli_Emoji_261.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Emoji Gif")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-emoji','emoji-gif','gifemoji','emojigif'],

  permLevel: 0

};

exports.help = {

  name: 'emoji',

  description: 'rexuss',

  usage: 'emoji'

};
