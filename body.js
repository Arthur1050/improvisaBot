// NPM's
const rmaccents = require('remove-accents')
const {decryptMedia, getConfigFromProcessEnv} = require('@open-wa/wa-automate')
const chalk = require('chalk')
const moment = require('moment-timezone')
const momentTIme = require('moment')
const sharp = require('sharp')
const malScraper = require('mal-scraper')
const translator = require('@vitalets/google-translate-api')
const {get, default: axios} = require('axios')
const requestJoke = require('one-liner-joke')
const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')
const fs = require('fs')

//Interruptores
var photoprocess = 0; var linkprocess = 0; var travando =0; var piada = 0; var song = 0

//Avulsos
const text = require('./lib/text/textsend.js');
const { Color, yellow } = require('chalk');
const { width, height } = require('@open-wa/wa-automate/dist/config/puppeteer.config')
const { fit, format } = require('sharp')
const RGB = (texto, Color) => {return !Color ? chalk.green(texto) : chalk.keyword(Color)(texto)}

/*function formatTemp (temps){
    var tempToSeconds = temps/60
    if (!Number.isInteger(tempToSeconds)){
        var segundos = tempToSeconds.slice(2)/100*60
        tempToSeconds = `${tempToSeconds}:${segundos}`
    }
    return tempToSeconds
}*/

