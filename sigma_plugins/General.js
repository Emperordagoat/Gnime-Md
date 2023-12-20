//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
const { formatp , formatDate , tlang, botpic,Module_Exports, prefix, runtime,name , parsedJid ,sleep,performance } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'





//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================


/////-------------=========================================-------------------------------
Module_Exports({
  kingcmd: "advt",
  shortcut: ["advertisement"],
  kingclass: "misc",
  infocmd: "Advertise of your Message, by sending it to provided nmbr range.",
  use: '234803960xx,Your_text_here',
  kingpath: __filename
}, async (Void, citel, text, {
  isCreator
}) => {
  if (!isCreator) {
    return citel.reply(tlang().owner);
  }
  if (!text) {
    return await citel.reply("*Advertise of your Message*\n*by sending it to provided nmbr range.*\n" + prefix + "advt234902786xx,Your_text_here");
  }
  const commaIndex = text.indexOf(',');
  if (commaIndex === -0x1) {
    return await citel.send("*Invalid format. Please provide number and Message separated by a comma.*");
  }
  let inputnumber = '' + text.slice(0x0, commaIndex).trim();
  let msg = text.slice(commaIndex + 0x1).trim() + "\n\n\n" + name.caption;
  if (!inputnumber.includes('x')) {
    return citel.send("*You did not add x in number.*\n*Ex: " + prefix + "advt 2349028786xx,Your_Message_here*  \n " + name.caption);
  }
  await citel.send("*Sending message to given number range.!*\n*It may take some time, so wait please*\n\n" + name.caption);
  var number0 = inputnumber.split('x')[0x0];
  var number1 = inputnumber.split('x')[inputnumber.split('x').length - 0x1] ? inputnumber.split('x')[inputnumber.split('x').length - 0x1] : '';
  var random_length = inputnumber.split('x').length - 0x1;
  var randomxx;
  if (random_length == 0x1) {
    randomxx = 0xa;
  } else {
    if (random_length == 0x2) {
      randomxx = 0x64;
    } else {
      if (random_length == 0x3) {
        randomxx = 0x3e8;
      } else {
        if (random_length > 0x3) {
          return await citel.send("*Only 3(x) are Allowed in number*");
        }
      }
    }
  }
  let count = 0x0;
  let sents = '';
  var last_user = '';
  for (let i = 0x0; i < randomxx; i++) {
    var anu = await Void.onWhatsApp('' + number0 + i + number1 + "@s.whatsapp.net");
    if (anu[0x0]) {
      last_user = anu[0x0].jid;
      if (sents.includes(last_user)) {
        continue;
      }
      await sleep(0x5dc);
      await Void.sendMessage(last_user, {
        'text': msg
      });
      sents = sents + ',' + last_user;
      count += 0x1;
    }
  }
  return await citel.send("*_Advertisement of your Message is Done,_*\n\n*_Message Succesfully sent to " + count + " chats_*\n\tLast_User: " + last_user.split('@')[0x0] + "\n\tSearch_No: " + randomxx + " number seached\n\n\n" + name.caption);
});



//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "chat",
        infocmd: "chat with an AI chatbot",
        kingclass: "AI",
        use: 'Hi',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      //  let zx = text.length;
        //if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=177396&key=5sivBl67scSVFCyo&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
  
    }
)


//---------------------------------------------------------------------------

