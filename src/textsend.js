exports.novogrupo = () => {return 'ImprovisaBot ON🤖\nUse "/menu" para falar comigo.\n Saudades? <3'}

exports.listanegra = (autor) => {return `@${autor.replace('@c.us', '')}\nVeja bem, seu numero está na listinha negra do grupo. Lamento...`}

exports.numerofake = (event) => {return `Saudações, @${event.who}. Para evitar possíveis problemas ao grupo, evitamos a entrada de usúarios de numero fake.\nCaso seja um engano meu, fale com um dos administradores. Bjss\n\n _Ass:_ ImprovisaBOT`}

exports.bemvindo = (pushname, name) => {return `Saudações ${pushname}\nÉ um prazer te ter aqui na ${name}.\n\nCaso precise, chame um adm ou digite "/menu"\n\nLeia as regras para evitar problemas.`}

exports.sendConviteLink = (user) => {return `O membro @${user.replace(`@c.us`, '')} não leu as regras e por isso não é mais bem vindo aqui.`}

exports.warn = () => {return 'Aquele que entrar no grupo divulgado sem permissão, será removido da improvisado :('}

exports.zetravinha = () => {return 'Removido por querer ficar pagando de zé travinha. O Shrek é só um destrava, não se preocupem'}

exports.randomTrava = (user) => {return `_Houve uma possível tentativa de trava._ \n*Suspeito:* wa.me/${user.replace('@c.us', '')}`}

exports.calm = () => {return `Trabalho dado é trabalho comprido! Sem pânico jovens, meu exterminio aqui está completo.`}

exports.revokeLink = () => {return `Como prevenção, resetei o link de convite desse grupo.`}

exports.aguarde = () => {return `Só um instante\nPedido em andamento...`}

exports.goodBye = () => {return `Bye bye...\nPress *F*`}

exports.noSoyAdm = () => {return `Impossível de completar a ação pois não tenho adm`}

exports.finish = (banido, motivo) => {return `Trabalho dado é trabalho comprido!!\n\n*Banido:* ${banido}\n*Motivo:* ${motivo}`}

exports.fail = () => {return `Não foi possível completar a ação...`}

exports.cmdGroups = () => {return `Esse comando é exclussivo para grupos.`}

exports.isMembroComum = () => {return `Você não tem permissão para usar esse comando.`}

exports.unBan = (user) => {return `Seguinte @${user.replace('@c.us', '')}, estou de olho em você!👮‍♀️`}

