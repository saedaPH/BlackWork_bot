const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["inv"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setDescription(`

[{Invite Bot}](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot) **invite the bot.**
`)

  
   .setColor("BLACK");
   message.react("<:emoj")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
