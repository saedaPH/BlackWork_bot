const Discord = require(`discord.js`);
const { Client, Collection, MessageEmbed,MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { TOKEN, PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: `` , partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login("ODkyMDYxMTQ4Mjg1ODk0NzM2.YVHarw.wYHgaajCK82Zdmyj58tAAqt33zs");
client.commands = new Collection();
client.setMaxListeners(0);
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

/////////////////////////

/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "ooo")) {
    let girl = [

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "panimal")) {
    let girl = [
"https://media.discordapp.net/attachments/608711490223996995/850307755612307476/35f4328caf4a9a02a8c7a7ae8d2ea5f1.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850272385629945876/kedi_2.png", 
"https://media.discordapp.net/attachments/608711490223996995/850117348823793664/sdfhsfdhsdfh.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850117332844150804/sdfhsdf.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850117328696115211/sdfhhdfhdf.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850117316473126912/sdfhdhshf.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850117308361605141/sdfgsdfhg.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850117194033659924/asdgasdg.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/850059959924293642/IMG_20210518_002801.png", 
"https://media.discordapp.net/attachments/608711490223996995/849947227756953600/e4ce54d0f8a0d3972b82d1767b0e16fe.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849551763015204894/unknown_2.png", 
"https://media.discordapp.net/attachments/608711490223996995/849352196046061578/289efa2d92e57cc33d0ef5a3503d4973.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849352182921691197/3b62d8fd92af1c8890123da626320437.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849352127754403870/Selin_ile_Mooda_Dogru.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849305211100725278/46afb37bc8b7a57f15661a85c1d2b929.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849305210832814081/48831aea9b9babbdd022d44d294673c2.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849305177268682802/5a59ba31502c302e62fd102f72af9f36.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849305149943054336/3248da73b0fa7e5902519113c7c3fba2.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849305062659457024/6098c221cb9dba63fcd3d201c83ca2f3.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/849304814475280514/847112846718271499.png", 
"https://media.discordapp.net/attachments/608711490223996995/848839503698591755/20210403_113802.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/848827907728211988/cafec11b7eb9ced4bf24c6b4c667104c.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/848827825658003476/f7a1176270f81dd1050f73a84f3424c1.jpg", 
"https://media.discordapp.net/attachments/608711490223996995/848250332844261416/9d971e9fe0f90eea739f9ea34f536ffb.jpg"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} PHOTO ANIMAL `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "animal")) {
    let girl = [
"https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif",
"https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ANIMAL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "baby")) {
    let girl = [
"https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif",
"https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BABY GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "billie")) {
    let girl = [
"https://media.discordapp.net/attachments/615977432180326430/850374760072609792/a_983f87d59738d4bc602739e416918840.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374718090510376/image0-3.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374647265493002/image0-4.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374608266985472/3fc2ebaee8b9e93b584148de51e0cb4a.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374565238538260/---.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374540508135444/rexabillie_20.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374498460237855/7865b801c13fd962b2abd80f505485e7.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374391333650452/image0-1.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374361394839582/sdlsdl.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374308450140201/image0-2.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374159271329812/image3.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374111427297280/image1.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374069214773308/image0-7.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374057412657192/image0-9.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850374042343309372/image0-10.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850373945425002556/image0-13.gif", 
"https://media.discordapp.net/attachments/615977432180326430/850296050522390538/image0-1.gif", 
"https://media.discordapp.net/attachments/615977432180326430/848873775620816906/pp.gif", 
"https://media.discordapp.net/attachments/615977432180326430/848873554878922753/pp.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BILLIE GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "smoking")) {
    let girl = [
"https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif",
"https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif",
"https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567125580480582/Zenard_91.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827567091674513408/sadsa.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827566756641636382/image2.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827566694846562324/ENES_ACAR_GIF_134.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827501391060140052/knassy1_6.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827471223964827668/4dsr5.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827471039629361172/20210121_175434.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827045264979656764/6.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/827044744408072223/image0-123.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826498012410019930/a_88e5b4c03a185d0d03f84039036da416.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826498127895986186/KAPTANman_48.gif", 
"https://cdn.discordapp.com/attachments/755893014915711047/826497192579170344/a_9b2ed05b287fc58858272fa4294a293b-1.gif"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} SMOKING GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "emoji")) {
    let girl = [
"https://media.discordapp.net/attachments/790836700561670145/790836721896914954/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836726574350356/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836731821686784/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836737018036264/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836743762083851/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836753241866240/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836747260395540/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836766281564181/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836771385770004/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836775714029598/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836781654343710/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836806860931072/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836828197617714/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836833763852338/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836843235115008/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836867490250772/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836871882211338/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836880785801236/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836884304691230/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836897010286652/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836892903669770/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836914688098344/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/790836923442266112/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250869890056232/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250873741213716/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250879948783646/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250901562163220/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250931563495444/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791250998936076288/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/791251020117573642/image1.gif", 
"https://media.discordapp.net/attachments/790836700561670145/799353223554269214/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/799353104881025054/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857455426207754/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857435550318602/image2.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857374413357086/image4.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794273933838909440/image0.gif", 
"https://media.discordapp.net/attachments/790836700561670145/794857297888673803/image0.gif"

    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} EMOJI GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

/////////////////////////
client.on("message", msg => {
if(msg.content.startsWith(PREFIX + "clear")) {
 let args = msg.content.split(" ").slice(1);
 if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}})

///////////////////

//this fires when the BOT STARTS DO NOT TOUCH

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOY GIFS  `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let man = [
      "https://media.discordapp.net/attachments/608711485849337856/855998757451989002/image0-2.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856002084461084682/image0-4.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856046302302044190/RAGE.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064006099959838/sword_in.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856064373285322772/brur.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856078080513671218/main-qimg-9b85288a288ad40533d86370edc2f861.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856082677124038706/243b546d229fecd75d49dfa96fa7d3af.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083458426273852/1359536E-4B2C-46FD-B4C0-991DEDD90DB6.gif",
      "https://media.discordapp.net/attachments/608711485849337856/856083601376673812/tumblr_n8afdsLdj31tgrxjfo1_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855944540519399454/a_ebfe24c4bd0d9ccfdfbb26e9c211616b.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855941510633619496/a_5079b0989b9b5957008426c949ada083.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855934815643762718/SPOILER_bcfd0735832eb9c8908fb09b3bbd76f7.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924849976541214/a_2b58061e423d0ed65d2e1a3e77ed61f8.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924705320239114/Anime_PP_Gif_64.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924615573143582/Anime_PP_Gif_46.gif",
      "https://media.discordapp.net/attachments/608711485849337856/855924558700085248/a_3bf21d37deefcf4cd1dcab780aab846c.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} ANIME GIFS `,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} Gif Couple `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} **SAD GIFS**`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cartoon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755169627872428134/855635705242058752/g0yPLFTYpr283dUJBs.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855792117719498752/video0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855557742349516800/a_b027a915823dbd68a6648b5349421ae6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556838929203200/p_22.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556777230860288/Miraculous_Love_Square.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855556717030014976/Chat_noir_Adrien_one_shots_-_Date_Night_Chat_Noir_X_Reader.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377737668624384/a_f2755cac40daeae8d10949c7dd36b90e.gif",
      "https://media.discordapp.net/attachments/755169627872428134/855377707852365844/49e7d6354158e18ba31dbc337d5c7e66.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854647156845445140/image0-1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854446592169082940/1.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854406402884501534/a_6f8657f88ea0baf2cb1535e0e7d1099c.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249305011257364/21.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249288825831455/17.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249260668289044/12.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249216691535882/6.gif",
      "https://media.discordapp.net/attachments/755169627872428134/854249208872435732/4.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} CARTOON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("");
  let embed = new MessageEmbed().setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✔️ Join Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});