Module_Exports({
  'kingcmd': "gpt",
  'shortcut': ["chatgpt", "openai"],
  'kingclass': 'AI',
  'infocmd': "To get open ai response"
}, async (_0xde6281, _0x3a7abf, _0x327150) => {
  if (!_0x327150) {
    return _0x3a7abf.reply("*_Give me Text To Get ChatGpt Response_*\n*_" + prefix + "gpt what is dogmatism_*");
  }
  try {
    const _0x45d107 = await fetch("https://aemt.me/openai?text=" + _0x327150);
    const _0x5a8c0c = await _0x45d107.json();
    return _0x3a7abf.reply(_0x5a8c0c.result, {
      'quoted': _0x3a7abf
    });
  } catch (_0x2931be) {
    _0x3a7abf.reply("*_Unknown Error Occured_*");
  }
});
//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "dalle",
  shortcut: ['dall', 'dall-e'],
  infocmd: "chat with an AI",
  kingclass: "AI",
  use: '<Hii, Gnime>',
  kingpath: __filename
}, async (Void, citel, text) => {
  if (name.OPENAI_API_KEY == '') {
    return citel.reply("You Dont Have OPENAI_API_KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys");
  }
  if (!text) {
    return citel.reply("*_Give Me A Query To Get Dall-E Reponce ?_*");
  }
  const OPENAI_API_KEY = name.OPENAI_API_KEY;
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    'method': "POST",
    'headers': {
      'Content-Type': "application/json",
      'Authorization': "Bearer " + OPENAI_API_KEY
    },
    'body': JSON.stringify({
      'model': 'image-alpha-001',
      'prompt': text,
      'size': "512x512",
      'response_format': "url"
    })
  });
  const data = await response.json();
  Void.sendMessage(citel.chat, {
    'image': {
      'url': data.data[0x0].url
    }
  });
});


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "category",
  shortcut:["cate"],
  infocmd: "Get All Categories List",
  kingclass: "general"
 },
 async(bot,man,text) => {


  let sigma_lists = `${scate}\n${name.caption}`
    
    
          let lists = 
              {
              image: { url: await botpic() },
              caption: sigma_lists,
              footer: tlang().footer,
              headerType: 4,

              };
             
          return await bot.sendMessage(man.chat, lists, {   quoted: man, });
 })
//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "script",
  shortcut: ["git", "sc", "repo"],
  infocmd: "Sends info about repo.",
  kingclass: "support",
  use: ""
}, async (bot, citel) => {
  timestampe = speed();
  latensie = speed() - timestampe;
  try {
    let {
      data
    } = await axios.get("https://api.github.com/repos/Astropeda/Gnime-Md");
    let cap = "﹍﹍﹍〝 " + mztit + " 〞━\n〄 *sᴛᴀʀs* " + data.stargazers_count + " sᴛᴀʀs\n〄 *ꜰᴏʀᴋs* " + data.forks_count + " ꜰᴏʀᴋs\n〄 *sᴘᴇᴇᴅ* " + latensie.toFixed(4) + " ᴍs \n┗━━━━━━━━﹍﹍\nʀᴇʟᴇᴀꜱᴇᴅ ᴅᴀᴛᴇ\n_𝟷/𝟷𝟶/𝟸𝟶𝟸𝟹_\nʀᴇᴘᴏ\n_astromedia0010@outlook.com\nᴇᴍᴀɪʟ ꜰᴏʀ ʜᴇʟᴘ\n" + scap;
    let Maher_Zubair_repo = {
      'image': {
        'url': await botpic()
      },
      'caption': cap,
      'headerType': 0x4,
      'footer': tlang().footer,
      'contextInfo': {
        'externalAdReply': {
          'title': "ɢɴɪᴍᴇ ᴍᴅ ʀᴇᴘᴏ",
          'body': "ᴛᴀᴘ ʜᴇʀᴇ ꜰᴏʀ ʀᴇᴘᴏ",
          'thumbnailUrl': '',
          'thumbnail': log0,
          'mediaType': 0x4,
          'mediaUrl': '',
          'sourceUrl': srepo
        }
      }
    };
    await bot.sendMessage(citel.chat, Maher_Zubair_repo, {
      'quoted': citel
    });
  } catch (_0x1de2fb) {
    citel.send("*_The Repo is Private or It is Not Available at The Moment_*");
  }
});

