const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png `)
    .setTitle(`**Panda Help**`)
    .setDescription(`
╭───────╯infooo╰───────╮
infooo┊Info Command
invite : support : about : ping : prefix : sug : roleuser 
╭───────╯modeee╰───────╮
modeee┊Moderantor

ban : kick : clear
unban : lock : unlock

╭───────╯musicc╰───────╮
musicc┊Music Commands

play : skip : skipto
stop : volume{vol} : nowplaying
shuffle : search : resume
remove : queue : loop
lyrics : radio 

╭───────╯gifff╰───────╮
gifff┊Gif Commands

boy : girl : anime : couple
sad : cartoon : neon : rules
welcome

╭───────╯╰───────╮
maple_leaf┊Photo Commands
pboy : pgirl : panime
pemoji : pwelcome : rules

╭───────╯Redbot╰───────╮
:Redbot:┊Click

:kurdd:┊Kurd Designer 
:youuu:┊Youtube KD
---------------------
phh┊Progress Home
youuu┊Youtube PH
---------------------
invitee┊Invite Bot
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
