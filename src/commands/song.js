exports.song = async () => {
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
                        //await bot.sendFileFromUrl(from, `${urlThumbSong}`, `${titleSong}`, text.infoSongRequest(titleSong, tempSong, dateSong, viewsSong), id)
                        const writeStrem = await ytdl.downloadFromInfo(infoSong, { quality: 'highestaudio', filter: 'audioonly' }).pipe(fs.createWriteStream(`${titleSong}.mp3`, { encoding: 'base64' }))
                        await writeStrem.on('finish', async () => { 
                            const readFile = await fs.readFileSync(`${titleSong}.mp3`)
                            await bot.sendPtt(from, `${titleSong}.mp3`, id)
                            await bot.sendFile(from, `data:audio/mpeg;base64,${readFile.toString('base64')}`, id)
                            //await bot.sendFile(from, `${titleSong}.mp3`, `${titleSong}.mp3`, null)
                            fs.rm(`${titleSong}.mp3`, {recursive:true}, ()=>{console.log('Arquivo excluido')}) })
                            song = 0
                        writeStrem.on('error', () => { bot.reply(from, 'Houve um erro com o download...\nTente novamente.', id), song = 0 })
                    console.log(writeStrem.writableFinished)
                    setTimeout(() => { console.log(writeStrem.writableFinished) }, 5000)
                } catch (err) {return console.log(err), song = 0 }
}