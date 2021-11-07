const puppeteer = require('puppeteer');
const fs = require('fs-extra')
const options = require('./options')

exports.fetchfaceGroup = async (bot) => {
    
  const conselhoGroup = await JSON.parse(fs.readFileSync('./lib/jsons/conselhoGroup.json'))

  if (conselhoGroup.length == 0) {return console.log('Sem grupo do conselho definido.')}

  const browser = await puppeteer.launch(options());
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/groups/aestheticimprovisado?sorting_setting=CHRONOLOGICAL', {waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']});

  // Abrir o console da pag
  /* const dataLastPub = await page.evaluate(async() => {

      const pub = document.querySelector('[role="feed"] .k4urcfbm')
      
      // Pegar o tempo da ultima pub
      const lastPubHour = pub.querySelector('.g5ia77u1 span').textContent

      return {temp: lastPubHour}
    }) */

  const elementLastPub = await page.$('[role="feed"] .k4urcfbm')
  const elementLastPubHour = await elementLastPub.$('.g5ia77u1 span')
  const pubHour = await page.evaluate((e) => {
    return e.textContent
  }, elementLastPubHour)

  await browser.close();

  console.log(pubHour)

  if (pubHour.includes(' h')) {

      let hour = parseInt(pubHour.replace(' h', ''))
      console.log('Hora do Último post: ' + hour)

      if (hour >= 3) {
          var aviso = '🚨*INATIVIDADE NO GRUPO*🚨\n\n'

          await bot.getGroupMembers(conselhoGroup[0]).then((res) => {
              for (let i in res) {
                aviso = aviso + '@' + res[i].id.replace('@c.us', '') + '\n'
              }
          })

          bot.sendTextWithMentions(conselhoGroup[0], aviso + '\n_Faz mais de 3 horas que nosso grupo do face se encontra sem posts_⚠️')
        }
    }
};