client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("");
  let embed = new MessageEmbed()
  .setColor("#146DF6")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `${guild.owner}`)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

const channelid = "863406772143652865"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "neon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755890505681731714/856207944953233439/a_08ca790f778a7ee65184020eb2c85124.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856212748844007454/image4.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856203154143313970/hhhh.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856200984888082472/Comp_105.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856145244059729920/uurekzneon_17.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856138999771693076/a_0163926dade85d15a4c7e9f90bd9905c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856137212385951744/image0.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856134635972591636/Comp_22.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856094705813422090/a_a46b7692563509a4a7332280f8aed01f-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856066337788133377/neon_1-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856039171788767292/sol._of.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856034861047480320/Nice_gif_pfp.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855995485688954900/a_4f85b11851dd2fd40c275af63e24ca9c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855901403768029255/Gif8.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855894776896159804/a_622822eb42bf3c49c83f342290a304b6.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855841642979786752/826380519012565012.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855788419716218890/image0.gif",
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} NEON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});


client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(PREFIX.length);
  if (command === "g") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit('    **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 1000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 2000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 3000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554> <a:emoji_56:859017377261420554>                                                                      `|         ||         |` ');
      }, 4000);
      setTimeout(function() {
        msg.edit('  **`___SLOTS___  `**                                                    <:slots2:421472583347732511> <:slots1:421472583410515969> <:slots3:421472582924238869>                                                                               `|         ||         |` ');
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});

