const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711490223996995/850307755612307476/35f4328caf4a9a02a8c7a7ae8d2ea5f1.jpg", "https://media.discordapp.net/attachments/608711490223996995/850272385629945876/kedi_2.png", "https://media.discordapp.net/attachments/608711490223996995/850117348823793664/sdfhsfdhsdfh.jpg", "https://media.discordapp.net/attachments/608711490223996995/850117332844150804/sdfhsdf.jpg", "https://media.discordapp.net/attachments/608711490223996995/850117328696115211/sdfhhdfhdf.jpg", "https://media.discordapp.net/attachments/608711490223996995/850117316473126912/sdfhdhshf.jpg", "https://media.discordapp.net/attachments/608711490223996995/850117308361605141/sdfgsdfhg.jpg", "https://media.discordapp.net/attachments/608711490223996995/850117194033659924/asdgasdg.jpg", "https://media.discordapp.net/attachments/608711490223996995/850059959924293642/IMG_20210518_002801.png", "https://media.discordapp.net/attachments/608711490223996995/849947227756953600/e4ce54d0f8a0d3972b82d1767b0e16fe.jpg", "https://media.discordapp.net/attachments/608711490223996995/849551763015204894/unknown_2.png", "https://media.discordapp.net/attachments/608711490223996995/849352196046061578/289efa2d92e57cc33d0ef5a3503d4973.jpg", "https://media.discordapp.net/attachments/608711490223996995/849352182921691197/3b62d8fd92af1c8890123da626320437.jpg", "https://media.discordapp.net/attachments/608711490223996995/849352127754403870/Selin_ile_Mooda_Dogru.jpg", "https://media.discordapp.net/attachments/608711490223996995/849305211100725278/46afb37bc8b7a57f15661a85c1d2b929.jpg", "https://media.discordapp.net/attachments/608711490223996995/849305210832814081/48831aea9b9babbdd022d44d294673c2.jpg", "https://media.discordapp.net/attachments/608711490223996995/849305177268682802/5a59ba31502c302e62fd102f72af9f36.jpg", "https://media.discordapp.net/attachments/608711490223996995/849305149943054336/3248da73b0fa7e5902519113c7c3fba2.jpg", "https://media.discordapp.net/attachments/608711490223996995/849305062659457024/6098c221cb9dba63fcd3d201c83ca2f3.jpg", "https://media.discordapp.net/attachments/608711490223996995/849304814475280514/847112846718271499.png", "https://media.discordapp.net/attachments/608711490223996995/848839503698591755/20210403_113802.jpg", "https://media.discordapp.net/attachments/608711490223996995/848827907728211988/cafec11b7eb9ced4bf24c6b4c667104c.jpg", "https://media.discordapp.net/attachments/608711490223996995/848827825658003476/f7a1176270f81dd1050f73a84f3424c1.jpg", "https://media.discordapp.net/attachments/608711490223996995/848250332844261416/9d971e9fe0f90eea739f9ea34f536ffb.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("animal Photos")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Panimal','panimal','pAnimal','photos-animal'],

  permLevel: 0

};

exports.help = {

  name: 'panimal',

  description: 'rexuss',

  usage: 'panimal'

};
