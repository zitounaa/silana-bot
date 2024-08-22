import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212772554870
*instagram:*\ninstagram.com/gtx_33_ys

*youtube:*\nyoutube.com/nochain

*facebook page:*\nhttps://www.facebook.com/yassin.amhamdi.5?mibextid=ZbWKwL

*script bot :* https://github.com/zitounaa/silana-bot

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