exports.menu = () => {return `*⬐»»——MENU——««⬎*\n\n「🆙」≫ */Att*\n*»* _Veja sobre a última atualização do BOT._\n\n「🖼」≫ */Fig*\n*»* _Cria um(a) sticker/figurinha. Basta marcar uma imagem ou enviar com o comando na legenda_.\n\n「🎬」≫ */Gif*\n*»* _Cria um(a) sticker/figurinha animado(a)._\n\n「📊」≫ */Mensagens*\n*»* _Exibe o placar de mensagens do grupo._\n\n「🕹️」≫ */Diversão*\n*»* _Menu de comandos divertidos._\n\n「📥」≫ */Snaptube*\n*»* _Comandos para baixar mídias do youtube._\n\n「🤫」≫ */Apagar*\n*»* _Apaga nossa conversa do meu aparelho._\n\n「🐲」≫ */Anime* (nome)\n*»* _Exibe informações sobre determinado anime a partir do nome especificado._\n\n「👮」≫ */Mod*\n*»* _Exibe uma lista de comandos administrativos._\n_(Apenas admins)_\n\n「💡」≫ */Ideia* (Escreva sua ideia)\n*»* _Dê ideias do que adicionar no BOT._\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.diversao = () => {return `*⬐»»——DIVERSÃO——««⬎*\n\n*[NOVO]*✨\n「❤️‍🔥」≫ */Match*\n*»* _Descubra quem é seu match aqui no grupo._\n\n *[NOVO]*✨\n「🦬」≫ */Corno*\n*»* _Condecore um membro aleatorio à cornão guerreiro._\n\n「😂」≫ */Meme*\n*»* _Buscarei um meme do iFunny._\n\n「👀」≫ */euNunca*\n*»* _Brincadeira do "eu nunca"._\n\n「🎭」≫ */Charada*\n*»* _Que tal uma charada?_\n\n「🤡」≫ */Piada*\n*»* _Contarei uma "boa" piada._\n\n「🤖」≫ */Hi* (mensagem)\n*»* _Responderei à sua mensagem._ Rss\n_Talvez demore um pouco... (Em manutenção)_\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.mod = () => {return `*⬐»»——ADMINS——««⬎*\n\n「🚷」≫ */Ban* _(@membro) (Motivo)_\n*»* _Expulsa um membro do grupo._\n_Obs: Marque alguém ou uma mensagem._\n\n「⏳」≫ */Tempban* _(@membro) (minutos)_\n*»* _Expulsa um membro pelo tempo desejado (em minutos)._\n\n「♻️」≫ */Unban* _(marque uma mensagem)_\n*»* _Volta o individuo para o grupo._\n_Obs: É necessário que marque a mensagem._\n\n「📓」≫ */Bklist (DDI+DDD+Numero)*\n*»* _Exemplo de uso:_\n/bklist 553499532444\n\n「👤」≫ */Add* (DDI+DDD+Numero)\n*»* _Adiciona um participante a partir do numero especificado._\n\n「🚪」≫ */Redefinir*\n*»* _Revoga o link de convite._\n\n「🔇」≫ */Fechar*\n*»* _Fecha o grupo somente para os adms._\n\n「🗣」≫ */Abrir*\n*»* _Abre o grupo para todos._\n\n_⚠️Use "help" depois dos comandos ban, unban e tempban, para ver o manual de uso._\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.dono = () => {return `*⬐»»——DONO——««⬎*\n\n*/Promover*\n\n*/Rebaixar*\n\n*/Setimage*\n\n*/Clean*\n\n*/setadmgrupo*\n\n*/setgrupo*\n\n*/SetStatus*\n\n*/Anunciar* _(mensagem) --horas (horas)_`}

exports.snaptube = () => {return `*⬐»»——SNAPTUBE——««⬎*\n\n「🎵」≫ */Song* (nome)\n*»* _Baixa a musica que for digitada depois do comando._\n\n_*Mais opçoes de downloads futuramente!*_\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.softban = (alvo) => {return `@${alvo.replace('@c.us', ' ')} acaba de voltar de seu ban temporário.`}

exports.cmdError = (cmd) => {return `Tem algo errado... Verifique se digitou o comando corretamente. Use "/${cmd} ajuda" caso necessário.`}

exports.onCall = () => {return `Sou uma BOT! Não tem do porque me ligar...\nEstarei lhe bloqueando por motivos de segurança. Caso seja um mau entendido, aconselho entrar em contato com meu desenvolvedor para estar te desbloqueando. Até...👋`}

exports.banHelp = () => {return `Basta digitar "/ban", logo em seguida marcar quem deseja banir como mostrado no exemplo. Depois, digite o motivo do banimento.`}

exports.banHelp2 = () => {return `De maneira mais prática, você também pode banir apenas marcando a mensagem do alvo, sem a necessidade de mencionar-lo. Só não esquece de logo em seguida colocar o motivo do banimento.`}

exports.unbanHelp = () => {return `Basta você selecionar a mensagem do "banido" e enviar o comando "/unban". Dessa forma, o banido é voltado para o grupo.`}

exports.tempbanHelp = () => {return `Esse modelo de comando é mais simples do que parece. Primeiro mencione o alvo (ou marque a mensagem do alvo como explicado no help do "/ban"), e logo depois defina o tempo (EM MINUTOS) que o alvo ficara de castigo. No exemplo à cima eu defini 1 minuto como tempo de castigo.`}

exports.infoSongRequest = (titleSong, tempSong, dateSong, viewsSong) => {return `🔍≫ *Resultado da pesquisa:*\n\n*» Título:* ${titleSong}\n\n*» Duração:* ${tempSong} segundos\n\n*» Data:* ${dateSong}\n\n*» Visualizações:* ${viewsSong}\n\n🎵≫ _*Download em andamento... Aguarde.*_`}

exports.ghostMotivation = (ghost) => {return `Oii @${ghost.replace('@c.us', '')}\nPercebi que está meio(a) quieto(a)...\nDeixa de timidez e interage com nós! :D\nComo vai?`}