const fs = require('fs')
const chalk = require('chalk')
const { times, runtime, sender, pushname, formatDate, tanggal } = require('../library/function')


// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' 

NameOwner = 'Ergil'// Nama lu
NameBot = 'ErgilBotz'// Nama bot lu
NomorOwner = '6282135958329'// Nomor Owner
Log = '\n Ergil Ganteng'//console log gerak nya:v
Titlenyo = 'Jgn Spam Bot'// Titlenya

// FOOTER/WM
Mfooter = 'Peringatan: Dilarang keras spam command.\n\nĀ© ErgilBotz'// footer menu/biodata

Uig = 'https://instagram.com/ergilgge'// link ig lu
Ugc = 'https://chat.whatsapp.com/COuSJpj2vaxDmKXx2REvJM'// link gc lu

// Other
global.owner = ['6282135958329']// Nomor lu
global.premium = ['6282135958329']// User Prem
global.profilebio = ['6282135958329'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.packname = 'ErgilBotz'// Packname
global.sessionName = 'session'// session Bot
global.footer = 'Ā© ErgilBotz'// footer biasa
global.author = 'ErgilBotz || ig: @ergilgge'
global.prefa = ['','!','.','š¦','š¤','šæ']// Prefix
global.act = {
		wait: 'Permintaan di proses...',// Proses
		urlerr: 'Link Error',// Link Error
		nurl: 'Harap Masukan Url',// No Url
		ntext: 'Harap Masukan Parameter',// No Text
		error:'Error :(',// Error
		success:'Success !',// Sukses
		botadm:'Fitur ini bisa digunakan saat bot sudah menjadi admin!',// Ketika Bot Bukan admin
		admin:'Fitur Ini Cuman untuk admin group!',// Ketika Fitur khusus admin
		done:'Done!',// Sukses
		gc:'Fitur ini hanya bisa digunakan di dalam group chat!',
		owner:'Fitur ini khusus owner bot!'// Khusus Owner/Pemilik Bot
}


exports.allmenu = (sender, prefix, pushname) => {
	return `Hi ${m.pushName} š
				
ā­āāā² *${NameBot}* ā³	
ā	
āāāāā­ *INFO*
āā
āāā­ *Nama :* _ć ${pushname} ć_
āāā­ *Nomer :* _ć ${m.sender.split("@")[0]} ć_
āāā­ *Jam :* _ć ${times(new Date)} ć_
āāā­ *Tanggal :* _ć ${tanggal(new Date)} ć_
āāā­ *Runtime :* _ć ${runtime(process.uptime())} ć_
āā
āāāāāāāāāā­
ā
āā«ŗ ${prefix}ping 
āā«ŗ ${prefix}menu
āā«ŗ ${prefix}script
ā
āāāāā­ *OWNERMENU*
āā
āāā«¹ā«ŗ ${prefix}block @tag
āāā«¹ā«ŗ ${prefix}unblock @tag
āāā«¹ā«ŗ ${prefix}setppbot _reply_
āāā«¹ā«ŗ ${prefix}join _link_
āāā«¹ā«ŗ ${prefix}leave 
āāā«¹ā«ŗ ${prefix}anticall 
āāā«¹ā«ŗ ${prefix}addprem @tag _jumlah_
āāā«¹ā«ŗ ${prefix}delprem @tag
āāā«¹ā«ŗ ${prefix}setbotbio
āāā«¹ā«ŗ ${prefix}setnamabot
āāā«¹ā«ŗ > 
āāā«¹ā«ŗ => 
āāā«¹ā«ŗ $ 
āā
āā°ā»
ā
āāāāā­ *DOWNLOADERMENU*
āā 
āāā«¹ā«ŗ ${prefix}tiktok _url_ 
āāā«¹ā«ŗ ${prefix}tiktokaudio _url_ 
āāā«¹ā«ŗ ${prefix}ytmp3 _url_ š«
āāā«¹ā«ŗ ${prefix}ytmp4 _url_ š«
āā
āā°ā»
ā
āāāāā­ *SEARCHMENU*
āā
āāā«¹ā«ŗ ${prefix}play [query] 
āāā«¹ā«ŗ ${prefix}ytsearch [query] 
āāā«¹ā«ŗ ${prefix}pinterest 
āā				
āā°ā»
ā
āāāāā­ *GROUPMENU*
āā
āāā«¹ā«ŗ ${prefix}linkgc
āāā«¹ā«ŗ ${prefix}add _num_
āāā«¹ā«ŗ ${prefix}kick @tag
āāā«¹ā«ŗ ${prefix}tagall _text_
āāā«¹ā«ŗ ${prefix}promote @tag
āāā«¹ā«ŗ ${prefix}demote @tag
āāā«¹ā«ŗ ${prefix}setname _text_
āāā«¹ā«ŗ ${prefix}setppgroup _reply_ 
āāā«¹ā«ŗ ${prefix}setdesk _text_
āāā«¹ā«ŗ ${prefix}hidetag _text_
āāā«¹ā«ŗ ${prefix}totag _reply_ 
āāā«¹ā«ŗ ${prefix}linkgroup 
āā
āā°ā»
ā
āāāāā­ *TOOLMENU*
āā
āāā«¹ā«ŗ ${prefix}sticker/s 
āāā«¹ā«ŗ ${prefix}stickergif 
āāā«¹ā«ŗ ${prefix}swm [q|q] 
āāā«¹ā«ŗ ${prefix}toimg _reply_ 
āāā«¹ā«ŗ ${prefix}style _text_
āāā«¹ā«ŗ ${prefix}smeme [q|q] 
āāā«¹ā«ŗ ${prefix}ebinary _text_
āāā«¹ā«ŗ ${prefix}dbinary [code] 
āāā«¹ā«ŗ ${prefix}tomp4 [send/reply] 
āāā«¹ā«ŗ ${prefix}toaud [send/reply] 
āāā«¹ā«ŗ ${prefix}tomp3 [send/reply] 
āāā«¹ā«ŗ ${prefix}tovn [send/reply] 
āāā«¹ā«ŗ ${prefix}togif [send/reply] 
āāā«¹ā«ŗ ${prefix}tourl [send/reply] 
āā
āā°ā»
ā
āāāāā­ *FUNMENU*
āā 
āāā«¹ā«ŗ ${prefix}menfes 
āāā«¹ā«ŗ ${prefix}jadian 
āāā«¹ā«ŗ ${prefix}jodohku 
āā
āā°ā»
ā
āāāāā­ *OTHERMENU*
āā 
āāā«¹ā«ŗ ${prefix}requestfitur _text_
āā
āā°ā»
ā
āāāāā­ *RANDOMCERITA*
āā 
āāā«¹ā«ŗ ${prefix}cerpen-anak
āāā«¹ā«ŗ ${prefix}cerpen-bahasadaerah
āāā«¹ā«ŗ ${prefix}cerpen-bahasainggris
āāā«¹ā«ŗ ${prefix}cerpen-bahasajawa
āāā«¹ā«ŗ ${prefix}cerpen-budaya
āāā«¹ā«ŗ ${prefix}cerpen-cinta
āāā«¹ā«ŗ ${prefix}cerpen-cintaislami
āāā«¹ā«ŗ ${prefix}cerpen-cintapertama
āāā«¹ā«ŗ ${prefix}cerpen-cintaromantis
āāā«¹ā«ŗ ${prefix}cerpen-cintasedih
āāā«¹ā«ŗ ${prefix}cerpen-cintasegitiga
āāā«¹ā«ŗ ${prefix}cerpen-cintasejati
āāā«¹ā«ŗ ${prefix}cerpen-galau
āāā«¹ā«ŗ ${prefix}cerpen-gokil
āāā«¹ā«ŗ ${prefix}cerpen-inspiratif
āāā«¹ā«ŗ ${prefix}cerpen-jepang
āāā«¹ā«ŗ ${prefix}cerpen-kehidupan
āāā«¹ā«ŗ ${prefix}cerpen-keluarga
āāā«¹ā«ŗ ${prefix}cerpen-kisahnyata
āāā«¹ā«ŗ ${prefix}cerpen-korea
āāā«¹ā«ŗ ${prefix}cerpen-kristen
āāā«¹ā«ŗ ${prefix}cerpen-liburan
āāā«¹ā«ŗ ${prefix}cerpen-malaysia
āāā«¹ā«ŗ ${prefix}cerpen-mengharukan
āāā«¹ā«ŗ ${prefix}cerpen-misteri
āāā«¹ā«ŗ ${prefix}cerpen-motivasi
āāā«¹ā«ŗ ${prefix}cerpen-nasihat
āāā«¹ā«ŗ ${prefix}cerpen-nasionalisme
āāā«¹ā«ŗ ${prefix}cerpen-olahraga
āāā«¹ā«ŗ ${prefix}cerpen-patahhati
āāā«¹ā«ŗ ${prefix}cerpen-penantian
āāā«¹ā«ŗ ${prefix}cerpen-pendidikan
āāā«¹ā«ŗ ${prefix}cerpen-pengalaman
āāā«¹ā«ŗ ${prefix}cerpen-pengorbanan
āāā«¹ā«ŗ ${prefix}cerpen-penyesalan
āāā«¹ā«ŗ ${prefix}cerpen-perjuangan
āāā«¹ā«ŗ ${prefix}cerpen-perpisahan
āāā«¹ā«ŗ ${prefix}cerpen-persahabatan
āāā«¹ā«ŗ ${prefix}cerpen-petualangan
āāā«¹ā«ŗ ${prefix}cerpen-ramadhan
āāā«¹ā«ŗ ${prefix}cerpen-remaja
āāā«¹ā«ŗ ${prefix}cerpen-rindu
āāā«¹ā«ŗ ${prefix}cerpen-rohani
āāā«¹ā«ŗ ${prefix}cerpen-romantis
āāā«¹ā«ŗ ${prefix}cerpen-sastra
āāā«¹ā«ŗ ${prefix}cerpen-sedih
āāā«¹ā«ŗ ${prefix}cerpen-sejarah
āā 
āā°ā»
ā°āāāāāāāāāāāāāāāāā±
`
}

exports.BData = () => {
	return `āāāāāā¢ *BIODATA OWNER*
āā«¹ā«ŗ Nama : Ergil
āā«¹ā«ŗ Hobby : Gombalin Km
āā«¹ā«ŗ Status : Punya Elfi
āā«¹ā«ŗ Birthday : 2022
āā«¹ā«ŗ Address : Kimochi
āāāāāāāāāāāāāāāāāāāĀ·ā¢

āāāāāāāāā¢ *SKILLS*
ā> Imut [50%]
ā> Ganteng [98%]
ā> Lucu [99%]
āāāāāāāāāāāāāāāāāāāĀ·ā¢\n`
}

global.thumb = fs.readFileSync('./media/me.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})