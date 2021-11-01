const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["text"];

let result = Math.floor((Math.random() * replies.length));
  
let textembed = new Discord.MessageEmbed()

.setTitle("text")
.setColor("BLACK")
.setFooter(Requested by: ${message.author.username}#${message.author.discriminator}, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(textembed);
"saeda"
};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['text,text-kurdish,t kurdish,tk'],

  permLevel: 0

};

exports.help = {

  name: 'text',

  description: 'rexuss',

  usage: 'text'

};