client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "roleuser")) { 
 
let member_r = message.mentions.members.first() || message.member,
  user = member_r.user;
let bawan= new Discord.MessageEmbed()
  .addField('this member have this Roles:', member_r.roles.cache.map(r => `${r}`).join(', '), true)
 
message.channel.send(bawan)
}})

let Prefix = "+"; 

client.on("message", async message => {
let prefix2 = await db.fetch(`prefix_${message.guild.id}`);
if (prefix2 === null) prefix2 = Prefix;
const prefix = prefix2;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd === "prefix" || cmd === "setprefix") {
if (!message.guild) return;
if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
return message.reply("**- You Don't Have `ADMINISTRATOR` Permission.**");
if (!args[0]) return message.channel.send(`**- Please tell me what a prefix !!**`);
if (args[0].length > 3) {
  return message.channel.send("**Please tell me prefix under 3 numbers!!**")
}
db.set(`prefix_${message.guild.id}`, args[0]);
message.channel.send(`**✅ Done, Set New Prefix \`[${args[0]}]\` From Your Server.**`);
}
if (cmd === "test") { // كود test للتجربة
message.reply("**Set Prefix Working ✅**")
}
});

 client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "sug")) {
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
 
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
 
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
 
 
    let embed = new Discord.MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#F21313")
    .setDescription(args.join(" "))
    .setTimestamp()
 
 
    channel.send(embed).then(m => {
      m.react("✔️")
      m.react("❌")
    })
 
 
 
    message.channel.send("Sended Your Suggestion to  Suggestions Channel")
 
  }
})

client.on('message', msg => {
 if (msg.content.startsWith(PREFIX + 'senddm')) {
 
   if(!msg.member.hasPermission('ADMINISTRATOR')) return
   let args = msg.content.split(' ').slice(1)
 
 
      if (!args[0]) return msg.channel.send(``)
      if (!args[1]) return msg.channel.send(``)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.channel.send()
      let alphaEmbed = new Discord.MessageEmbed()
      .setTitle('bawan is here')
      .setDescription(args.join(" "))
 
      client.users.cache.get(`${alpha.id}`).send(alphaEmbed)
      msg.channel.send('```DONE```')
    }
});



