//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
const moment = require('moment-timezone')
const {fetchJson,Module_Exports, tlang, getBuffer, prefix, name,fancytext,botpic } = require('../lib')
let gis ='' // require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

   //---------------------------------------------------------------------------
   const { shazam } = require('../lib')
   let yts = require("secktor-pack");
   Module_Exports({
           kingcmd: "find",
           kingclass: "search",
           infocmd: "Finds info about song",
           kingpath: __filename,
       },
       async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!citel.quoted) return citel.reply(`Reply to Audio`);
            if (!/audio/.test(mime)) return citel.reply(`Send/Reply audio ${prefix}shazam`);
            let buff = await citel.quoted.download();
            let data = await shazam(buff);
            if (!data.status) return citel.send(data);
            let search = await yts(data.title);
            let anu = search.videos[0];
            let h =`*Title : _${data.title}_*           
*Artist : _${data.artists}_*            
*To Download Song:- _${prefix}yta ${anu.url}_*
   `
//   *Album :* _${data.album}_    
//   *Release :* _${data.release_date}


   let buttonMessaged = {
                   image: { url: anu.thumbnail, },
                   caption: h,
                   footer: tlang().footer,
                   headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                           title: data.artists,
                           body: data.album,
                           thumbnail: log0,
                           mediaType: 2,
                           mediaUrl: ``,
                           sourceUrl: ``,
                       },
                   },
               };
               await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel, });
       }
    )
    //------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: 'ss',
            shortcut :['webss' , 'fullss'],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: '',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
