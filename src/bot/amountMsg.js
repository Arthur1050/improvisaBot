const fs = require('fs-extra')

module.exports = amountMsg = (msg, bot) =>{
    const countMsg = JSON.parse(fs.readFileSync('./lib/jsons/msgCount.json'))

    //Função que parabeniza
    function congratulations(amountMsg) {
        try{
        bot.reply(msg.from, `Muito bem!! Você acaba de completar ${amountMsg} mensagens no nosso grupo`, msg.id)
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
            searchMsg(countMsg[i].msgs, countMsg[i].id, 50)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 100)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 150)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 200)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 250)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 300)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 400)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 500)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 750)
            searchMsg(countMsg[i].msgs, countMsg[i].id, 1000)
            }
        }
    
    } catch(err) {console.log(err)}
}