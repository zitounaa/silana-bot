let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم حظرك من استعمال البوت يا عزيزي لانك تخالف سياسة استعماله ♥ يمكنك معرفة سياسة استخدام البوت لدى صاحبه نورالدين \ninstagram.com/noureddine_ouafy 😄!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i

handler.admin = true

export default handler