let limit = 5;
 try {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    var url = text;
    let urll = `https://s.vercel.app/api?url=${url.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
    let media  = await getBuffer(urll)
    return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
 }
catch (err) { return citel.reply("```Error While Fetching Snapshot```")}
        }
    )



    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "movie",
            kingclass: "search",
            infocmd: "Sends image of asked Movie/Series.",
            use: 'kingsman',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*_Name a Series or movie_*\nEx: ${prefix}imdb kingman`);
            try{
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            
            let imdbt = "";
            
            citel.reply(fids.data)
            
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ```     𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "\n";
            imdbt += name.caption ;
            Void.sendMessage(citel.chat, {  image: { url: fids.data.Poster, }, caption: imdbt,  }, {   quoted: citel,  });}
            catch{
                citel.reply("*_Wrong Movie Name_* ")}


        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "weather",
        kingclass: "search",
        infocmd: "Sends weather info about asked place.",
        use: 'Lahore'
      }, async (sigma, person, text) => {
        if (!text) {
          return person.reply("*_Give me Location_*...!\nEx: " + prefix + "weather lahore");
        }
        person.send("*_Wait While Getting Weather Info Of_* " + text);
        try {
          let wdata = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + text + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
          let mz = '';
          mz += "﹍﹍﹍〝 " + mztit + " 〞━\n〄┏➛ *sɪɢᴍᴀ ᴹᴰ*\n〄┗➛ *ᴡᴇᴀᴛʜᴇʀ sᴇᴀʀᴄʜ*\n〄       " + fancytext("*weather of*", 1) + " " + text + "\n";
          mz += "〄 " + fancytext("*country*", 1) + " " + wdata.data.sys.country + "\n";
          mz += "〄 " + fancytext("*condition*", 1) + " " + wdata.data.weather[0].main + "\n";
          mz += "〄 " + fancytext("*description*", 1) + " " + wdata.data.weather[0].description + "\n";
          mz += "〄 " + fancytext("*temperature*", 1) + " " + wdata.data.main.temp + "\n";
          mz += "〄 " + fancytext("*feels-like*", 1) + " " + wdata.data.main.feels_like + "\n";
          mz += "〄 " + fancytext("*pressure*", 1) + " " + wdata.data.main.pressure + "\n";
          mz += "〄 " + fancytext("*humidity*", 1) + " " + wdata.data.main.humidity + "\n";
          mz += "〄 " + fancytext("*wind-speed*", 1) + " " + wdata.data.wind.speed + "\n";
          mz += "〄 " + fancytext("*latitude*", 1) + " " + wdata.data.coord.lat + "\n";
          mz += "〄 " + fancytext("*longitude*", 1) + " " + wdata.data.coord.lon + "\n┗━━━━━━━━﹍﹍\n*╰┈➤ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ " + name.botname + '*';
          const slog = await getBuffer(global.slogo);
          let king = {
            'image': {
              'url': await botpic()
            },
            'text': mz,
            'footer': tlang().footer,
            'headerType': 0x4,
            'contextInfo': {
              'externalAdReply': {
                'title': '' + Gname,
                'body': "Easy to Use",
                'thumbnail': slog,
                'mediaType': 0x4,
                'mediaUrl': '',
                'sourceUrl': '' + waUrl
              }
            }
          };
          sigma.sendMessage(person.chat, king, {
            'quoted': person
          });
        } catch {
          person.reply("*_Your Given Location is Invalid_*\n*_Please Give Me a Valid Location_*");
        }
      });
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "horosco",
            kingclass: "search",
            infocmd: "Gives horoscope info of user.",
            use: 'sign\n:Example: horo libra',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a sign!`)
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        textw +=name.caption ;
                        citel.reply(textw)
                    });

            } catch (e) {   console.log(e)  }
        }
    )
    //---------------------------------------------------------------------------

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "google",
            shortcut :['gsearch'],
            kingclass: "search",
            infocmd: "Sends info of given query from Google Search.",
            use: 'who is king',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`give me a query\n*Ex: ${prefix}google Who is KING.*`);
            let google = require('google-it');
            google({ 'query': text}).then(res => {
                let msg= `*Google Search From:* ${text} \n\n`;
                for (let g of res) {
                    msg+= `➣ *𝚃𝙸𝚃𝙻𝙴* ${g.title}\n`;
                    msg+= `➣ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽* ${g.snippet}\n`;
                    msg+= `➣ *𝙻𝙸𝙽𝙺* ${g.link}\n\n✯─────────────────────✯\n\n`;
                }
             
                return citel.reply(msg);
            })
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "image",
            shortcut: ["img"],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: 'Quran pics',
            kingpath: __filename,
        },
        async(Void, citel, text) => {

   if (!text) return citel.reply(`Provide me a query!\n*Ex: ${prefix}image crown |10*`)
   let buttonMessage = {}
   let name1 = text.split("|")[0] || `Luffy`
   let name2 = text.split("|")[1] || `5`
 try {
    let urlsArray = [];
    const params = {
        q: name1, 
        tbm: "isch",
        hl: "en",
        gl: "in",
        ijn: "0", 
    };
    const headers = {
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "Accept-Encoding": "application/json",
  };
  
    const res = await axios.get("https://www.google.com/search", { headers: headers, params: params });
    let body = res.data;
    body = body.slice(body.lastIndexOf("AF_initDataCallback"));
    body = body.slice(body.indexOf("["));
    body = body.slice(0, body.indexOf("</script>")-1);
    body = body.slice(0, body.lastIndexOf(","));
    
    const img = JSON.parse(body);

    const imgObjects = img[56][1][0][0][1][0];
    for (let i = 0; i < name2; i++) {
        if (imgObjects[i] && imgObjects[i][0][0]["444383007"][1]) {
            let url = imgObjects[i][0][0]["444383007"][1][3][0]; // the url
            urlsArray.push(url);
        }
    }

for (let url of urlsArray) { Void.sendMessage(citel.chat , {image : {url : url} } )  }
} 
 catch (error) {   return citel.reply("*_Google Images Not Working, Try it Later_*"); }

 
 
 /*
 
let isImages = false;
            let num = text.split("|")[1];
 gis(name1, async(error, result) => { 
if(result.length) 
{
 isImages = true;
 citel.reply(`Sending images of ${name1} in chat`) 
}
else return citel.reply("*Google Images Not Working, Try it Later*");
})
     if(!isImages) return       
            let nn = name2
            for (let i = 0; i < nn; i++) {
            gis(name1, async(error, result) => { 
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            
             
             if(!num){ buttonMessage = {   image: { url: images },
                                caption: name.caption,
                                }
             }else {  buttonMessage = {   image: { url: images },}   }
                    
             
             Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                })
            }
            
            
            */
 })
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "iswa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '234902786xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
 if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}iswa 234902786xx`)
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}iswa 9234663191xx`)
        citel.reply(`*Searching WhatsApp accounts in given range...*`)

        function countInstances(string, word) {  return string.split(word).length - 1; }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) { randomxx = 10 } 
        else if (random_length == 2) { randomxx = 100 } 
        else if (random_length == 3) { randomxx = 1000 }
 
        text = `*--〝 List of Whatsapp Numbers 〞--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) { random = `${status1}` } 
            else if (random_length == 2) {random = `${status1}${status2}` } 
            else if (random_length == 3) {random = `${status1}${status2}${status3}` } 
            else if (random_length == 4) {random = `${status1}${status2}${status3}${dom4}` }
         
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try 
            {
                  try { var anu1 = await Void.fetchStatus(anu[0].jid); } 
                  catch { var anu1 = '401' ; }
                  if (anu1 == '401' || anu1.status.length == 0) { nobio += `wa.me/${anu[0].jid.split("@")[0]}\n` ; } 
                  else {  text += `ɴᴜᴍʙᴇʀ wa.me/${anu[0].jid.split("@")[0]}\nʙɪᴏ ${anu1.status}\nʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ ${moment(anu1.setAt).tz('Asia/karachi').format('HH:mm:ss DD/MM/YYYY')}\n\n` ;   }
            } catch { nowhatsapp += `${number0}${i}${number1}\n`; }
        }
        return await citel.reply(`${text}${nobio}${nowhatsapp}*╰┈➤ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɢɴɪᴍᴇ ${name.botname}*`)

    }
)


Module_Exports({
        kingcmd: "nowa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '234902786xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}nowa 234902786xx`)
