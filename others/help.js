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

**__<:infooo:895154616046583829>┊𝗜𝗻𝗳𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀__**
invite : support : about : ping : prefix : uptime : invites : sug : roleuser
**__<:modeee:895155174115516456>┊𝗠𝗼𝗱𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀__**
ban : kick : clear : unban : lock : unlock
**__<:gifff:895160463799779388>┊𝗚𝗶𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀__**
boy : girl : anime : couple : sad : cartoon : neon : emoji : smoking : billie : baby : animal
**__<:gifff:895160463799779388>┊ 𝗣𝗵𝗼𝘁𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀__**
pboy: pgirl : panime : pneon : panimal : pcouple : psmoking : pbillie
**__<:musicc:895157716031520848>┊𝗠𝘂𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀__**
play : skip : stop : vol : search : resume : remove : queue : loop :radio
**__<:invitee:895164789150593064>┊𝗖𝗹𝗶𝗰𝗸__**
<:kurdd:895161567409221702>┊[Kurd Designer](https://discord.gg/AaC2MCVupt) : <:youuu:895167415774740521>┊[Youtube KD](https://youtube.com/channel/UCgtuqXzhuIqLgm912plcENQ)
<:invitee:895164789150593064>┊[Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#F21313");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
