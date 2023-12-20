//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:Astropeda                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
  

  //------------------------------------------------------------------------------------


  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "ownner",
          infocmd: "to check owner number",
          kingclass: "general",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };

  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    'kingcmd': "menu",
    'shortcut': ["help", "list"],
    'infocmd': "All Commands lists",
    'kingclass': "general"
  }, async (_0x3c2b7e, _0x4be39a, _0x364003) => {
    const {
      commands: _0x3442f9
    } = require("../lib");
    let _0x59b23d = [];
    const _0x1f4c0d = _0x364003 ? _0x3442f9.find(_0x1696a7 => _0x1696a7.kingcmd === _0x364003) : false;
    if (_0x1f4c0d) {
      _0x59b23d.push("┊﹉﹉⟪ " + mztit + " 〙━❉\n⋫ ᴄᴏᴍᴍᴀɴᴅ " + _0x1f4c0d.kingcmd);
      if (_0x1f4c0d.kingclass) {
        _0x59b23d.push("⋫ ᴄᴀᴛᴇɢᴏʀʏ " + _0x1f4c0d.kingclass);
      }
      if (_0x1f4c0d.shortcut) {
        _0x59b23d.push("⋫ sʜᴏʀᴛᴄᴜᴛ " + _0x1f4c0d.shortcut);
      }
      if (_0x1f4c0d.use) {
        _0x59b23d.push("⋫ ᴜsᴀɢᴇ\n " + prefix + _0x1f4c0d.kingcmd + " " + _0x1f4c0d.use);
      }
      if (_0x1f4c0d.infocmd) {
        _0x59b23d.push("⋫ ɪɴꜰᴏ " + _0x1f4c0d.infocmd + "\n┊﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎❉");
      }
      return await _0x4be39a.reply(_0x59b23d.join("\n"));
    }
    const _0x4357a0 = {};
    try {
      _0x3442f9.map(async (_0x30e747, _0x152af1) => {
        if (_0x30e747.dontAddCommandList === false && _0x30e747.kingcmd !== undefined) {
          if (!_0x4357a0[_0x30e747.kingclass]) {
            _0x4357a0[_0x30e747.kingclass] = [];
          }
          _0x4357a0[_0x30e747.kingclass].push(_0x30e747.kingcmd);
        }
      });
      timestampe = sɪɢᴍᴀ_speed();
      latensie = sɪɢᴍᴀ_speed() - timestampe;
      let [_0x20e8d6, _0x393cfa] = new Date().toLocaleString("en-pk", {
        'timeZone': global.timezone
      }).split(',');
      let _0x372184 = "┊﹉﹉〘 " + mztit + " 〙﹉﹉❉      \n⋫ ᴏᴡɴᴇʀ " + name.ownername + "\n⋫ ᴘʀᴇғɪx 〝 *" + prefix + "* 〞\n⋫ ᴛʜᴇᴍᴇ " + tlang().theme + "\n⋫ ᴍᴏᴅᴇ " + name.WORKTYPE + "\n⋫ ᴛɪᴍᴇ " + _0x393cfa + "\n⋫ ᴅᴀᴛᴇ " + _0x20e8d6 + "\n⋫ ᴍᴇᴍ " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n⋫ ᴜᴘ-ᴛɪᴍᴇ " + runtime(process.uptime()) + "\n⋫ ᴘʟᴜɢɪɴs " + _0x3442f9.length + "\n⋫ sᴘᴇᴇᴅ " + latensie.toFixed(4) + " ᴍs\n⋫ ᴘʟᴀᴛꜰᴏʀᴍ ᴍᴀᴄ-ᴏs\n⋫ ᴠᴇʀsɪᴏɴ " + name.VERSION + "\n﹎﹎﹎﹎﹎﹎﹎﹎❉       \n\n" + sɪɢᴍᴀ_readmore + "\n";
      let _0x33ce6e = false;
      for (const _0x181790 in _0x4357a0) {
        _0x372184 += "┊﹉﹉〝 " + tiny(_0x181790) + " 〞﹉﹉❉\n";
        if (_0x364003.toLowerCase() == _0x181790.toLowerCase().trim()) {
          _0x33ce6e = "┊﹉﹉〝 " + tiny(_0x181790) + " 〞﹉﹉❉\n";
          for (const _0x1811b9 of _0x4357a0[_0x181790]) {
            _0x33ce6e += "⋫ " + fancytext(_0x1811b9, 1) + "\n";
          }
          _0x33ce6e += "┊﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎❉\n*ɢɴɪᴍᴇ ᴍᴅ 2023*";
          break;
        } else {
          for (const _0x4c0684 of _0x4357a0[_0x181790]) {
            _0x372184 += "⋫ " + fancytext(_0x4c0684, 1) + "\n";
          }
          _0x372184 += "﹎﹎﹎﹎﹎﹎﹎﹎❉\n";
        }
      }
      _0x372184 += "ᴛʏᴘᴇ " + prefix + "ʜᴇʟᴘ ᴄᴍᴅ ɴᴀᴍᴇ ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅ.\n*ɢɴɪᴍᴇ ᴍᴅ 2023*";
      return await _0x3c2b7e.sendMessage(_0x4be39a.chat, {
        'image': {
          'url': await botpic()
        },
        'caption': _0x33ce6e ? _0x33ce6e : _0x372184
      });
    } catch {
      _0x4be39a.reply("*_Fatal Error, timezone is either incorrect, or bad code_*");
    }
  });
  
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┊﹉﹉〘 ${mztit} 〙━❉\n⋫ ᴄᴏᴍᴍᴀɴᴅ ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`⋫ ᴄʟᴀss ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`⋫ ꜰɪʟᴇ-ᴘᴀᴛʜ ${cmd.kingpath}\n┊﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎❉\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })


