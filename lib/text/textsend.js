exports.novogrupo = () => {return 'ImprovisaBot ON🤖\nUse "/menu" para falar comigo.'}

exports.listanegra = () => {return 'Poxa vida, aparentemente seu nome está na lista negra do papai noel esse ano. Lamento...'}

exports.numerofake = (event) => {return `Saudações, @${event.who}. Para evitar possíveis problemas ao grupo, evitamos a entrada de usúarios de numero fake.\nCaso seja um enagno meu, fale com um dos administradores. Bjss\n\n _Ass:_ ImprovisaBOT`}

exports.bemvindo = (pushname) => {return `Saudações ${pushname}\nÉ um prazer te ter aqui na improvisado.\n\nCaso precise, chame um administrador ou digite "/menu"\n\nLeia as regras para evitar problemas.`}

exports.sendConviteLink = (user) => {return `O membro @${user.replace(`@c.us`, '')} não leu as regras e por isso não é mais bem vindo aqui.`}

exports.warn = () => {return 'Aquele que entrar no grupo divulgado sem permissão, será removido da improvisado :('}

exports.zetravinha = () => {return 'Removido por querer ficar pagando de zé travinha. O Shrek é só um destrava, não se preocupem'}

exports.randomTrava = (user) => {return `_Houve uma possível tentativa de trava._ \n*Suspeito:* wa.me/${user.replace('@c.us', '')}`}

exports.calm = () => {return `Trabalho dado é trabalho comprido! Sem pânico jovens, meu exterminio aqui está completo.`}

exports.revokeLink = () => {return `Como prevenção, resetei o link de convite desse grupo.`}

exports.aguarde = () => {return `Só um instante\nPedido em andamento...`}

exports.goodBye = () => {return `Bye bye...`}

exports.noSoyAdm = () => {return `Impossível de completar a ação pois não tenho adm`}

exports.finish = (banido, motivo) => {return `Trabalho dado é trabalho comprido!!\n\n*Banido:* ${banido}\n*Motivo:* ${motivo}`}

exports.fail = () => {return `Não foi possível completar a ação...`}

exports.cmdGroups = () => {return `Esse comando é exclussivo para grupos.`}

exports.isMembroComum = () => {return `Você não tem permissão para usar esse comando.`}

exports.unBan = (user) => {return `Seguinte @${user.replace('@c.us', '')}, estou de olho em você!👮‍♀️`}

exports.menu = () => {return `*⬐»»——MENU——««⬎*\n\n「🖼」≫ */Fig*\n_Cria um(a) sticker/figurinha. Basta marcar uma imagem ou enviar com o comando na legenda_.\n\n「🎬」≫ */Gif*\n_Cria um(a) sticker/figurinha animado(a)._\n\n「🎭」≫ */Piada*\n_Uma piada talvez?_\n_Atenção: As "piadas" são traduzidas do inglês. Portanto, muitas podem não fazer sentido algum._\n\n「🤫」≫ */Apagar*\n_Apaga nossa conversa do meu aparelho._\n\n「🐲」≫ */Anime* (nome)\n_Exibe informações sobre determinado anime a partir do nome especificado._\n\n「👮」≫ */Mod*\n_Exibe uma lista de comandos administrativos._\n_(Apenas admins)_\n\n「💡」≫ */Ideia* (Escreva sua ideia)\n_Aqui você pode estar propondo mudanças para o BOT. Estarei enviando-as para quem me desenvolveu._\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.mod = () => {return `*⬐»»——ADMINS——««⬎*\n\n「🚷」≫ */Ban* _(@membro) (Motivo)_\n_Expulsa um membro do grupo._\n_Obs: Marque alguém ou uma mensagem._\n\n「⏳」≫ */Tempban* _(@membro) (Tempo em minutos)_\n_Expulsa um membro pelo tempo desejado (em minutos)._\n\n「♻️」≫ */Unban _(marque uma mensagem)_*\n_Volta o individuo para o grupo._\n_Obs: É necessário que marque a mensagem._\n\n「👤」≫ */Add* (DDI+DDD+Numero)\n_Adiciona um participante a partir do numero especificado._\n\n「🚪」≫ */Redefinir*\n_Revoga o link de convite._\n\n「🔇」≫ */Fechar*\n_Fecha o grupo somente para os adms._\n\n「🗣」≫ */Abrir*\n_Abre o grupo para todos._\n\n_⚠️Use "help" depois dos comandos ban, unban e tempban, para ver o manual de uso._\n\n_ιмᴘʀovιsᴀBӨƬ • © ᴀʀᴛʜᴜʀ_`}

exports.softban = (alvo) => {return `@${alvo.replace('@c.us', ' ')} acaba de voltar de seu ban temporário.`}

exports.cmdError = (cmd) => {return `Tem algo errado... Verifique se digitou o comando corretamente. Use "/${cmd} ajuda" caso necessário.`}

exports.onCall = () => {return `Sou uma BOT! Não tem do porque me ligar...\nEstarei lhe bloqueando por motivos de segurança. Caso seja um mau entendido, aconselho entrar em contato com meu desenvolvedor para estar te desbloqueando. Até...👋`}

exports.banHelp = () => {return `Basta digitar "/ban", logo em seguida marcar quem deseja banir como mostrado no exemplo. Depois, digite o motivo do banimento.`}

exports.banHelp2 = () => {return `De maneira mais prática, você também pode banir apenas marcando a mensagem do alvo, sem a necessidade de mencionar-lo. Só não esquece de logo em seguida colocar o motivo do banimento.`}

exports.unbanHelp = () => {return `Basta você selecionar a mensagem do "banido" e enviar o comando "/unban". Dessa forma, o banido é voltado para o grupo.`}

exports.tempbanHelp = () => {return `Esse modelo de comando é mais simples do que parece. Primeiro mencione o alvo (ou marque a mensagem do alvo como explicado no help do "/ban"), e logo depois defina o tempo (EM MINUTOS) que o alvo ficara de castigo. No exemplo à cima eu defini 1 minuto como tempo de castigo.`}