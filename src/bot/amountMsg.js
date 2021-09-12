const fs = require('fs-extra')

module.exports = amountMsg = (msg, bot) =>{
    const countMsg = JSON.parse(fs.readFileSync('./lib/jsons/msgCount.json'))

    //Função que parabeniza
    function congratulations(amountMsg) {
        try{
        bot.reply(msg.from, `Muito bem!! Você acaba de completar ${amountMsg} mensagens no nosso grupo`, msg.id)
        } catch(err){console.log(err)}
    }

    //Verifica a quantidade de mensagens e parabeniza
    try{
    for (var i = 0; i < countMsg.length; i++) {
        switch(countMsg[i].msgs){
            
            case 10:
                congratulations(100)
            break

            case 50:
                congratulations(50)
            break

            case 100:
                congratulations(100)
            break

            case 200:
                congratulations(200)
            break

            case 300:
                congratulations(300)
            break

        }
    }
} catch(err) {console.log(err)}
}