module.exports = corpo = async (bot, menssagem) => {
         const {type, id, from, t, sender, author, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList} = menssagem
         let {body} = menssagem
         const Dono = "553499532444@c.us"
         //Type: Tipo da mensagem. Ex: Voice, video, image, location, etc...
         //Body: É o corpo da mensagem
         //Caption: É o texto que vem na lgenda de fotos e videos
         const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
         body = (type === 'chat' && body.startsWith('/')) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith('/')) ? caption : ''
         meio = body.slice(1).trim().split(/ +/).shift().toLowerCase()
         comando = rmaccents(meio)
    try {

        let {pushname, verifiedName, formattedName} = sender
        pushname = pushname || verifiedName || formattedName
        const arrayMsg = body.slice(1).trim().split(/ +/)
        const textRest = body.trim().slice(body.indexOf(' ') + 1)        
        //constantes

        const uaOverride = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
        const numeBot = await bot.getHostNumber()
        const {name, formattedTitle} = chat
        const user = sender.id
        const idGroup = isGroupMsg ? chat.groupMetadata.id : ''
        const ademesGroup = isGroupMsg ? await bot.getGroupAdmins(idGroup) : ''
        const isAdemesGroup = isGroupMsg ? ademesGroup.includes(user) : false
        const isBotAdeme = isGroupMsg ? ademesGroup.includes(numeBot + '@c.us') : false
        const isComando = body.startsWith('/')
        const isTravaZap = type === 'oversized'
        const isDono = Dono.includes(user)
        const isImagem = type === 'image'
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isVideo = type === 'video'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isGif = type === 'gif'
        const isQuotedGif = quotedMsg && quotedMsg.type === 'gif'
        const isVoice = type === 'audio'
        

        //Anti Pornografia (INACABADO)
        /*if (isGroupMsg && !isAdemesGroup && isBotAdeme && isMedia && isImagem && !isComando && !isDono && photoprocess == 0) {
            try{
               photoprocess = 1
               console.log('Procurando por conteudo pornografico em imagem...')
               const photoData = await decryptMedia(menssagem, uaOverride)
            }
        }*/ 

        if (isGroupMsg && !isAdemesGroup && isBotAdeme && !isDono && linkprocess == 0) {
            try {
                if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))){
                    linkprocess = 1; 
                    const msgLink = await bot.inviteInfo(chats)
                    console.log(msgLink)
                    if (msgLink && !msgLink.owner === '553499532444@c.us') {
                        console.log('Um link de outro grupo foi detectado...')
                        await bot.sendTextWithMentions( from, text.sendConviteLink(user))
                        await bot.removeParticipant(idGroup, user).then(async () => {bot.sendText(from, text.warn()); return linkprocess = 0})                    }
                    else { console.log('Link de grupo invalido recebido'); linkprocess = 0}
                }
            }
            catch (err) {console.log(err)}
        }

        if (isTravaZap && isGroupMsg && !isDono && isBotAdeme && travando === 0) {
            try{
                travando = 1
                console.log('Ataque de travazap')
                let admAlert = 'TEM ZÉ TRAVINHA AQUI Ô ADM KKK\n\n'
                let destravando = ''
                for (let i = 0; i < 20; i++) {destravando += `⡴⠑⡄⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀\n⡇⠀⠿⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀\n⠀⠀⠀⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆\n⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆\n⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢴⣆ \n⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⡿ \n⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉\n⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁\n⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉\n\n`}
                for (let admMount of ademesGroup) {admAlert += `-> @${admMount.replace(/@c.us/g, '')}\n`}
                await bot.removeParticipant(idGroup, user).then(async () => {await bot.setGroupToAdminsOnly(idGroup, true)})
                await bot.sendText(from, destravando, id).then(async () => {await bot.sendTextWithMentions(from, admAlert)})
                await bot.sendText(from, text.zetravinha()).then(async () => {await bot.sendText(from, text.calm(), id)})
                await bot.sendText(Dono, text.randomTrava(user) + `\n*Grupo:* ${name}`).then(async () => {bot.contactBlock(user)})
                //await bot.revokeGroupInviteLink(idGroup).then(async () => {await bot.sendText(text.revokeLink())})
                await bot.setGroupToAdminsOnly(idGroup, false); return travando = 0
            } catch(err) {console.log(err); return travando = 0}
        }

        if (!isGroupMsg && !isComando) {await bot.reply(from, 'Olá, isso não é um comando.\nCertifique-se de que esteja colocando o "/" no começo.\nUse /menu para mais informações.\nExemplo:', id).then(async () => {bot.sendText(from, '/menu')})}

        if (!isGroupMsg && !isDono && isTravaZap) {await bot.contactBlock(user).then( async () => { bot.sendText(Dono, text.randomTrava(user)) }) }
        
        //Pv message
        if (!isComando && !isGroupMsg) {return console.log('SMS(PV) [', RGB(moment(t * 1000).format('DD/MM/YY HH:mm:ss', yellow)), `] -> `, RGB(`${pushname} - (${user.replace('@c.us', '')})`))}

        //Group message
        if (!isComando && isGroupMsg) {return console.log('SMS(GRUPO) [ ', RGB(moment(t * 1000).format('DD/MM/YY HH:mm:ss', 'yellow')), ` ] ->`, RGB(`${pushname} - (${user.replace('@c.us', '')})`))}

        //Pv Command
        if (isComando && !isGroupMsg) {console.log('COMANDO(PV) [ ', RGB(moment(t * 1000).format('DD/MM/YY HH:mm:ss', 'yellow')), ` ] -> `, RGB(`${pushname} - (${user.replace('@c.us', '')})`))}

        //Group command
        if (isComando && isGroupMsg) {console.log('COMANDO(GRUPO) [ ', RGB(moment(t * 1000).format('DD/MM/YY HH:mm:ss', 'yellow')), ` ] ->`, RGB(`${pushname} - (${user.replace('@c.us', '')})`))}

        switch(comando) {

            case 'sticker':; case 'fig':; case 's':; case 'figurinha':; case 'stiker':; case 'gif':; case 'g':
                const sharping = async (dataMedia, mimetype) =>{await sharp(dataMedia).resize({width: 512, height: 512, fit: 'fill'}).toBuffer().then(async (resizedImage) => {await bot.sendImageAsSticker(from, `data:${mimetype};base64,${resizedImage.toString('base64')}`, {author: 'Testando', pack: 'Testando', keepScale: true, circle: false }) }) }
                if (isMedia && isImagem || isQuotedImage) {
                    await bot.reply(from, text.aguarde(), id)
                    const messageFigu = quotedMsg? quotedMsg : menssagem
                    const messageMimetype = quotedMsg? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(messageFigu, uaOverride)
                    await bot.sendImageAsSticker(from, `data:${messageMimetype};base64,${mediaData.toString('base64')}`, {author: '@arthur_tm_', pack: '🌌𝙸𝚖𝚙𝚛𝚘𝚟𝚒𝚜𝚊𝚍𝚘🌌', keepScale: true, circle: false})
                }
                else if (isMedia && isVideo || isGif || isQuotedVideo || isQuotedGif) {
                    await bot.reply(from, text.aguarde(), id)
                    mp4crypt = isQuotedGif || isQuotedVideo? quotedMsg : menssagem
                    const mediaData = await decryptMedia(mp4crypt, uaOverride)
                    bot.sendMp4AsSticker(from, mediaData, null, {stickerMetaData: true, pack: '🌌𝙸𝚖𝚙𝚛𝚘𝚟𝚒𝚜𝚊𝚍𝚘🌌', author: '@arthur_tm_', fps: 10, crop: false, loop: 0 }).catch(async () => {bot.reply(from, 'Não foi possível produzir esse sticker. Tente reduzir o tamanho do vídeo.', id)})
                }
            break

            case 'ban':; case 'kick':
                if (isGroupMsg){
                    const isNulltext = await mentionedJidList.length == 0
                    if (!isAdemesGroup) {return bot.reply(from, 'Esse é um comando apenas para admins.', id)}
                    if (!isBotAdeme) {return bot.reply(from, text.noSoyAdm(), id)}
                    if (arrayMsg[1] == 'help') {return await bot.sendFileFromUrl(from, 'https://i.ibb.co/wppf0t8/imagem-2021-07-20-221518.png', 'banHelp.png', text.banHelp(), id), bot.sendFileFromUrl(from, 'https://i.ibb.co/ThDQ4X3/imagem-2021-07-20-222714.png', 'banHelp.png', text.banHelp2())}
                    if (!quotedMsg && isNulltext) {return bot.reply(from, 'Marque alguém ou selecione uma mensagem', id)}
                    if (isAdemesGroup, isBotAdeme, quotedMsg || !isNulltext) {
                        try {
                            const mentionRest = await textRest.slice(textRest.indexOf(' ') + 1) //Se tiver alguém mencionado, é armazenado o texto pós menção na variavél "mentionRest"
                              if(!quotedMsg) {var motivo = arrayMsg.length == 2? 'Não declarado' : mentionRest} else {var motivo = arrayMsg.length == 1? 'Não declarado' : textRest} // Se declado, armazena o motivo na variavél "motivo". Senão for declarado, armazena "Não declarado", na variavél "motivo".
                              if(quotedMsg) {var banido = await quotedMsg.sender.pushname} else {let banidoMencion = await bot.getContact(mentionedJidList[0]); var banido = banidoMencion.pushname} // Pega o nome banido e armazena na varivel "banido"
                            const alvo = await quotedMsg ? quotedMsg.author : mentionedJidList[0]
                            await bot.removeParticipant(idGroup, alvo).then(async () => { await bot.reply(from, text.finish(banido, motivo), id) })
                        } catch (err) { bot.reply(from, text.fail(), id); console.log(err) }
                    }
                }
                else return bot.reply(from, text.cmdGroups(), id)
            break


            case 'unban':; case 'unkick':
                if(isGroupMsg){
                    if(!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if(arrayMsg[1] == 'help') {return bot.sendFileFromUrl(from,'https://i.ibb.co/3NhBRrB/imagem-2021-07-20-225038.png', 'unbanHelp.png', text.unbanHelp(), id)}
                    if(!quotedMsg) return bot.reply(from, 'Marque a mensagem de quem queira retornar ao grupo.', id)
                    if (quotedMsg) {
                        try{
                            await bot.addParticipant(idGroup, quotedMsg.author).then(async () => {await bot.sendTextWithMentions(from, text.unBan(quotedMsg.author))})
                        }catch(err) {bot.reply(from, text.fail(), id), console.log(err)}
                    }
                }
                else return bot.reply(from, text.cmdGroups(), id)
            break

            case 'menu':
                bot.reply(from, text.menu(), id)
            break

            case 'mod':
                if (isAdemesGroup){
                if (isGroupMsg) {bot.reply(from, text.mod(), id)} else bot.reply(from, text.cmdGroups(), id)
            }else return bot.reply(from, 'Você não é adm.', id)

            break

            case 'apagar':
                if (!isGroupMsg){
                    await bot.reply(from, 'É pra já!!', id)
                    await bot.clearChat(from)
                    await bot.sendText(from, 'Feito!')
                }
                else bot.reply(from, 'Apenas para chats privados.', id)
            break

            case 'revoke':; case 'redefinir':
                if (isGroupMsg){
                    if(!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    await bot.revokeGroupInviteLink(idGroup).then(async () => {await bot.reply(from, 'Link redefinido!', id)})
                }
                else bot.reply(from, 'Comando exlusivo para grupos.', id)
            break

            case 'promover':; case 'promote':; case 'coroar':
                if(isGroupMsg){
                    const noMentions = mentionedJidList.length == 0
                    if(!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if(noMentions && !quotedMsg) return bot.reply(from, 'Marque alguém ou selecione a mensagem do alvo', id)
                    const promotor = await quotedMsg? quotedMsg.author : mentionedJidList[0]
                    if(ademesGroup.includes(promotor)) return bot.reply(from, 'Esse membro já é um ADM', id)
                    await bot.promoteParticipant(idGroup, promotor).then(async () => {await bot.sendTextWithMentions(from, `Parabéns pela promoção @${promotor}. Conte comigo para o que precisar!`)})
                }
                else bot.reply(from, 'Comando exclusivo para grupos', id)
            break

            case 'rebaixar':; case 'demote':
                if (isGroupMsg){
                    const noMentions = mentionedJidList.length == 0
                    if(!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if(noMentions && !quotedMsg) return bot.reply(from, 'Marque alguém ou selecione a mensagem do alvo', id)
                    const demote = await quotedMsg? quotedMsg.author : mentionedJidList[0]
                    if(!ademesGroup.includes(demote)) return bot.reply(from, 'Membro já se encontra como comum', id)
                    if(demote == Dono) return bot.reply(from, 'Impossivél rebaixar o cafetão😎')
                    await bot.demoteParticipant(idGroup, demote).then(async () => {await bot.sendTextWithMentions(from, `Você será eternamente lembrado como adm @${demote} ...`)})
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'anime':
                var animeMsg = textRest
                console.log(textRest)
                const anime = await malScraper.getInfoFromName(animeMsg).then(async (data) => { return data })
                var animeImage = await anime.picture
                await translator(anime.synopsis, { client: 'gtx', to: 'pt' }).then( async (res) => {
                    await bot.sendFileFromUrl(from, animeImage, 'anime.jpg', `*Titulo:* ${anime.title}\n\n*Sinopse:* ${res.text}\n\n*Tipo:* ${anime.type}\n\n*Nº de eps:* ${anime.episodes}\n\n*Status:* ${anime.status}\n\n*Volumes:* ${anime.volumes}`, id)
                }).catch(err => {console.log(err)})
            break

            case 'lock':; case 'trancar':; case 'fechar':
                if(isGroupMsg){
                    if (!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if (!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    await bot.setGroupToAdminsOnly(idGroup, true)
                    await bot.reply(from, 'Apenas adms podem enviar mensagens.', id)
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'open':; case 'abrir':
                if (isGroupMsg){
                    if (!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    await bot.setGroupToAdminsOnly(idGroup, false)
                    await bot.reply(from, 'Baderna liberada de volta', id)
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'setimage':
                if(isGroupMsg){
                    if(!isAdemesGroup) return bot.reply(from, text.isMembroComum(), id)
                    if(!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if(!isMedia && !isImagem && !isQuotedImage) return bot.reply(from, 'Envie ou marque uma imagem')
                    const image = await isQuotedImage? quotedMsg : menssagem
                    const imagetype = await image.mimetype
                    const imagedecrypt = await decryptMedia(image, uaOverride)
                    const image64 = await `data:${imagetype};base64,${imagedecrypt.toString('base64')}`
                    await bot.setGroupIcon(idGroup, image64).then(async () => {bot.reply(from, 'Perfil atualizado com sucesso!', id)})
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'piada2':
                const joke = await requestJoke.getRandomJokeWithTag('sarcastic',{'exclude_tags': ['life', 'rude']})
                console.log(joke.body)
                console.log(joke.tags)
                console.log(joke.tags.length)
                var tags = '_Tags:_ '
                for (var i = 0; i < joke.tags.length; i++) {tags += `_${joke.tags[i]},_ `}
                translator(joke.body, {client: 'gtx', to: 'pt'}).then( async (res) => {
                    const msg = await res.text + `\n\n${tags}`
                    await bot.reply(from, msg, id)
                })
            break

            case 'tempban': //Atualização necessária: Fazer com que seja possível banir membros em massa sem dar erro nos "Reply Error"
                if (isGroupMsg) {
                    if (!isAdemesGroup) { return bot.reply(from, text.isMembroComum(), id) }
                    if (!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if (arrayMsg[1] == 'help') {return await bot.sendFileFromUrl(from, 'https://i.ibb.co/bRmxHV7/imagem-2021-07-20-225713.png', 'tempbanHelp.png', text.tempbanHelp(), id), bot.sendFileFromUrl(from, 'https://i.ibb.co/4NrcmRW/imagem-2021-07-20-230151.png', 'tempbanHelp.png', 'Depois de 1 minuto, o bot automaticamente retorna o membro.')}
                    if (!quotedMsg && mentionedJidList.length == 0) { return bot.reply(from, 'Mencione ou marque a mensagem de alguém.', id) } //Reply Error
                    if (quotedMsg && arrayMsg.length > 2 || arrayMsg.length < 2) { return bot.reply(from, text.cmdError('Softban'), id) } //Reply Error
                    if (!quotedMsg && arrayMsg.length > 3 || arrayMsg.length < 3) { return bot.reply(from, text.cmdError('Softban'), id) } //Reply Error
                    const alvo = await quotedMsg ? quotedMsg.author : mentionedJidList[0]
                    const temp = await quotedMsg ? arrayMsg[1] : arrayMsg[2]
                    const tempFormat = await parseInt(temp)
                    if (Number.isNaN(tempFormat)) { return bot.reply(from, text.cmdError('Softban'), id) } //Reply Error
                    const awaitTemp = tempFormat * 60000
                    try {
                        await bot.removeParticipant(idGroup, alvo).then(async () => { await bot.reply(from, `Membro banido por ${temp} minuto(s)`, id) })
                        await setTimeout(() => { bot.addParticipant(idGroup, alvo).then(async () => { await bot.sendTextWithMentions(from, text.softban(alvo)) }) }, awaitTemp)
                    } catch (err) { bot.reply(from, 'Não foi possível completar a ação.', id); console.log(err) }
                } else { bot.reply(from, text.cmdGroups(), id) }
                break

            case 'add':
                if (isGroupMsg){
                    if (!isAdemesGroup) {return bot.reply(from, text.isMembroComum(), id)}
                    if (!isBotAdeme) {return bot.reply(from, text.noSoyAdm(), id)}
                    if (arrayMsg.length == 1) {return bot.reply(from, text.cmdError('Add'), id) }
                    if (isNaN(arrayMsg[1])) {return bot.reply(from, text.cmdError('Add'), id)}
                    const membro = await arrayMsg[1] + '@c.us'
                    console.log(membro)
                    try {
                        bot.addParticipant(idGroup, membro)
                    } catch (err) { bot.reply(form, 'Não foi possível completar a ação.', id) }
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'piada':
                if (piada == 0) {
                    piada = 1
                    var options = {
                        method: 'GET',
                        url: 'https://jokeapi-v2.p.rapidapi.com/joke/Any',
                        params: {
                            type: 'twopart',
                            format: 'json',
                            lang: 'en',
                            flags: {
                                nsfw: 'fasle',
                                racist: 'false'
                            }
                        },
                        headers: {
                            'x-rapidapi-key': '8299cf66damsh643f877ad4e03d0p10fabcjsn174e5c373432',
                            'x-rapidapi-host': 'jokeapi-v2.p.rapidapi.com'
                        }
                    }
                    var joke2 = await axios.request(options).then((res) => { return res.data }).catch((err) => { return bot.reply(from, 'Tive algumas complicações... Use o comando novamente', id), piada = 0 })
                    var setupPt = await translator(joke2.setup, { client: 'gtx', to: 'pt' }).then((res) => { return res.text })
                    var deliveryPt = await translator(joke2.delivery, { client: 'gtx', to: 'pt' }).then((res) => { return res.text })
                    await bot.reply(from, setupPt, id).then(async () => { bot.sendText(from, deliveryPt) })
                    piada = 0
                } else bot.reply(from, 'Já estou gerando uma. Aguarde...', id)
            break

            case 'ideia':
                if (arrayMsg.length = 1) {return bot.reply(from, 'Comando incompleto.', id)}
                bot.sendText(Dono, `*IDEIA PARA O BOT*\n\n*Ideia:* "${textRest}"\n_De:_ ${pushname} | wa.me/+${user.replace('@c.us', ' ')}\n_Do grupo:_ ${name}`).then(() => {bot.reply(from, 'Sua ideia foi recebida com sucesso!', id)})
            break

            case 'song':
                if (arrayMsg.length == 1) {return bot.reply(from, 'Comando incompleto!', id)}
                if (song == 1) {return bot.reply(from, 'Já estou baixando um.\nTente novamente daqui a pouco.', id)}
                try {
                    song = 1
                    const resyt = await ytSearch(textRest).then((resyt) => { return resyt })
                    const songUrl = resyt.videos[0].url
                    const infoSong = await ytdl.getInfo(songUrl)
                    const basicInfoSong = await ytdl.getBasicInfo(songUrl)
                    var titleSong = basicInfoSong.videoDetails.title
                    var tempSong = basicInfoSong.videoDetails.lengthSeconds
                    var viewsSong = basicInfoSong.videoDetails.viewCount
                    var dateSong = basicInfoSong.videoDetails.publishDate
                    var urlThumbSong = basicInfoSong.videoDetails.thumbnails[4].url
                    if (parseInt(tempSong) > 300) {return bot.reply(from, 'Musica maior que 5 minutos🥵.', id)}
                    await bot.sendFileFromUrl(from, `${urlThumbSong}`, `${titleSong}`, text.infoSongRequest(titleSong, tempSong, dateSong, viewsSong), id)
                    const writeStrem = await ytdl.downloadFromInfo(infoSong, { quality: 'highestaudio', filter: 'audioonly' }).pipe(fs.createWriteStream(`${titleSong}.mp3`, { encoding: 'base64' }))
                       await writeStrem.on('finish', async () => { 
                           await bot.sendPtt(from, `${titleSong}.mp3`, id)
                           await bot.sendFile(from, `${titleSong}.mp3`, `${titleSong}.mp3`, null)
                           fs.rm(`${titleSong}.mp3`, {recursive:true}, ()=>{console.log('Arquivo excluido')}) })
                           song = 0
                       writeStrem.on('error', () => { bot.reply(from, 'Houve um erro com o download...\nTente novamente.', id), song = 0 })
                       console.log(writeStrem.writableFinished)
                       setTimeout(() => { console.log(writeStrem.writableFinished) }, 5000)
                } catch (err) {return console.log(err), song = 0 }
            break

            case 'clean':
                if (isDono) {await bot.clearAllChats().then(async () => {await bot.reply(from, 'Limpeza concluida!', id)}).catch(async (err) => {bot.reply(from, 'Algo deu errado na execução do processo', id), console.log(err)})
                } else {bot.reply(from, 'Comando exclussivo do dono', id)}
            break

            case 'snaptube':
                bot.reply(from, text.snaptube(), id)
            break
        }
    }catch(err) {console.log(err)}
}