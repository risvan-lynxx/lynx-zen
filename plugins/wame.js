const { bot, isPrivate } = require("../lib")
bot(
  {
    pattern: "wame ?(.*)",
    fromMe: isPrivate,
    desc: "wame generator",
    type: "whatsapp",
  },
  async (message, match) => {
    let sender = 'https://wa.me/' + (message.reply_message.jid || message.mention[0] || match).split('@')[0];
    await message.reply(sender)
  }
);
