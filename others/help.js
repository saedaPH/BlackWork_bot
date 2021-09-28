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
    .setImage(`https://media.discordapp.net/attachments/859628813230932008/892472179202093096/standard_2.gif`)
    .setTitle(`**Red Help**`)
    .setDescription(`
**Info Command**
> invite, support, about
> ping, prefix, uptime
> tinvites, sug, roleuser 

**Music Commands**
> play, skip, skipto
> stop, volume, nowplaying
> shuffle, search, resume
> remove, queue, loop
> lyrics, radio 

**Gif Commands**
> boy, girl


Links
[Support](https://discord.gg/AaC2MCVupt)
[Invite](https://discord.com/api/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RED");
   message.react("🔺")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
