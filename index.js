const {create, Client, decryptMedia} = require ("@open-wa/wa-automate")
const fs = require ('fs-extra')
const canva = require ('discord-canvas')
const text = require('./src/textsend')
const options = require('./src/options')
const corpo = require("./body")
const moment = require('moment-timezone')
const Dono = '553499532444@c.us'
var newadd = 0; var newexit = 0
const amountMsg = require('./src/bot/amountMsg')

//Criar arquivos JSONS caso nn tenha
if (!fs.existsSync('./lib/jsons/bkList.json')) {fs.outputJSONSync('./lib/jsons/bkList.json',[])}
if (!fs.existsSync('./lib/jsons/msgCount.json')) {fs.outputJSONSync('./lib/jsons/msgCount.json',[])}
if (!fs.existsSync('./lib/jsons/admGroup.json')) {fs.outputJSONSync('./lib/jsons/admGroup.json',[])}
if (!fs.existsSync('./lib/jsons/grupo.json')) {fs.outputJSONSync('./lib/jsons/grupo.json',[])}

//Pegando o arquivo msgCount.JSON e transformando em um obj
const msgCountJson = fs.readFileSync('./lib/jsons/msgCount.json')
const msgCount = JSON.parse(msgCountJson)

// Apaga a pasta de logs do navegador caso exista
if (fs.existsSync('./logs/Chrome')) {fs.rmdirSync('./logs/Chrome', {recursive: true})}