const inputNumber = text.split(" ")[0]
if (!inputNumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}nowa 234902786xxxx`)
citel.reply(`*Searching for WhatsApp account in the given range...*`);
function countInstances(string, word) { return string.split(word).length - 1; }
const number0 = inputNumber.split('x')[0];
const number1 = inputNumber.split('x').slice(-1)[0] || '';
const randomLength = countInstances(inputNumber, 'x');
const randomxx = [10, 100, 1000][randomLength - 1] || 0;
let nobio = `\n*〝Accounts With No Bio〞* \n`;
 let nobios='';
let nowhatsapp = `*〝 Numbers With No WhatsApp〞* \n\n`;
for (let i = 0; i < randomxx; i++) 
{
    const nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const status = nu.slice(0, randomLength).map(() => nu[Math.floor(Math.random() * nu.length)]).join('');
    const random = `${status}${nu[Math.floor(Math.random() * nu.length)]}`.slice(0, randomLength);
    const anu = await Void.onWhatsApp(`${number0}${i}${number1}`);
    const anuu = anu.length !== 0 ? anu : false;
    try 
    {
         const anu1 = await Void.fetchStatus(anu[0].jid);
         if (anu1 === '401' || anu1.status.length === 0) {  nobios += `wa.me/${anu[0].jid.split("@")[0]}\n`; } 
    } catch { nowhatsapp += `${number0}${i}${number1}\n`;  }
}
if(!nobios){ nobio = ''; } else {nobio += nobios+'\n' ;}
return await citel.reply(`${nobio}${nowhatsapp}*╰┈➤ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɢɴɪᴍᴇ ${name.botname}*`);
  
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////