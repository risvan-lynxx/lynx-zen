const { bot, isPrivate } = require("../lib/");
bot(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝐋𝐲𝐧𝐱",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐋𝐲𝐧𝐱\nORG:Lynx\nTEL;type=CELL;type=VOICE;waid=918138898059:918138898059\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝐙𝐞𝐧 𝐗𝐝🧚‍♂️",
      'body': "𝐋𝐲𝐧𝐱",
      'thumbnailUrl': "https://i.imgur.com/Uc0uIkO.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/918138898059",
      'sourceUrl': "http://wa.me/918138898059",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