const start = async (bot = new Client()) => {

  setInterval(()=> {
    fs.out
  }, 30000)

  console.log('Pronto para começarmos!!')

  //Força recarregamento
  bot.onStateChanged (async state => {
    console.log('->Oto caindo aqui<- Se liga ->', state)
      if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') await bot.forceRefocus()
  } )
  
  // Ouve as mesnagens recebidas
  bot.onMessage( async menssagem => {

    //Apaga o cachê após acumular mais de 2000 msg
    await bot.getAmountOfLoadedMessages().then(async msg => {
      if (msg >= 2000) {
        try{
        await bot.cutMsgCache()
        await bot.cutChatCache().then(async ()=>{await bot.sendText(Dono, 'Acabo de limpar o cache de mensagens e chats com sucesso!')})
        }catch(err) {console.log(`Tentativa de apagar o cache falhou...\n ${err}`), bot.sendText(Dono, 'Tentei limpar o cachê, mas falhei.')}
      }
    })

    //Registra quantidade de mensagens
    function msgRegister(){
      return msgCount.push({
        id: `${menssagem.sender.id}`,
        msgs: 1
      })
    }

    if (msgCount.length == 0) {
      msgCount.push({
        begginDate:`${menssagem.t}` // Registra a data da primeira mensagem registrada
      })
      msgRegister() //Registra o id do sender caso o arquivo esteja vázio (sem objetos)
    }
    else {
      //Testa se o id do sender existe no arquivo JSON
      for (var i=0; msgCount.length > i;) {var isIdExist = msgCount[i].id == menssagem.sender.id? true : false; if (isIdExist){break}; i++}
      if (!isIdExist) {
        msgRegister()  //Registra o id do sender caso não exista
      }
      else{
        msgCount[i].msgs = msgCount[i].msgs + 1 // Aumenta +1 de msg do sender caso exista
      }
    }
    // Salva as mensagens recebidas no arquivo JSON
    fs.writeFileSync('./lib/jsons/msgCount.json', JSON.stringify(msgCount))
    //console.log('Contando desde: ', moment( msgCount[0].begginDate * 1000).format('DD/MM/YY HH:mm:ss'))


    //Manuseio de mensagens
    await corpo(bot, menssagem)

    //Verificar quantidade de mensagens
    amountMsg(menssagem, bot)
  })

  bot.onGlobalParticipantsChanged(async event => {
    const bkList = JSON.parse(fs.readFileSync('./lib/jsons/bkList.json'))
    const onBkList = bkList.includes(event.who)
    const autor = event.who
    const botnumber = await bot.getHostNumber() + '@c.us'
    const vulgobot = autor == botnumber
    const infoautor = await bot.getContact(event.who)
    let autorName = infoautor.pushname || infoautor.name
    const gChat = await bot.getChatById(event.chat)
    const {contact, groupMetadata, name} = await gChat
    console.log(event)

    try {
      if (event.action == 'add'){
        const trueNumber = autor.startsWith('55')

        //Caso esteja na black List
        if (onBkList && !vulgobot) {
          await bot.sendTextWithMentions(event.chat, text.listanegra(autor))
          await setTimeout(() => {bot.removeParticipant(event.chat, event.who)}, 2000)
          await bot.contactBlock(event.who)
          console.log(`->ListaNegra<-  ${autorName} cujo numero: ${event.who.replace('@c.us')} - Foi banido pois pertencia a Lista negra`)
        }

        //Remove Numeros fakes
        /*if (!trueNumber && !vulgobot) {
          await bot.sendTextWithMentions(event.chat, text.numerofake(event))
          await setTimeout(() => {bot.removeParticipant(event.chat, event.who)}, 4000)
          await bot.contactBlock(event.who)
          return console.log(`->FakeNumber<-  Um numero fake tentou entrar no grupo (${event.who.replace('@c.us', ' ')})`)

        }*/

        else if (!onBkList && !vulgobot && newadd == 0) {
          newadd = 1
          console.log('Antes da boas vindas')
          var perfil = await bot.getProfilePicFromServer(event.who)
          if (perfil == '' || perfil == 'undefined' || perfil == 'ERROR: 401') perfil = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU"
          const image = await new canva.Welcome()
          .setUsername(autorName)
          .setDiscriminator(event.who.substring(6, 10))
          .setMemberCount(groupMetadata.participants.length)
          .setGuildName(name)
          .setAvatar(perfil)
          .setText("title", `BEM VINDO(A)`)
          .setText("message", `Você está no {server}`)
          .setText("member-count", `Você é membro Nº {count}`)
          .setColor("border", "#00100C")
          .setColor("username-box", "#00100C")
          .setColor("discriminator-box", "#00100C")
          .setColor("message-box", "#00100C")
          .setColor("title", "#6577AF")
          .setColor("avatar", "#00100C")
          .setBackground("https://i.ibb.co/gWcKNQW/imagem-2021-07-22-002942.png")
          .toAttachment();
          console.log('Depois do boas vindas')
          await bot.sendFile(event.chat, `data:image/png;base64,${image.toBuffer().toString('base64')}`, `welcome.png`, text.bemvindo(autorName, name))
          newadd = 0
        }
      }
      else if (event.action == 'remove' && newexit == 0 && !vulgobot && event.by == undefined){
        newexit = 1
        var perfil = await bot.getProfilePicFromServer(event.who)
          if (perfil == '' || perfil == 'undefined' || perfil == 'ERROR: 401') perfil = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU"
          const picbemvindo = await new canva.Goodbye().setUsername(autorName)
          .setDiscriminator(event.who.substring(6, 10))
          .setMemberCount(groupMetadata.participants.length)
          .setGuildName(name)
          .setAvatar(perfil)
          .setText("title", "F")
          .setText("message", "Acaba de abandonar o(a) {server}")
          .setText("member-count", "Era o membro Nº {count}")
          .setColor("border", "#00100C")
          .setColor('username-box', "#00100C")
          .setColor('discriminator-box', "#00100C")
          .setColor("message-box", "#00100C")
          .setColor("title", "#6577AF")
          .setBackground('https://i.ibb.co/gWcKNQW/imagem-2021-07-22-002942.png')
          .toAttachment()
          await bot.sendFile(event.chat, `data:image/png;base64,${picbemvindo.toBuffer().toString('base64')}`, `picgodbye.png`, text.goodBye())
          newexit = 0
      }
    }
    catch (err) {console.log(err); newadd = 0; newexit = 0}

    if (event.action == 'remove' && !(event.by == undefined) && !(event.by == botnumber)) {
      try{
      bot.sendTextWithMentions(event.chat, `Por favor @${event.by.replace('@c.us', '')} , procure usar o comando /ban ao invés de remover manualmente.`)
      } catch(err) {console.log(err)}
    }

  })
  
  bot.onIncomingCall(async call => {
    if(!call.peerJid == Dono){
    try{
      console.log('->CALL<- Estão me ligando...')
    await bot.sendText(call.peerJid, text.onCall())
    await setTimeout(() => {bot.contactBlock(call.peerJid)}, 2000)
    await bot.sendText(Dono, `Tentaram me ligar. Felizmente, já bloqueei.\nwa.me/+${call.peerJid.replace('@c.us', ' ')}`)
    }catch(err) {return console.log(err), bot.sendText(Dono, `Houve uma tentativa de me ligar. Porém, não consegui bloquear.\nwa.me/+${call.peerJid.replace('@c.us', ' ')}`)}}
  })
}


//Inicia o bot
create(options(start)).then((bot) => start(bot)).catch((err) => console.error(err))