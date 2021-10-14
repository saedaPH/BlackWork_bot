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
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/859628813230932008/898146533567004673/20211014_125318.png`)
    .setTitle(`**Black BOT**`)
    .setDescription(`

**<:infoo:898268542607183872>┊𝗜𝗻𝗳𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
invite : support : about : ping : prefix : uptime : invites : sug : roleuser
**<:modee:898268564312694784>┊𝗠𝗼𝗱𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
ban : kick : clear : unban : lock : unlock
**<:giff:898268604859056168>┊𝗚𝗶𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
boy : girl : anime : couple : sad : cartoon : neon : emoji : smoking : billie : baby : animal
**<:phtoo:898267919065153576>┊ 𝗣𝗵𝗼𝘁𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
pboy: pgirl : panime : pneon : panimal : pcouple : psmoking : pbillie
**<:musicc:898267944109346868>┊𝗠𝘂𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
play : skip : stop : vol : search : resume : remove : queue : loop :radio
**__𝗖𝗹𝗶𝗰𝗸__**
[Support Server](https://discord.gg/AaC2MCVupt) : [Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("BLACK");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
