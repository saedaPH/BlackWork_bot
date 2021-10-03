client.on("message", message => {
    if (message.content.startsWith(PREFIX + "rules")) {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
     const blackjack = new Discord.MessageEmbed() 
         .setColor("BLACK")
         .setTitle("RULES")
         .setImage("https://media.discordapp.net/attachments/644265220449107968/646324616536784897/image0-16.png")
         .setFooter("RULES")
         .setDescription(`
**__Rules|یاسا__**
 
سەرتا سلاو تان لێبێ 
ئێمە وەک هەریەک لە سێرڤەرەکانی کە یاسای تایبەت بە خۆمان هەیە 
1. نابێت قسەی ناشیاو یان جنێوێکێک بدەی چونکە یەکسەر باندت ئەکەین
2. نابێت لە ڤۆیسی گشتی بۆت بەکاربێنن
3. ریکلام کردن بە هەموو شێوەک قەدەخەیە جگە لە گۆرینەوەی
4. نابێت بە هیچ شێوەیەک بێرێزی بە تاکێکی ستافەکە بکەیت
5. بێزارکردنی پلەیەر و میوان قەدەخەیە
6. باسکرنی سیاسەت بە هەموو شێوەیەک قەدەخەیە
7. شارچێتی قەدەخەیە
8. سوکایەتی کردن بە یەک قەدەخەیەو یەکسەر باندە
9. زۆر دووبارە کردنەوەی مەسج یاجود سپام کردن قەدەخەیە
لەگەل رێزماندا....!
   `)
   message.channel.send(blackjack)
 
   }
   });
