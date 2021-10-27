const fs = require('fs-extra')
const {default: axios} = require('axios')
const cheerio = require('cheerio')
const uaOverride = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'

module.exports = async (bot) => {
    const $ = await axios.get('https://www.facebook.com/groups/aestheticimprovisado?sorting_setting=CHRONOLOGICAL',{headers:{'User-Agent' : uaOverride}}).then(res =>{
        console.log(res.data)
        return cheerio.load(res.data)
    })

    console.log('Test')
    try{

        $('.rq0escxv div').each((i, post) => {
            console.log('Test2')
            console.log(i)
        })

    }
    catch(err) {console.log(err)}
}