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
const fs = require('fs-extra')
const HTML = require('parse5')
const request = require('request')
const atualizacaoBot = require('./src/att')
const cheerio = require('cheerio')

//Interruptores
var photoprocess = 0; var linkprocess = 0; var travando =0; var piada = 0; var song = 0

//Avulsos
const text = require('./src/textsend');
const { Color, yellow } = require('chalk');
const { width, height } = require('@open-wa/wa-automate/dist/config/puppeteer.config')
const { fit, format } = require('sharp')
const { xml } = require('cheerio/lib/static')
const { each } = require('cheerio/lib/api/traversing')
const { number } = require('sharp/lib/is')
const RGB = (texto, Color) => {return !Color ? chalk.green(texto) : chalk.keyword(Color)(texto)}
const matchArray = []

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
         //Caption: É o texto que vem na lgenda de fotos e 
         const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
         body = (type === 'chat' && body.startsWith('/')) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith('/')) ? caption : ''
         meio = body.slice(1).trim().split(/ +/).shift().toLowerCase()
         comando = rmaccents(meio)
    try {

        let {pushname, verifiedName, formattedName} = sender
        pushname = pushname || verifiedName || formattedName
        var arrayMsg = body.slice(1).trim().split(/ +/)
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
        const isQuotedMsg = quotedMsg == null? false : true
        

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
                if (!isGroupMsg){ return bot.reply(from, text.cmdGroups(), id)}

                //Reporta o banimento ao juri
                async function reportJuri(autor, alvo, grupo, motivo, alvoNum) {
                    let admGroup = await JSON.parse(fs.readFileSync('./lib/jsons/admGroup.json'))

                    await bot.sendTextWithMentions(admGroup[0], `Banimento no grupo ${grupo}\n\n*ADM:* _@${autor.replace('@c.us', '')}_\n*Alvo:* _${alvo}_\n*Alvo cntt:* wa.me/+${alvoNum.replace('@c.us', '')}\n\n*Motivo:* _${motivo}_`)

                }
                    const isNulltext = await mentionedJidList.length == 0
                    const groupInfo = await bot.getGroupInfo(from)
                    if (!isAdemesGroup) {return bot.reply(from, 'Comando exclusivo dos adms.', id)}
                    if (!isBotAdeme) {return bot.reply(from, text.noSoyAdm(), id)}
                    // Instruções do comando
                    if (arrayMsg[1] == 'help') {return await bot.sendFileFromUrl(from, 'https://i.ibb.co/wppf0t8/imagem-2021-07-20-221518.png', 'banHelp.png', text.banHelp(), id), bot.sendFileFromUrl(from, 'https://i.ibb.co/ThDQ4X3/imagem-2021-07-20-222714.png', 'banHelp.png', text.banHelp2())}
                    if (!quotedMsg && isNulltext) {return bot.reply(from, 'Marque alguém ou selecione uma mensagem', id)}

                    try {
                        const posMencao = await textRest.slice(textRest.indexOf(' ') + 1)

                        // Pegando o motivo do banimento
                        if(!quotedMsg) {
                            var motivo = arrayMsg.length == 2? 'Não declarado' : posMencao
                        } 
                        else {
                            var motivo = arrayMsg.length == 1? 'Não declarado' : textRest
                        }
                        // Pega o nome do banido
                        if(quotedMsg) {
                            var banido = await quotedMsg.sender.pushname
                        } else {
                            let banidoMencion = await bot.getContact(mentionedJidList[0]); var banido = banidoMencion.pushname
                        }
                        
                        const alvo = await quotedMsg ? quotedMsg.author : mentionedJidList[0]
                        await bot.removeParticipant(idGroup, alvo).then(async () => { 
                        await bot.reply(from, text.finish(banido, motivo), id)

                        reportJuri(author, banido, groupInfo.title, motivo, alvo ) 
                        })

                } catch (err) { bot.reply(from, text.fail(), id); console.log(err) }
                
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

            case 'setname':
                if (isDono) {
                    var nameBot = ''
                    for (i in arrayMsg) {i++; if (i == arrayMsg.length) {nameBot = nameBot} else {nameBot = nameBot + ' ' + arrayMsg[i]}}
                    bot.setMyName(nameBot).then(()=>{bot.reply(from, 'Nome alterado com sucesso!!', id)}).catch(() => {bot.reply(from, 'Houve algum problema no procedimento...', id)})
                }
                else {bot.reply(from, 'Comando restrito.', id)}
            break

            case 'menu':
                bot.reply(from, text.menu(), id)
            break

            case 'diversao':
                bot.reply(from, text.diversao(), id)
            break

            case 'mod':
                if (isGroupMsg){
                    if (isAdemesGroup) {bot.reply(from, text.mod(), id)} else bot.reply(from, 'Você não é adm.', id)
                }else return bot.reply(from, text.cmdGroups(), id)
            break

            case 'dono':
                if (!isDono) return bot.reply(from, 'Você não tem permissão pra isso.', id)
                bot.reply(from, text.dono(), id)
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

            case 'tempban': //Atualização necessária: Fazer com que seja possível banir membros em massa sem dar erro nos "Reply Error"
                if (isGroupMsg) {
                    if (!isAdemesGroup) { return bot.reply(from, text.isMembroComum(), id) }
                    if (!isBotAdeme) return bot.reply(from, text.noSoyAdm(), id)
                    if (arrayMsg[1] == 'help') {return await bot.sendFileFromUrl(from, 'https://i.ibb.co/bRmxHV7/imagem-2021-07-20-225713.png', 'tempbanHelp.png', text.tempbanHelp(), id), bot.sendFileFromUrl(from, 'https://i.ibb.co/4NrcmRW/imagem-2021-07-20-230151.png', 'tempbanHelp.png', 'Depois de 1 minuto, o bot automaticamente retorna o membro.')}
                    if (!quotedMsg && mentionedJidList.length == 0) { return bot.reply(from, 'Mencione ou marque a mensagem de alguém.', id) } //Reply Error
                    if (isQuotedMsg && !arrayMsg.length == 2) { return bot.reply(from, text.cmdError('tempban'), id) } //Reply Error
                    if (!isQuotedMsg && !arrayMsg.length == 3) { return bot.reply(from, text.cmdError('tempban'), id) } //Reply Error
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
                    if (arrayMsg.length !== 2) {return bot.reply(from, text.cmdError('Add'), id) }
                    if (isNaN(arrayMsg[1])) {return bot.reply(from, text.cmdError('Add'), id)}
                    console.log(membro)
                    try {
                        const membro = await arrayMsg[1] + '@c.us'
                        bot.addParticipant(idGroup, membro)
                    } catch (err) { bot.reply(form, 'Não foi possível completar a ação.', id) }
                } else bot.reply(from, text.cmdGroups(), id)
            break

            case 'bat':
                if (!isDono) {return ot.reply(from, 'Comando exclusivo do dono.', id)}

                let batteryLevel = await bot.getBatteryLevel()

                bot.reply(from, `Bateria: ${batteryLevel}%`, id)
            break

            case 'ideia':
                if (arrayMsg.length == 1) {return bot.reply(from, 'Comando incompleto.', id)}
                bot.sendText(Dono, `*IDEIA PARA O BOT*\n\n*Ideia:* "${textRest}"\n_De:_ ${pushname} | wa.me/+${user.replace('@c.us', ' ')}\n_Do grupo:_ ${name}`).then(() => {bot.reply(from, 'Sua ideia foi recebida com sucesso!', id)})
            break

            case 'setadmgrupo':
                if (isDono && isGroupMsg) {
                    var admGroup = await JSON.parse(fs.readFileSync('./lib/jsons/admGroup.json'))
                    if (admGroup.length == 1) {admGroup.shift()}
                    admGroup.push(from) 
                    fs.writeFileSync('./lib/jsons/admGroup.json', JSON.stringify(admGroup))
                    bot.reply(from, 'Grupo definido como grupo dos adms.', id)
                }
                else {
                    bot.reply(from, "Comando restrito.")
                }
            break

            case 'anunciar':
                // Verifica se o arquivo anuncios.json existe e cria um caso não haja um
                function creatJson() {
                    processArgs()
                }

                //Separa a mensagem e as horas passadas no comando
                function processArgs() {
                    arrayMsg.shift()
                    var indexHora = arrayMsg.findIndex(hora => {return hora === '--horas'})
                    if (indexHora == -1) return bot.reply(from, 'Especifique um horario.', id)
                    var msgAnuncio = msg(indexHora, arrayMsg).trim()
                    indexHora++
                    if (arrayMsg[indexHora] == undefined) return bot.reply(from, 'Especifique um horario.', id)
                    var msgHoras = arrayMsg[indexHora]
                    writeAnuncio(msgAnuncio, msgHoras)
                }

                //Juntas as palavras do anuncia declarado no comando
                function msg(indexHora, anuncio) {
                    let msgAnuncio = ''
                    for (i in anuncio) {
                        if (i == indexHora) {break}
                        else {
                            msgAnuncio = msgAnuncio + ' ' + anuncio[i]
                        }
                    }
                    return msgAnuncio
                }

                //Adiciona ao arquivo anuncios.json a mensagem à ser anunciada e o horário
                async function writeAnuncio(anuncio, horas) {
                    var jsonAnuncio = await JSON.parse(fs.readFileSync('./lib/jsons/anuncios.json'))
                    await jsonAnuncio.push({
                        menssagem: anuncio,
                        hora: horas
                    })
                    fs.writeFileSync('./lib/jsons/anuncios.json', JSON.stringify(jsonAnuncio))
                }

                // Dá inicio ao procedimento
                creatJson()
            break

            case 'att':
                bot.reply(from, atualizacaoBot.atualizacao(), id)
            break

            case 'setgrupo':
                if (isDono && isGroupMsg) {
                    var grupoImprovisa = await JSON.parse(fs.readFileSync('./lib/jsons/grupo.json'))
                    if (grupoImprovisa.includes(from)) {return bot.reply(from, 'Esse grupo já foi adicionado.', id)}
                    grupoImprovisa.push(from) 
                    fs.writeFileSync('./lib/jsons/grupo.json', JSON.stringify(grupoImprovisa))
                    bot.reply(from, 'Grupo registrado.', id)
                }
                else {
                    bot.reply(from, 'Comando restrito.', id)
                }
            break

            case 'song':
                /*let songteste = await ytdl('https://www.youtube.com/watch?v=KwM4yOwMls4').
                songteste.on('resume', async (res) => { 
                    bot.sendFile(from, songteste,'songtest.mp3', ' ', id).catch((err)=>{console.log(err)})
                })*/
                if (arrayMsg.length == 1) {return bot.reply(from, 'Comando incompleto!', id)}
                if (song == 1) {return bot.reply(from, 'Já estou baixando um.\nTente novamente daqui a pouco.', id)}
                try {
                    const resyt = await ytSearch(textRest).then((resyt) => { return resyt })
                    const songUrl = resyt.videos[0].url
                    const infoSong = await ytdl.getInfo(songUrl)
                    const basicInfoSong = await ytdl.getBasicInfo(songUrl)
                    var titleSong = basicInfoSong.videoDetails.title
                    var tempSong = basicInfoSong.videoDetails.lengthSeconds
                    var viewsSong = basicInfoSong.videoDetails.viewCount
                    var dateSong = basicInfoSong.videoDetails.publishDate
                    var urlThumbSong = basicInfoSong.videoDetails.thumbnails[3].url
                    //console.log(basicInfoSong.videoDetails)
                        if (parseInt(tempSong) > 300) {return bot.reply(from, 'Musica maior que 5 minutos🥵.', id), song = 0}
                        song = 1
                        await bot.sendFileFromUrl(from, `${urlThumbSong}`, `${titleSong}`, text.infoSongRequest(titleSong, tempSong, dateSong, viewsSong), id)
                        const writeStrem = await ytdl.downloadFromInfo(infoSong, { quality: 'highestaudio', filter: 'audioonly' }).pipe(fs.createWriteStream(`${titleSong}.mp3`, { encoding: 'base64' }))
                        await writeStrem.on('finish', async () => { 
                            const readFile = await fs.readFileSync(`${titleSong}.mp3`)
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

            case 'ghost':
                if (!isAdemesGroup) {return bot.reply(from, 'Sem permissão para usar o comando.', id)}
                if (!isGroupMsg) {return bot.reply(from, text.cmdGroups(), id)}
                var msgGhost = '*「👻」Membros ghost:*\n\n';
                
                (async () => {
                    //Pega um array de membros com msg registrada e o segundo de membros presentes no grupo
                    var activeMembers = await JSON.parse(fs.readFileSync('./lib/jsons/msgCount.json'))
                    var arrayActiveMembers = []
                    for (let i in activeMembers) {arrayActiveMembers.push(activeMembers[i].id)}
                    var groupMembers = await bot.getGroupMembers(from)

                    for (let i in groupMembers) {
                        // Entra no laço 'se' caso um membro do grupo nn esteja no array de membros com msg registrada
                        if (!arrayActiveMembers.includes(groupMembers[i].id)) {
                            msgGhost = msgGhost + '@' + groupMembers[i].id.replace('@c.us', '') + '\n'
                        }

                    }
                    console.log(msgGhost)
                    await bot.sendTextWithMentions(from, msgGhost, id)
                })();

            break

            case 'snaptube':
                bot.reply(from, text.snaptube(), id)
            break

            case 'setperfil':
                if (!isDono) {return bot.reply(from, 'Você não parece ser meu dono🤔', id)}
                if (!isImagem && !isQuotedImage) {return bot.reply(from, 'Não foi enviado nem marcado nenhuma imagem.', id)}
                    var perfilRequest = quotedMsg? quotedMsg : menssagem
                    var perfilBuff = await decryptMedia(perfilRequest, uaOverride)
                    var perfilbase64 = await perfilBuff.toString('base64')
                    var perfilMime = await quotedMsg? quotedMsg.mimetype : mimetype
                    await bot.setProfilePic(`data:${perfilMime};base64,${perfilbase64}`).then(async () => {await bot.reply(from, 'Perfil alterado com sucesso!', id)})
            break

            case 'setstatus':
                if (!isDono) {return bot.reply(from, 'Comando exclusivo do dono.', id)}
                bot.setMyStatus(textRest).then(() => {bot.reply(from, 'Status alterado com sucesso!', id)})
            break

            case 'eununca':
                const $eununca = await axios.get('https://www.dicionariopopular.com/perguntas-eu-nunca-jogo/').then(async (res) =>{
                    return cheerio.load(res.data)
                })

                var eununcaArray = []
                $eununca('ol li').each((index, element) => {
                    eununcaArray.push($eununca(element).text()) 
                })

                eununcaArray.splice(0, 2)
                let randomIndex = Math.floor(Math.random() * eununcaArray.length)
                bot.reply(from, eununcaArray[randomIndex], id)

            break

            case 'hi':
                if (arrayMsg.length == 1) {return bot.reply(from, 'Vamos, diga algo...\n\n"/hi *(MENSAGEM)*)"', id)}
                var optionssimsimi = {
                    method: 'GET',
                    url: 'https://api.simsimi.net/v1',
                    params:{
                        text:`${textRest}`,
                        lang:'pt'
                    }
                    }
                    axios.request(optionssimsimi).then((res)=>{
                        console.log(res.data)
                        bot.reply(from, `${res.data.success}`, id)
                    })
            break

            case 'bklist':
                //if (!isGroupMsg) {return bot.reply(from, text.cmdGroups(), id)}
                //if (!isAdemesGroup) {return bot.reply(from, 'Exclussivo para adms.', id)}
                try {
                    const bkList = await JSON.parse(fs.readFileSync('./lib/jsons/bkList.json'))
                    const bkMember = arrayMsg[1] + '@c.us'
                    var bkListContent = '📓 ≫ Numeros adicionado à lista negra:\n'

                    // if que envia a lista negra caso o segundo argumento do comando for "list"
                    if (arrayMsg[1] == 'lista') { 
                        for (let i = 0; i < bkList.length;) { bkListContent = bkListContent + `\n*${i} )* ` + `_${bkList[i].replace('@c.us', '')}_`; i++ }
                        return bot.reply(from, bkListContent, id)
                    }

                    // if para remover um numero do bklist
                    if (arrayMsg[1] == 'apagar') {
                        let arrayPosition = parseInt(arrayMsg[2])
                        if (isNaN(arrayMsg[2])) {return bot.reply(from, 'Isso não é um numero', id)}
                        bkList.splice(arrayMsg[2], 1)
                        bot.reply(from, 'Item removido da listinha.', id)
                        return await fs.writeFileSync('./lib/jsons/bkList.json', JSON.stringify(bkList))
                    }

                    await bkList.push(`${bkMember}`)
                    await fs.writeFileSync('./lib/jsons/bkList.json', JSON.stringify(bkList))
                    bot.reply(from, 'Numero adicionado à lista negra com sucesso!', id)
                } catch (err) { bot.reply(from, 'Houve um problema ao executar a ação.', id) }

            break

            case 'charada':
                const $charada = await axios.get('https://www.osvigaristas.com.br/charadas/').then(res => {
                    return cheerio.load(res.data)
                })
                var charadaArray = []

                $charada('.riddle').each((index, element) => {
                    let charadaPergunta = $charada('.question', element).text()
                    let charadaResposta = $charada('.hidden', element).text()
                    charadaArray.push({
                        pergunta: charadaPergunta,
                        resposta: charadaResposta
                    })
                })

                let indexCharada = Math.floor(Math.random() * charadaArray.length)

                await bot.reply(from, charadaArray[indexCharada].pergunta, id)
                setTimeout(()=>{bot.sendText(from, charadaArray[indexCharada].resposta)}, 2000)

            break

            case 'piada':
                bot.reply(from, 'Um momento, essa vai ser boa!', id)
                var arrayPiada = []
                
                for (let i = 1; i <=10; i++) {
                    const $piada = await axios.get(`https://www.osvigaristas.com.br/piadas/curtas/pagina${i}.html`).then((res => {
                        return cheerio.load(res.data)
                    }))

                    $piada('.item-index .row').each((index, element) => {
                        var piadaScore = $piada('.vote_score__2c2Yx', element).text()

                        if (piadaScore >= 50) {
                            var piadaTitle = $piada('h4 [href]', element).text()
                            var piada = ''

                            $piada('.joke p', element).each((indexP, elementP) => {
                                return piada = piada + $piada(elementP).text()
                            })

                            arrayPiada.push({
                                tittle: piadaTitle,
                                piada: piada
                            })
                        }
                    })
                }
                let piadaLenght = arrayPiada.length
                let randomIndexPiada = Math.floor(Math.random() * piadaLenght)

                bot.reply(from, `*${arrayPiada[randomIndexPiada].tittle}*\n\n${arrayPiada[randomIndexPiada].piada}`, id)
            break

            case 'meme':
                var arrayMeme = []
                bot.reply(from, 'Buscando meme...', id)

                for (let i = 1; i < 4; i++) {
                    let url = await 'https://br.ifunny.co/top-memes/month/page' + i
                    const $meme = await axios.get(url, {headers:{'User-Agent' : uaOverride}}).then((res) => {
                        return cheerio.load(res.data)
                    })

                    $meme('._3ZEF').each((index, element) =>{
                        var imageMeme = $meme('img', element).attr('data-src')

                        if (!(imageMeme == undefined)) {
                            arrayMeme.push(imageMeme)
                        }
                    })
                }
                let randomIndexMeme = await Math.floor(Math.random() * arrayMeme.length)
                
                bot.sendFileFromUrl(from, arrayMeme[randomIndexMeme], 'Bot_Improvisado_Memes_@arthur_tm_.jpeg', '_Memes do iFunny_')
            break

            case 'mensagens':
                if (!isGroupMsg) {return bot.reply(from, 'Comando exclusivo para grupos.', id)}

                const parsedMsg = await JSON.parse(fs.readFileSync('./lib/jsons/msgCount.json'))
                const groupMembersScore = await bot.getGroupMembers(from)
                var groupMembersScoreIds = []
                for (let i in groupMembersScore) {groupMembersScoreIds.push(groupMembersScore[i].id)}
                var positionScore = 1

                parsedMsg.sort((a, b) => {
                    if (a.msgs > b.msgs) {
                        return -1
                    }
                    else {
                        return 1
                    }
                })

                var scoreMsg = '*PLACAR DE MENSAGENS*\n\n'

                for (let i in parsedMsg) {

                    if (i > 0) {

                        if (groupMembersScoreIds.includes(parsedMsg[i].id)){

                            var memberScore = await bot.getContact(parsedMsg[i].id)
                            var nameScore = await memberScore == null? '@' + parsedMsg[i].id.replace('@c.us', '') : memberScore.pushname || memberScore.verifiedName
                            nameScore = nameScore == undefined? '@' + parsedMsg[i].id.replace('@c.us', ''): nameScore

                            scoreMsg = positionScore == 1? scoreMsg + '🏅 ': scoreMsg
                            scoreMsg = positionScore == 2? scoreMsg + '\n🥈 ': scoreMsg
                            scoreMsg = positionScore == 3? scoreMsg + '\n🥉 ': scoreMsg
                            scoreMsg = positionScore == 4? scoreMsg + '\n': scoreMsg
                            positionScore++

                            scoreMsg = scoreMsg + `*${nameScore}*\n⤷_${parsedMsg[i].msgs} Mensagens_\n`
                        }
                    }
                }

                console.log(scoreMsg.includes('@'))
                if (scoreMsg.includes('@')) {
                    bot.sendTextWithMentions(from, scoreMsg + '\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_')
                }
                else {
                    bot.sendText(from, scoreMsg + '\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_')
                }

            break

            case 'corno':
                if (!isGroupMsg) {return bot.reply(from, 'Comando exclusivo para grupos.', id)}

                async function amigoCorno() {
                    let chanceTregua = Math.floor( Math.random() * 100)
                    console.log(chanceTregua)

                    if (chanceTregua <= 15) {
                        bot.sendText(from, 'Pq zoar o amiguinho corno sendo que ele foi o único fiel da relação?😓')
                    }
                }

                async function cornaoGuerreiro() {
                    let membrosCornos = await bot.getGroupMembers(from)
                    let indexCorno = Math.floor(Math.random() * membrosCornos.length)
                    let randomCorno = await bot.getContact(membrosCornos[indexCorno].id)

                    if (randomCorno.isMe == false) {
                        let picCorno = await randomCorno.profilePicThumbObj.img == undefined || null? "https://i.imgur.com/engkEFm.jpg" : await bot.getProfilePicFromServer(randomCorno.id)
                        await bot.sendFileFromUrl(from, picCorno, "cornãoGuerreiro.jpg", `「🦬」 @${randomCorno.id.replace('@c.us', '')} foi condecorado à *Cornão Guerreiro(a)* pelo(a) @${sender.id.replace('@c.us', '')}`, id)

                        amigoCorno()
                    }
                    else {cornaoGuerreiro()}
                }

                cornaoGuerreiro()
            break

            case 'conselho':
                const conselhoGroup = await JSON.parse(fs.readFileSync('./lib/jsons/conselhoGroup.json'))
                await conselhoGroup.push(from)
                fs.writeFileSync('./lib/jsons/conselhoGroup.json', JSON.stringify(conselhoGroup))
                bot.reply(from, 'Grupo do conselho registrado.', id)
            break

            case 'match':
                if (!isGroupMsg) {return bot.reply(from, 'Comandos exclusivo pra grupos', id)}

                // Verifica se o sender é um match recente
                function recentMatch(autor) {

                    if (matchArray.includes(autor)) {
                        return true
                    }
                    // Caso não for recente, armazena no matchArray e programa para ser removido dps de 1 hora
                    else {
                        matchArray.push(autor)
                        setTimeout(()=> {
                            let index = matchArray.findIndex(e => e == autor)
                            matchArray.splice(index, 1)
                        }, 60 * 60000)
                    }
                }

                async function tinderMatch() {

                    if (!recentMatch(sender.id)){
                        let searchMemberMatch = await bot.getGroupMembers(from)
                        let indexMatch = Math.floor(Math.random() * searchMemberMatch.length)
                        let randomMatch = await bot.getContact(searchMemberMatch[indexMatch].id)


                        if (randomMatch.isMe == false) {
                            bot.sendFileFromUrl(from, "https://i.imgur.com/plzsH7o.png", 'matchImprovisado.jpg', 
                            `「❤️‍🔥」\n @${sender.id.replace('@c.us', '')} « deu *MATCH*❤️ com » @${randomMatch.id.replace('@c.us', '')}`, id)
                        }
                        else {tinderMatch()}
                    }
                    else {
                        bot.reply(from, '_Primeiro troque ideia com seu match recente um pouco_ :)', id)
                    }
                }

                tinderMatch()
            break

            case 'test':
                const verifiedFaceGroup = require('./src/faceGroup.js')

                verifiedFaceGroup.verification()
            break

            case 'perfil':
                if (!isGroupMsg) {return bot.reply(from, 'Comando exclusivo para grupos.', id)}

            default:
                bot.reply(from, 'Tente novamente.\nUse "/menu" para mais comandos.', id)
            break
            
    }}catch(err) {console.log(err)}
}