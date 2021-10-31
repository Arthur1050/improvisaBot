const fs = require('fs-extra')
const moment = require('moment-timezone')

module.exports = amountMsg = (msg, bot) =>{
    const countMsg = JSON.parse(fs.readFileSync('./lib/jsons/msgCount.json'))

    //Função que parabeniza
    function congratulations(amountMsg) {
        try{
            console.log(countMsg[0].begginDate)
        bot.reply(msg.from, `Marco de ${amountMsg} mensagens alcançado.\n_Contando desde ${moment(countMsg[0].begginDate * 1000).format('DD/MM/YY HH:mm:ss')}_`, msg.id)
        } catch(err){console.log(err)}
    }
    // Verifica se o sender está apto a ser parabenizado
    function searchMsg(countMsgs, countId, meta) {
        if (countMsgs == meta && countId == msg.sender.id) {
            congratulations(meta)
        }
    }

    //Verifica a quantidade de mensagens e parabeniza
    try{
    for (let i in countMsg) {
        if (i > 0) {
            searchMsg(countMsg[i].msgs, countMsg[i].id, 10)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 100)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 250)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 500)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 800)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 1000)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 1500)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 2000)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 3000)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 4000)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 5000)
            }
        }
    
    } catch(err) {console.log(err)}
}