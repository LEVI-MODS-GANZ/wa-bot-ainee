let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `  π·π°πΈ πΊπ°πΊ πΈπ½πΈ π³πΈπ° π»πΈππ π·π°ππΆπ° ππ΄ππ° & πΏπ΄ππΌπΈππΌ
        
1. πΆπππΏ / 30 π·π°ππΈ
ππ. 15.000 π³π°π½π°
ππ. 15.000 πΏππ»ππ°

2. πΏπ΄ππΌπΈππΌ / 30 π·π°ππΈ
Rp. 10.000 π³π°π½π°
Rp. 10.000 πΏππ»ππ°

3. πΏπ΄ππΌπΈππΌ π°π½π³ πΆπππΏ / 30 π·π°ππΈ
Rp. 20.000 π³π°π½π°
Rp. 20.000 πΏππ»ππ°

wa.me/${owner[0]}
*π½πΎππ΄: πΈππ π±ππΊπ°π½ π±πΎπ!*
*Owner ${conn.user.name}*
`,
  buttonText: 'π·π°ππΆπ° ππΈπ³π°πΊ ππ΄πππ°πΈ? π²π·π°π πΎππ½π΄π',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText: 'https://github.com/ImleviOfc',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
