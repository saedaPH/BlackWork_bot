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
    .setImage(`https://images-ext-2.discordapp.net/external/pby5QgcN6vE0E8UocNROHlVKJoSD8W1jYCJSIAy9zk0/https/images-ext-2.discordapp.net/external/VFTa1xYCSei5FJyC7JD0yTs-1Qz66SBxOxI2GQx0VWo/https/media.discordapp.net/attachments/859628813230932008/892472179202093096/standard_2.gif`)
    .setTitle(`**RED BOT**`)
    .setDescription(`

**<:infooo:895154616046583829>┊𝗜𝗻𝗳𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**invite : support : about : ping : prefix : uptime : invites : sug : roleuser**
**<:modeee:895155174115516456>┊𝗠𝗼𝗱𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**ban : kick : clear : unban : lock : unlock**
**<:gifff:895160463799779388>┊𝗚𝗶𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**boy : girl : anime : couple : sad : cartoon : neon**
**<:musicc:895157716031520848>┊𝗠𝘂𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**play : skip : stop : vol : search : resume : remove : queue : loop :radio**
**<:invitee:895164789150593064>┊𝗖𝗹𝗶𝗰𝗸**
<:kurdd:895161567409221702>┊[Kurd Designer](https://discord.gg/AaC2MCVupt) : <:youuu:895167415774740521>┊[Youtube KD](https://youtube.com/channel/UCgtuqXzhuIqLgm912plcENQ)
<:invitee:895164789150593064>┊[Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#F21313");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