//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "status",
  shortcut: ["about","sts"],
  infocmd: "To check bot status",
  kingclass: "tools",
  use: ""
},
async(sigma, person) => {
  const uptime = process.uptime();
  timestampe = speed();
  latensie = speed() - timestampe;
  let ter = `
﹍﹍﹍〝 ${mztit} 〞━
〄 *_ᴜᴘ-ᴛɪᴍᴇ_* ${runtime(process.uptime())}
〄 *_sᴘᴇᴇᴅ_* ${latensie.toFixed(4)} ᴍs 
〄 *_ᴘʟᴀᴛғᴏʀᴍ_* ᴍᴀᴄ-ᴏs
〄 *_ᴠᴇʀsɪᴏɴ_* ${name.VERSION} 
〄 *_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_* *_ɢɴɪᴍᴇ ᴍᴅ_*
┊﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎
`;
  let buttonMessaged = {
      image: {
          url: await botpic(),
      },
      caption: ter,
      footer: tlang().footer,
      headerType: 4,
      contextInfo: {
          externalAdReply: {
              title: name.botname,
              body: `ʙᴏᴛ-sᴛᴀᴛᴜs`, 
              thumbnail: log0,
              mediaType: 2,
              mediaUrl: "",
              sourceUrl: zyt,
          },
      },
  };
  return await sigma.sendMessage(person.chat, buttonMessaged, {
      quoted: person,
  });

}
)
//========================================================================

Module_Exports({
  kingcmd: "cpu",
  infocmd: "To check bot status",
  kingclass: "misc",
  kingpath: __filename,
  use: ""
},
async(sigma, person,{isCreator}) => {
  try{
const { formatp, runtime } = require("../lib");
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Run-time of ${name.botname}: ${runtime(process.uptime())}`
  

  let resp2 = ` Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
*Memory Usage*
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `*Total CPU Usage*
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await person.reply(respon+resp2 ) }
      catch(e){
        person.send("*_Unknown Error Occured_*")}
})
 
//-------------------------------------------------------------------------
Module_Exports({
  kingcmd: "theme",
  shortcut: ["themes"],
  infocmd: "To find all themes",
  kingclass: "general",
  kingpath: __filename,
},
async(bot, man,write,{isCreator}) => {

if(!isCreator) return man.reply(tlang().owner);
let SIGMA_THEMES=`﹍﹍﹍〝 ${mztit} 〞━ \n〄 *ᴀᴠᴀɪʟᴀʙʟᴇ ᴘʀᴇᴍɪᴜᴍ*\n〄 *ᴛʜᴇᴍᴇs ɪɴ ɢɴɪᴍᴇ ᴍᴅ*\n`
SIGMA_THEMES+=`〄 SHELBY\n〄 JOKER\n〄 ɢɴɪᴍᴇ\n〄 PATRICK\n〄 AVENGERS\n〄 BTS\n〄 ANIME\n〄 GOJO\n〄 MOMOLAND\n〄 ADAM\n〄 AYANOKOJI\n〄 EDITH\n〄 FRIDAY\n〄 GENOS\n〄 GIDEON\n〄 GOKU\n〄 LUFFY\n〄 NARUTO\n〄 NEZUKO\n〄 PARKER\n〄 ${prefix}setvar THEME:BTS\n┊﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎`
return man.reply(SIGMA_THEMES)
  
}
)

//--------------------------------------------------------------------------
Module_Exports({
  kingcmd: "speed",
  infocmd: "To check bot responding speed",
  kingclass: "tools",
  use: "",
},
async(sigma, person) => {
const sigma_male_zubair = require('performance-now')
   timestampe = sigma_male_zubair();
       latensie = sigma_male_zubair() - timestampe;
   let Zubair = `_ʀᴇsᴘᴏɴᴅ ʀᴀᴛᴇ ᴏꜰ_ _${name.botname}_ ɪs:\n ${latensie.toFixed(4)} ᴍs`
       return person.reply(Zubair)
})
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////