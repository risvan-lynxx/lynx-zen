const { bot, isPrivate, getJson } = require("../lib");
const config = require("../config");
bot(
  {
  pattern: "waifu",
  fromMe: isPrivate,
  desc: "Random anime images",
  type: "Anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/waifu');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});
bot(
  {
  pattern: "neko",
  fromMe: isPrivate,
  desc: "Random anime images",
  type: "Anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/neko');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});
bot(
  {
  pattern: "loli",
  fromMe: isPrivate,
  desc: "Random anime images",
  type: "Anime",
}, async (message, match) => {
  var { url } = await getJson('https://api.waifu.pics/sfw/neko');
  await message.sendFromUrl(url,{caption: `${config.CAPTION}`});
});