client.on(`ready`, () => {	
//////////////

////////
   
   ///////////////////////////////
    ////////////IFCHEMPTY//////////
        //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
        setInterval(() => { 
          let member;
        client.guilds.cache.forEach(async guild =>{
        await delay(15);
          member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
        //if not connected
          if(!member.voice.channel)
          return;
        //if alone 
        if (member.voice.channel.members.size === 1) 
        { return member.voice.channel.leave(); }
      });
      
    client.user.setActivity(`Type: ${PREFIX}help - Black Work`, { type: "PLAYING"});
    client.user.setActivity(`Type: ${PREFIX}help | ${client.guilds.cache.size} Server,Users ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)},`, { type: "PLAYING"});
   
  
      }, (5000));
      ////////////////////////////////
      ////////////////////////////////
    figlet.text(`${client.user.username} ready!`, function (err, data) {
      if (err) {
          console.log('Something went wrong');
          console.dir(err);
      }
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
      console.log(data)
      console.log(`═════════════════════════════════════════════════════════════════════════════`);
    })
   
});
//DO NOT TOUCH
//FOLDERS:
//Admin custommsg data FUN General Music NSFW others
commandFiles = readdirSync(join(__dirname, `Music`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `Music`, `${file}`));
  client.commands.set(command.name, command);
}
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
//COMMANDS //DO NOT TOUCH
client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("RANDOM").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({dynamic:true})));
  } 


//An about announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}about`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#F21313")
    .setAuthor("About Black Work", "https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png")
    .setThumbnail(`https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png `)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`

[{Support}](https://discord.gg/AaC2MCVupt)

[{Invite}](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)

**{Owner Bot}** :
Owner/<@697626887899447417>

**{Set Status}** :
Online

**{Admin Bot}** :
Admin/<@820702223847129138>

**{Prefix Bot}** :
*

`)

    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  } 

//An suuport announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}support`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#F21313")
    .setDescription (`
{Links}

[{Support}](https://discord.gg/AaC2MCVupt)
-
[{Invite}](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)`)
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setImage(``)
    .setTitle(`**{Support Bot}**`) 
    .setThumbnail(``)
    .setTimestamp()
    
    //send the Message
    message.channel.send(embed)
    message.react("<:emoji_4:822203026776391711>")
  }

  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("#F21313")
    .setDescription(saymsg)
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }


//command Handler DO NOT TOUCH
 const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
 if (!prefixRegex.test(message.content)) return;
 const [, matchedPrefix] = message.content.match(prefixRegex);
 const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
 const commandName = args.shift().toLowerCase();
 const command =
   client.commands.get(commandName) ||
   client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
 if (!command) return;
 if (!cooldowns.has(command.name)) {
   cooldowns.set(command.name, new Collection());
 }
 const now = Date.now();
 const timestamps = cooldowns.get(command.name);
 const cooldownAmount = (command.cooldown || 1) * 1000;
 if (timestamps.has(message.author.id)) {
   const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
   if (now < expirationTime) {
     const timeLeft = (expirationTime - now) / 1000;
     return message.reply(
      new MessageEmbed().setColor("#F21313")
      .setTitle(`Please wait\` \`${timeLeft.toFixed(1)} seconds\` \`before reusing the\` \`${prefix}${command.name}\` `)    
     );
   }
 }
 timestamps.set(message.author.id, now);
 setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 try {
   command.execute(message, args, client);
 } catch (error) {
   console.error(error);
   message.reply( new MessageEmbed().setColor("#F21313")
   .setTitle(`There was an error executing that command.`)).catch(console.error);
 }


});
function delay(delayInms) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(2);
   }, delayInms);
 });
}

client.on("message", message => {
  if (message.content === PREFIX + "lock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel lock**")
      .addField("Server name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("#F21313");
    message.channel.send(embed).then(bj => {
      bj.react("<:lock:893199905403838574>");
    });
  }
});


client.on("message", message => {
  if (message.content === PREFIX + "unlock") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unlock**")
      .addField("Sever name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("BLACK");
    message.channel.send(embed).then(bj => {
      bj.react("<:unlock:893199888832139314>");
    });
  }
});


//////


//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////

