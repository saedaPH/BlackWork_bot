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

╭───────╯<:infooo:895154616046583829>╰───────╮
**__<:infooo:895154616046583829>┊Info Command__**

invite : support : about
ping : prefix : uptime
tinvites : sug : roleuser 

╭───────╯<:modeee:895155174115516456>╰───────╮
**__<:modeee:895155174115516456>┊Moderantor__**

ban : kick : clear
unban : lock : unlock

╭───────╯<:musicc:895157716031520848>╰───────╮
**__<:musicc:895157716031520848>┊Music Commands__**

play : skip : skipto
stop : volume{vol} : nowplaying
shuffle : search : resume
remove : queue : loop
lyrics : radio 

╭───────╯<:gifff:895160463799779388>╰───────╮
**__<:gifff:895160463799779388>┊Gif Commands__**

boy : girl : anime : couple
sad : cartoon : neon : rules
welcome

╭───────╯╰───────╮
**__🍁┊Photo Commands__**
pboy : pgirl : panime
pemoji : pwelcome : rules

╭───────╯╰───────╮
**__🎮┊Game Commands__**
coinfilp(cf) : slots(s) : fish(f)

╭───────╯╰───────╮
**__📋┊Economy Commands__**
daily(d) : cash(c) : work(w)
send : steal : shop(h)

╭───────╯<:Redbot:892922899571310642>╰───────╮
**__<:Redbot:892922899571310642>┊Click__**

<:kurdd:895161567409221702>┊[Kurd Designer](https://discord.gg/AaC2MCVupt) 
<:youuu:895167415774740521>┊[Youtube KD](https://youtube.com/channel/UCgtuqXzhuIqLgm912plcENQ)
---------------------
<:phh:895161682878423070>┊[Progress Home](https://discord.gg/5MWPYkyWsz)
<:youuu:895167415774740521>┊[Youtube PH](https://youtube.com/channel/UCHYQh0HXyYPO4FvGhwcTNiQ)
---------------------
<:invitee:895164789150593064>┊[Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000");
   message.react("<:Redbot:892922899571310642>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
