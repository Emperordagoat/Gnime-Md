//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
const sigma_config = require('../Setting')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, Module_Exports, GIFBufferToVideoBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
let gis = '' // require("g-i-s")
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib')

//----------------------------------------------------------------------
/////////////////////////////////////////////////////////////////
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "Wallpaper",
    infocmd: "To get random wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Astropeda/Gnime-Md/main/Media/WallPapers/Random_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɢɴɪᴍᴇ ${sigma_config.botname}*`  }, { quoted: man })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////