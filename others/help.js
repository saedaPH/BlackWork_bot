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

**<:infooo:895154616046583829>┊𝗜𝗻𝗳𝗼 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**invite : support : about : ping : prefix : uptime : invites : sug : roleuser**
**<:modeee:895155174115516456>┊𝗠𝗼𝗱𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**ban : kick : clear : unban : lock : unlock**
**<:gifff:895160463799779388>┊𝗚𝗶𝗳 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**boy : girl : anime : couple : sad : cartoon : neon**
**<:musicc:895157716031520848>┊𝗠𝘂𝘀𝗶𝗰 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
**play : skip : stop : vol : search : resume : remove : queue : loop :radio**
**<:invitee:895164789150593064>┊𝗖𝗹𝗶𝗰𝗸**
<:kurdd:895161567409221702>┊[Kurd Designer](https://discord.gg/AaC2MCVupt) : <:youuu:895167415774740521>┊[Youtube KD](https://youtube.com/channel/UCgtuqXzhuIqLgm912plcENQ) / <:phh:895161682878423070>┊[Progress Home](https://discord.gg/5MWPYkyWsz) : <:youuu:895167415774740521>┊[Youtube PH](https://youtube.com/channel/UCHYQh0HXyYPO4FvGhwcTNiQ)
<:invitee:895164789150593064>┊[Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)

`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
