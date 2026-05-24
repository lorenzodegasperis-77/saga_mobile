const Il_Parcheggio = {
  "id": "ADV-PZ7P6HW4L",
  "title": "Il parcheggio_cina2",
  "desc": "Una mattina qualunque — o quasi.",
  "author": "LDG",
  "startParagraph": "001",
  "setting": "moderno",
  "paragraphs": [
    {
      "id": "001",
      "name": "Uscita",
      "text": "Il portone di ferro si chiude con un rimbombo che pare una risata metallica. Sei già rientrato una volta, per le chiavi della macchina, mentre frugavi tra i mobili del corridoio imprecando come un idiota. Ora ti ritrovi di nuovo fuori, con la borsa del pranzo stretta in mano e un vago senso di déjà-vu. L'orologio al polso corre più veloce della logica: la riunione di stamattina è una di quelle \"o dentro o fuori\", e il tempo ti sta sgusciando tra le dita. Ti lanci giù per le scale, ma sul pianerottolo del secondo piano c'è la signora Nina, immobile come un semaforo rotto, con due buste della spesa che sembrano sacchi di sabbia.",
      "exits": [
        {
          "id": "PG-XAJI0Y6DP",
          "type": "choice",
          "label": "Le rivolgi un saluto e un sorriso smagliante.",
          "to": "030"
        },
        {
          "id": "PG-BHSAHXTHV",
          "type": "choice",
          "label": "Tiri dritto. Oggi non hai tempo per i convenevoli.",
          "to": "739"
        }
      ]
    },
    {
      "id": "030",
      "name": "Saluto",
      "text": "«Buongiorno, signora Nina!» canti, con un entusiasmo che non ti appartiene. Lei si gira al rallentatore, gli occhi stanchi dietro lenti spesse come fondi di bottiglia. Ai suoi piedi, le buste della spesa grondano peso: senti il tintinnio di barattoli e il tonfo sordo delle patate.\n«Oh, caro... che mattinata. Mio nipote doveva aiutarmi, ma ha avuto un imprevisto. Sai, i giovani d'oggi vivono dentro quei telefoni...»\nDentro di te, l'orologio urla: 8:05. La riunione è tra meno di un'ora, e il traffico là fuori non ti aspetterà.",
      "exits": [
        {
          "id": "PG-3A3ZMF8MD",
          "type": "choice",
          "label": "La aiuti con le buste.",
          "to": "101"
        },
        {
          "id": "PG-D4V30T9NT",
          "type": "choice",
          "label": "La saluti e te ne vai.",
          "to": "945"
        }
      ]
    },
    {
      "id": "055",
      "name": "Passo oltre",
      "text": "Il portiere, una mummia moderna sepolta dietro il bancone, alza appena il giornale. «Bella giornata», borbotta senza convinzione, mentre fuori il cielo è una lastra di piombo. Spalanchi il portone e l'aria gelida ti schiaffeggia le guance, ripulendoti dai rimasugli di sonno. Il traffico ruggisce in lontananza, i clacson abbaiano, e il fumo degli scarichi danza nell'aria fredda come un fantasma di città. Ti fermi un attimo sul marciapiede, chiavi in mano, stomaco in subbuglio. Il mondo non ha aspettato i tuoi ritardi.",
      "exits": [
        {
          "id": "PG-3W5UZBIKC",
          "type": "choice",
          "label": "Vai al garage. Forse, sfidando il traffico, puoi ancora farcela.",
          "to": "026"
        },
        {
          "id": "PG-IDKWNNHJ7",
          "type": "choice",
          "label": "Prendi l'autobus. Oggi meglio lasciare che sia qualcun altro a lottare col caos.",
          "to": "121"
        }
      ]
    },
    {
      "id": "101",
      "name": "Aiuto Nina",
      "text": "«Non si preoccupi, l'aiuto io.» Afferri le buste come fossero manubri: ti arrivano addosso odori di lavanda, caffè vecchio e detersivo. Nina ti guida fino alla sua cucina, inondandoti di ringraziamenti e di un biscotto fatto in casa che declini con garbo, sentendoti un po' in colpa. Poggi le buste sul tavolo e riparti, col suo «bravo ragazzo» che ti scalda il petto. Hai perso minuti preziosi, ma forse la gratitudine è un buon carburante. Segna una stanghetta sulla scheda.",
      "exits": [
        {
          "id": "PG-XVG0FN9XU",
          "type": "choice",
          "label": "Scendi i gradini a due a due, deciso a recuperare.",
          "to": "055"
        }
      ]
    },
    {
      "id": "121",
      "name": "Attacco del gabbiano",
      "text": "Mentre cammini svelto, un'ombra grigia e bianca ti sbarra la strada. Un gabbiano, ma non uno qualunque: è un piccolo dinosauro metropolitano, ali semiaperte, zampe palmate che artigliano il cemento. Ti fissa con un occhio giallo e vitreo, privo di empatia, ed emette un verso strozzato che suona come una dichiarazione di guerra. Sembra difendere un confine invisibile. Il bus potrebbe passare da un momento all'altro, e questo duello visivo sta diventando assurdo.",
      "exits": [
        {
          "id": "PG-Y41IBLJH7",
          "type": "choice",
          "label": "Procedi dritto. È solo un uccello troppo cresciuto.",
          "to": "158"
        },
        {
          "id": "PG-5LXO6QJIU",
          "type": "choice",
          "label": "Cambi marciapiede. Meglio non sfidare la natura a stomaco vuoto.",
          "to": "165"
        }
      ]
    },
    {
      "id": "158",
      "name": "Combattimento col gabbiano",
      "text": "Stringi la valigetta come uno scudo e avanzi, cercando di proiettare autorità. Il gabbiano spalanca le ali in un'apertura da rapace preistorico e lancia un grido che rimbalza tra i palazzi e fa voltare due passanti. È un istante sospeso: tu contro la bestia. Il cuore ti martella nelle tempie, ma non puoi permetterti di perdere.",
      "exits": [
        {
          "id": "PG-JV6OH9SDB",
          "type": "encounter",
          "npcId": "NPC-ZIE2OZM91",
          "label": "Scontro con il gabbiano sul marciapiede",
          "successTo": "172",
          "failTo": "050",
          "to": "172",
          "defeatTo": "050",
          "victoryMsg": "Con un colpo secco della valigetta colpisci il petto piumato. Il gabbiano, colto di sorpresa da tanta audacia, barcolla, lancia un verso indignato e si ritira verso il bordo del marciapiede. Passi oltre, sentendo il suo sguardo giallo bruciarti la schiena, ma non ti volti. Hai vinto tu."
        }
      ]
    },
    {
      "id": "165",
      "name": "Cambio marciapiede",
      "text": "Scivoli dall'altra parte della strada, tenendo d'occhio il pennuto che ti fissa con aria di trionfo. Piccolo sbruffone. La strada è più lunga, e perdi minuti preziosi insieme a un bel po' di dignità. Segna una stanghetta sulla scheda.",
      "exits": [
        {
          "id": "PG-DW2PCN9T8",
          "type": "choice",
          "label": "Arrivi comunque alla fermata.",
          "to": "172"
        }
      ]
    },
    {
      "id": "172",
      "name": "Fila biglietti",
      "text": "Raggiungi la fermata col fiatone. Il display luminoso segna 4 minuti, ma la macchinetta dei biglietti è spenta, con la scritta \"Fuori Servizio\" che ti fissa come una beffa. L'unico tabaccaio della zona ha già una coda di sei persone che sembrano in gita: discutono di lotto, contano centesimi, hanno tutto il tempo del mondo. Il bus arriverà a momenti. Il biglietto costa 1,10€. Il tuo tempo, molto di più.",
      "exits": [
        {
          "id": "PG-4AZYTJXEP",
          "type": "choice",
          "label": "Fai diligentemente la fila.",
          "to": "189"
        },
        {
          "id": "PG-Q85JSG65K",
          "type": "choice",
          "label": "Cerchi di convincere la gente a farti passare avanti.",
          "to": "191"
        },
        {
          "id": "PG-XVF1T2TAL",
          "type": "choice",
          "label": "Corri al tabaccaio dall'altra parte della strada.",
          "to": "204"
        },
        {
          "id": "PG-A753LC58D",
          "type": "choice",
          "label": "Sali senza biglietto. Tanto, con la tua fortuna, oggi niente può andare peggio.",
          "to": "213"
        }
      ]
    },
    {
      "id": "189",
      "name": "Fila ok",
      "text": "Ti rassegni a una fila che sembra non scorrere mai. L'anziano davanti a te sta spiegando al tabaccaio un complicato sistema per vincere al Gratta e Vinci, mentre la commessa cerca con calma un rotolo di carta per la cassa. Ogni secondo è un colpo di martello sulla tua tabella di marcia. Quando finalmente afferri il biglietto, senti lo stridore del bus. Ti lanci dentro un attimo prima che le porte si chiudano con un sospiro pneumatico. Segna una stanghetta e ottieni il codice BUS.",
      "exits": [
        {
          "id": "PG-RC11ERTJ5",
          "type": "code_grant",
          "code": "BUS",
          "label": "Ottieni il codice BUS"
        },
        {
          "id": "PG-PHT0HL9XP",
          "type": "choice",
          "label": "Sali sull'autobus.",
          "to": "213"
        }
      ]
    },
    {
      "id": "191",
      "name": "Fila MEN",
      "text": "Con un sorriso che cerca di ispirare compassione e la voce rotta dall'ansia, ti rivolgi alla coda: «Signori, ho una riunione che deciderà il mio futuro. Potrei prendere solo un biglietto da un euro e dieci?». Sguardi, silenzio. Poi una signora minuta con un cappello di feltro, che ricorda vagamente la signora Nina, si scosta con un gesto materno. «Povero caro, passi pure.»",
      "exits": [
        {
          "id": "PG-SEIMVIHCW",
          "type": "stat_check",
          "stat": "MEN",
          "label": "Convinci la fila a farti passare",
          "successTo": "193",
          "failTo": "202"
        }
      ]
    },
    {
      "id": "193",
      "name": "Fila MEN ok",
      "text": "La capofila ti fa strada come un angelo custode. In trenta secondi hai il biglietto in mano e senti quasi un'aura di invincibilità. Hai risparmiato tempo e la tua dignità è uscita quasi indenne. Ottieni il codice BUS.",
      "exits": [
        {
          "id": "PG-I64CIYHE7",
          "type": "code_grant",
          "code": "BUS",
          "label": "Ottieni il codice BUS"
        },
        {
          "id": "PG-UR23GDPPQ",
          "type": "choice",
          "label": "Sali sull'autobus.",
          "to": "213"
        }
      ]
    },
    {
      "id": "202",
      "name": "Fila MEN ko",
      "text": "Il tuo appello si perde nel vuoto. Un omone ti fulmina: «Siamo tutti di corsa, bello.» La signora davanti a te, per ripicca, inizia a chiedere ogni singola marca di sigarette, rallentando la fila a passo d'uomo. Il bus intanto accosta, e tu sei ancora lì, col sudore sulla schiena. Quando finalmente hai il maledetto biglietto, hai pagato il prezzo più alto: il tuo tempo. Segna una stanghetta e ottieni comunque il codice BUS.",
      "exits": [
        {
          "id": "PG-0Y9DOM5IG",
          "type": "code_grant",
          "code": "BUS",
          "label": "Ottieni il codice BUS"
        },
        {
          "id": "PG-QPKI7P5TB",
          "type": "choice",
          "label": "Sali sull'autobus.",
          "to": "213"
        }
      ]
    },
    {
      "id": "204",
      "name": "Fila IST",
      "text": "Dall'altra parte della carreggiata, un altro tabaccaio sembra deserto. Devi solo attraversare la strada, schivare i passanti e non inciampare. Sembra facile, ma il semaforo è lontano e il bus non aspetta.",
      "exits": [
        {
          "id": "PG-94874FRHO",
          "type": "stat_check",
          "stat": "IST",
          "label": "Corri al tabaccaio attraversando la strada",
          "successTo": "207",
          "failTo": "210"
        }
      ]
    },
    {
      "id": "207",
      "name": "Fila IST ok",
      "text": "Schizzi via come un centometrista, schivi una nonna col carrello, entri di slancio nel tabaccaio e prendi il biglietto in un lampo. Torni alla fermata proprio mentre il bus apre le porte. Perfetto. Ottieni il codice BUS.",
      "exits": [
        {
          "id": "PG-CN9J2QP89",
          "type": "code_grant",
          "code": "BUS",
          "label": "Ottieni il codice BUS"
        },
        {
          "id": "PG-UZFK8UT0C",
          "type": "choice",
          "label": "Sali sull'autobus.",
          "to": "213"
        }
      ]
    },
    {
      "id": "210",
      "name": "Fila IST ko",
      "text": "Pochi passi e inciampi su una mattonella maledetta. Arrivi alla fermata ansimante, con una scarpa slacciata e un ginocchio che duole. Il bus ti guarda con le porte chiuse, poi si aprono lentamente, quasi ti stesse prendendo in giro. Segna una stanghetta. Ottieni comunque il codice BUS.",
      "exits": [
        {
          "id": "PG-VS4F8CGVY",
          "type": "code_grant",
          "code": "BUS",
          "label": "Ottieni il codice BUS"
        },
        {
          "id": "PG-IE6IVWPVS",
          "type": "choice",
          "label": "Sali sull'autobus.",
          "to": "213"
        }
      ]
    },
    {
      "id": "213",
      "name": "Vado in autobus",
      "text": "L'autobus è un carro di sardine. Ti fai largo tra corpi, borse e gomiti, e a pochi centimetri da te c'è un tipo con cappotto invernale e cuffie enormi, che emana un odore... potente. Un misto di formaggio e sudore che ti assale le narici. Devi decidere in fretta se resistere o cedere.",
      "exits": [
        {
          "id": "PG-7HZIOYKL1",
          "type": "stat_check",
          "stat": "VIG",
          "label": "Resisti all'odore",
          "successTo": "218",
          "failTo": "221"
        },
        {
          "id": "PG-CQ99CHJ75",
          "type": "choice",
          "label": "Resti comunque. Sei un eroe (o un masochista).",
          "to": "219"
        }
      ]
    },
    {
      "id": "218",
      "name": "Resto in autobus",
      "text": "Stringi i denti e fissi una pubblicità di yogurt come fosse l'ultima cosa bella del mondo. Il panorama fuori scorre, l'odore resta, ma resisti. Ce la puoi fare.",
      "exits": [
        {
          "id": "PG-5NF4ZW9XA",
          "type": "choice",
          "label": "Sale il controllore.",
          "to": "220"
        }
      ]
    },
    {
      "id": "219",
      "name": "Resto in autobus VIG",
      "text": "La testa inizia a girarti leggermente. Il tuo cervello sta usando tutte le risorse per non pensare all'odore, e la concentrazione cala. Subisci una penalità a IST per la nebbia che ti avvolge i pensieri. Eroico, ma forse stupido.",
      "exits": [
        {
          "id": "PG-3KX7EEDTJ",
          "type": "choice",
          "label": "Sale il controllore.",
          "to": "220"
        }
      ]
    },
    {
      "id": "221",
      "name": "Prendo la metro",
      "text": "Scendi prima che lo stomaco ti tradisca e ti butti nella metropolitana. La folla è compatta, il rumore assordante, qualcuno urla dentro una cuffia. Ti infili in un vagone già pieno, con la speranza che l'aria condizionata faccia miracoli. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-VZHWJR64D",
          "type": "choice",
          "label": "Sale il controllore.",
          "to": "220"
        }
      ]
    },
    {
      "id": "220",
      "name": "Controllo biglietto",
      "text": "Una figura in divisa grigia si fa largo tra la folla come uno squalo che fiuta il sangue. Impugna un palmare e ha l'aria di chi ha già sentito tutte le scuse del mondo. Si avvicina. «Biglietti, prego.»",
      "exits": [
        {
          "id": "PG-PJA1WJ0TP",
          "type": "code_check",
          "code": "BUS",
          "label": "Mostri il biglietto timbrato.",
          "to": "024",
          "elseTo": ""
        },
        {
          "id": "PG-AC56T4UFE",
          "type": "choice",
          "label": "Non hai il biglietto: inventi una scusa. (MEN)",
          "to": "223"
        },
        {
          "id": "PG-L6246HID2",
          "type": "choice",
          "label": "Non hai il biglietto: paghi la multa. Segna una stanghetta.",
          "to": "009"
        },
        {
          "id": "PG-5OWF75935",
          "type": "choice",
          "label": "Non hai il biglietto: scatti verso le porte. (VIG)",
          "to": "227"
        }
      ]
    },
    {
      "id": "223",
      "name": "Controllo MEN",
      "text": "Sfoderi la scusa più creativa che hai: «Guardi, la macchinetta ha fatto un rumore strano, forse un cortocircuito...». Usi occhi da cucciolo e voce rotta. Prova di MEN.",
      "exits": [
        {
          "id": "PG-A0L7253J2",
          "type": "stat_check",
          "stat": "MEN",
          "label": "Convinci il controllore",
          "successTo": "024",
          "failTo": "009"
        }
      ]
    },
    {
      "id": "009",
      "name": "Controllo paga",
      "text": "Allunghi i soldi con rassegnazione. Il controllore strappa la ricevuta e te la porge con un sorriso che non augura niente di buono. «Buona giornata», dice, ma il tono significa esattamente il contrario. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-D54I3QK2I",
          "type": "choice",
          "label": "Squilla il telefono. Rispondi.",
          "to": "025"
        }
      ]
    },
    {
      "id": "227",
      "name": "Controllo fuga",
      "text": "Ti lanci verso le porte che si stanno chiudendo. Con una spallata cerchi di forzarle e saltare fuori alla fermata successiva. È il momento di un colpo di reni. Prova di VIG.",
      "exits": [
        {
          "id": "PG-AGL58KXO9",
          "type": "stat_check",
          "stat": "VIG",
          "label": "Forza le porte e scappa",
          "successTo": "043",
          "failTo": "009"
        }
      ]
    },
    {
      "id": "024",
      "name": "Chiamata ok",
      "text": "Riesci a sentire il capo tra i rumori: la riunione è confermata, nessun anticipo. Un piccolo miracolo in una mattina di follia. Scendi alla tua fermata e un bar all'angolo ti guarda con la sua insegna lampeggiante.",
      "exits": [
        {
          "id": "PG-T7E8G8JDP",
          "type": "choice",
          "label": "Vai al bar per un caffè.",
          "to": "042"
        },
        {
          "id": "PG-0LVSNUJZA",
          "type": "choice",
          "label": "Dritto in ufficio.",
          "to": "043"
        }
      ]
    },
    {
      "id": "025",
      "name": "Chiamata ko",
      "text": "Il rumore del mezzo copre metà delle parole. Afferri solo \"...anticipa alle nove\". Alle nove? Ma sono le 8:47. Scendi dal bus con il cuore che ti balla in gola e la giornata che improvvisamente si fa buia.",
      "exits": [
        {
          "id": "PG-7TZ0YNCXL",
          "type": "choice",
          "label": "Entri al bar per un caffè.",
          "to": "042"
        },
        {
          "id": "PG-L4ZKLOOKE",
          "type": "choice",
          "label": "Corri in ufficio.",
          "to": "043"
        }
      ]
    },
    {
      "id": "026",
      "name": "Vai al garage",
      "text": "Scendi nel sottosuolo. Odore di cemento umido, benzina e luci al neon che sfarfallano. La tua auto è lì, fedele. Giri la chiave e il motore borbotta un attimo, un'esitazione che ti sembra eterna, poi ruggisce. Forza, andiamo.",
      "exits": [
        {
          "id": "PG-P7Y6WKTAK",
          "type": "choice",
          "label": "Esci subito e imbocchi la via principale.",
          "to": "029"
        },
        {
          "id": "PG-PUXQPHR62",
          "type": "stat_check",
          "stat": "MEN",
          "label": "Prima di partire controlli gomme e livelli. (MEN)",
          "successTo": "027",
          "failTo": "028"
        }
      ]
    },
    {
      "id": "027",
      "name": "Controllo auto ok",
      "text": "Mentre controlli, un luccichio ti gela il sangue: un chiodo conficcato nella gomma posteriore destra. Lo estrai con cautela e usi la schiuma sigillante. Per oggi terrà, ma dovrai ringraziare il gommista. Segna una stanghetta e ottieni il codice MELA.",
      "exits": [
        {
          "id": "PG-GDSWM31YI",
          "type": "code_grant",
          "code": "MELA",
          "label": "Ottieni il codice MELA"
        },
        {
          "id": "PG-HAIR4COWG",
          "type": "choice",
          "label": "Parti per il lavoro.",
          "to": "029"
        }
      ]
    },
    {
      "id": "028",
      "name": "Controllo auto ko",
      "text": "Il cruscotto è tutto verde, eppure una vocina ti tormenta: “Guarda meglio”. Prova di IST per ispezionare l'auto a piedi.",
      "exits": [
        {
          "id": "PG-ZRIXA11DP",
          "type": "stat_check",
          "stat": "IST",
          "label": "Fai il giro dell'auto a piedi. (IST)",
          "successTo": "027",
          "failTo": "029"
        }
      ]
    },
    {
      "id": "029",
      "name": "Traffico",
      "text": "La strada principale è un serpente di lamiera e fumi. Clacson, semafori eterni, e un furgone in doppia fila che blocca mezza carreggiata. La città oggi ha deciso di non collaborare.",
      "exits": [
        {
          "id": "PG-G8SBI4Q2Y",
          "type": "choice",
          "label": "Se hai almeno una stanghetta sulla scheda, vai a",
          "to": "034"
        },
        {
          "id": "PG-9V86WZS3T",
          "type": "choice",
          "label": "Altrimenti, vai a",
          "to": "069"
        }
      ]
    },
    {
      "id": "069",
      "name": "Polizia",
      "text": "Stai per infilarti a destra con una manovra azzardata quando vedi una paletta arancione alzarsi. Polizia stradale. L'agente ti fa cenno di accostare, con la faccia di chi ha già sentito tutto.",
      "exits": [
        {
          "id": "PG-60RJIW1SW",
          "type": "stat_check",
          "stat": "MEN",
          "label": "Spieghi la situazione con calma. (MEN)",
          "successTo": "031",
          "failTo": "032"
        },
        {
          "id": "PG-JCKJLTEIY",
          "type": "choice",
          "label": "Paghi la multa senza discutere.",
          "to": "033"
        }
      ]
    },
    {
      "id": "031",
      "name": "Ragione valida",
      "text": "L'agente ti ascolta, sospira, poi fa un mezzo sorriso. «Va bene, stavolta vada. Prenda via Roma, c'è un incidente più avanti.» Detto fatto, ti indica la salvezza.",
      "exits": [
        {
          "id": "PG-ZCOTOHP6V",
          "type": "choice",
          "label": "Prosegui sulla strada principale.",
          "to": "040"
        },
        {
          "id": "PG-Z41NAM148",
          "type": "choice",
          "label": "Prendi la scorciatoia di via Roma.",
          "to": "035"
        }
      ]
    },
    {
      "id": "032",
      "name": "Ragione non valida",
      "text": "La tua spiegazione lo irrita ancora di più. L'agente compila il verbale con metodica lentezza, ogni tratto di penna un piccolo calvario. Paghi, e il tuo orologio piange. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-P0TVHHPBM",
          "type": "choice",
          "label": "Riparti a testa bassa.",
          "to": "040"
        }
      ]
    },
    {
      "id": "033",
      "name": "Pago la multa",
      "text": "Alzi le mani: «Ha ragione, pago e non se ne parli più.» L'agente apprezza, e mentre firmi ti mormora: «Prenda via Roma, c'è un incidente più avanti.»",
      "exits": [
        {
          "id": "PG-YOFQEWAOU",
          "type": "choice",
          "label": "Prosegui sulla strada principale.",
          "to": "040"
        },
        {
          "id": "PG-AXEQBNHL1",
          "type": "choice",
          "label": "Prendi la scorciatoia consigliata.",
          "to": "035"
        }
      ]
    },
    {
      "id": "034",
      "name": "Strada principale",
      "text": "Sei bloccato in un mare di auto. Un camion delle pulizie è fermo a metà carreggiata, l'autista appoggiato alla portiera con la calma di un filosofo. Il tempo scorre e tu fremi. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-N13JCAT9M",
          "type": "stat_check",
          "stat": "VIG",
          "label": "Provi a passare sul marciapiede. (VIG)",
          "successTo": "037",
          "failTo": "038"
        },
        {
          "id": "PG-X2X18HAFE",
          "type": "choice",
          "label": "Aspetti con pazienza.",
          "to": "036"
        }
      ]
    },
    {
      "id": "035",
      "name": "Strada 2",
      "text": "La scorciatoia attraversa un piccolo parco urbano. Alberi, panchine, un cane che rincorre una palla. Quasi rilassante. All'uscita del parco vedi un collega – Lorenzo o Luca? – in piedi accanto alla bici con una ruota a terra.",
      "exits": [
        {
          "id": "PG-YUHZ1GV0E",
          "type": "choice",
          "label": "Ti fermi ad aiutarlo.",
          "to": "039"
        },
        {
          "id": "PG-38DALY8OZ",
          "type": "choice",
          "label": "Tiri dritto. Lui ha le gambe, tu il motore.",
          "to": "043"
        }
      ]
    },
    {
      "id": "036",
      "name": "Ritardo ufficio",
      "text": "Il camion riparte dopo ere geologiche. Parcheggi a tre isolati di distanza e percorri l'ultimo tratto a piedi, la giacca che svolazza e la borsa che balla sul fianco. Arrivi col fiatone. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-CYWD14VE9",
          "type": "choice",
          "label": "Entra nell'edificio.",
          "to": "043"
        }
      ]
    },
    {
      "id": "037",
      "name": "Sorpasso",
      "text": "Con una manovra da manuale monti sul marciapiede, superi il camion in un varco stretto e rientri in carreggiata tra i clacson. Un capolavoro di precisione. Il portiere dell'ufficio ti guarda dalla porta a vetri con un'espressione indecifrabile.",
      "exits": [
        {
          "id": "PG-2MPNSM43D",
          "type": "choice",
          "label": "Entra in ufficio.",
          "to": "043"
        }
      ]
    },
    {
      "id": "038",
      "name": "Sorpasso fallito",
      "text": "Crack. Un rumore secco e doloroso: lo specchietto contro il camion. Il camionista scende lentamente, con la faccia di chi ha tutto il tempo del mondo. Anzi, hai appena riempito il suo vuoto. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-8W3ZP08J3",
          "type": "choice",
          "label": "Compili il CID con rassegnazione.",
          "to": "043"
        },
        {
          "id": "PG-TRP0J43D5",
          "type": "choice",
          "label": "Ti infuri e gliene canti quattro.",
          "to": "048"
        }
      ]
    },
    {
      "id": "039",
      "name": "Aiuto collega",
      "text": "Abbassi il finestrino: «Dai, sali. Ti porto io.» Lui carica la bici nel portabagagli, ti ringrazia per tutto il tragitto e ti fa sentire un po' meno in colpa verso l'universo. Un momento umano in una mattina assurda.",
      "exits": [
        {
          "id": "PG-IQVNB4GH2",
          "type": "choice",
          "label": "Entra in ufficio.",
          "to": "043"
        }
      ]
    },
    {
      "id": "040",
      "name": "Buca pericolosa",
      "text": "Stai quasi cantando quando SBAM! Una buca enorme, nascosta da una pozzanghera traditrice. L'auto sobbalza, il volante ti strappa di mano. È il momento della verità per la tua gomma.",
      "exits": [
        {
          "id": "PG-M5ZJA8DZR",
          "type": "code_check",
          "code": "MELA",
          "label": "La toppa tiene? (controlla codice MELA)",
          "to": "034",
          "elseTo": "041"
        }
      ]
    },
    {
      "id": "041",
      "name": "Gomma esplosa",
      "text": "La ruota posteriore è a terra, sgonfia come un palloncino triste. Guardi la gomma, la gomma ti guarda. Devi decidere in fretta: puoi sporcarti le mani o abbandonare la nave.",
      "exits": [
        {
          "id": "PG-1YXR2DHYL",
          "type": "choice",
          "label": "Tiri fuori il cric e ti sporchi le mani. Segna 2 stanghette.",
          "to": "034"
        },
        {
          "id": "PG-URTP0LZJJ",
          "type": "choice",
          "label": "Abbandoni l'auto e corri in metro. Segna 1 stanghetta.",
          "to": "221"
        }
      ]
    },
    {
      "id": "042",
      "name": "Pausa bar",
      "text": "Il bar è piccolo e caldo, con la radio a bassa voce. Il barista ti prepara il caffè senza bisogno di ordinare: ormai ti conosce. Trenta secondi di pace assoluta, il sapore amaro che ti rimette al mondo. Rimuovi eventuali condizioni negative accumulate, ma aggiungi una stanghetta per il tempo perso. Ne valeva la pena.",
      "exits": [
        {
          "id": "PG-EGET1GHR0",
          "type": "choice",
          "label": "Posi la tazzina e corri.",
          "to": "043"
        }
      ]
    },
    {
      "id": "043",
      "name": "Zanzara ascensore",
      "text": "In ascensore, pregusti l'arrivo. Poi lo senti: un ronzio sottile e insistente. Una zanzara tigre, grossa come un'oliva, ti fissa con aria di sfida. È chiaramente in ritardo quanto te, e vuole il tuo sangue come colazione. Combattimento obbligatorio.",
      "exits": [
        {
          "id": "PG-9SKDGIGAT",
          "type": "encounter",
          "npcId": "zanzara_tigre",
          "label": "Scontro con la zanzara tigre in ascensore",
          "successTo": "045",
          "failTo": "044",
          "defeatTo": "044",
          "to": "045"
        }
      ]
    },
    {
      "id": "044",
      "name": "Zanzara perdi",
      "text": "La zanzara ti ha punto proprio sulla fronte. L'hai schiacciata, ma era già piena del tuo sangue: una macchia scarlatta ti si allarga sul bavero come un distintivo di vergogna. Corri in bagno a tamponare il disastro, perdendo minuti preziosi. Segna una stanghetta.",
      "exits": [
        {
          "id": "PG-J9TZE5R5U",
          "type": "choice",
          "label": "Dopo cinque minuti esci presentabile.",
          "to": "045"
        }
      ]
    },
    {
      "id": "045",
      "name": "Ultimo tratto",
      "text": "Conti le stanghette sulla scheda mentre aspetti l'ascensore per l'ufficio. Il respiro è ancora corto, la giacca forse sgualcita. È il momento della verità.",
      "exits": [
        {
          "id": "PG-QPGB7R3OC",
          "type": "choice",
          "label": "0-1 stanghette: vai a",
          "to": "049"
        },
        {
          "id": "PG-WBFUK9E1V",
          "type": "choice",
          "label": "2-4 stanghette: vai a",
          "to": "047"
        },
        {
          "id": "PG-2ISQP49KW",
          "type": "choice",
          "label": "5 o più stanghette: vai a",
          "to": "046"
        }
      ]
    },
    {
      "id": "046",
      "name": "Epilogo negativo",
      "text": "Arrivi che la riunione è già iniziata. Il capo ti fulmina con lo sguardo mentre ti infili di soppiatto al tuo posto. Non hai scuse e si vede. Sarà una lunga giornata.",
      "exits": [
        {
          "id": "PG-V08HHXFGC",
          "type": "end",
          "label": "Fine dell'avventura"
        }
      ]
    },
    {
      "id": "047",
      "name": "Epilogo positivo",
      "text": "Entri un attimo prima che il capo chiuda la porta. «Ah, eccoti.» Tono neutro, nessuna minaccia. Ti siedi col cuore che rallenta. Ce l'hai fatta per un pelo.",
      "exits": [
        {
          "id": "PG-AQVKIZZQY",
          "type": "end",
          "label": "Fine dell'avventura"
        }
      ]
    },
    {
      "id": "048",
      "name": "Epilogo rissa",
      "text": "La discussione col camionista degenera in un battibecco da strada. Lui recupera un crick dal furgone con intenzioni poco amichevoli. Per tua fortuna (si fa per dire) arriva la polizia, che vi carica entrambi. La riunione è persa, e dovrai spiegare al capo perché sei in caserma.",
      "exits": [
        {
          "id": "PG-72WX7PTX6",
          "type": "end",
          "label": "Fine dell'avventura"
        }
      ]
    },
    {
      "id": "049",
      "name": "Epilogo tranquillo",
      "text": "Arrivi con calma, sistemi la presentazione e ripassi i punti chiave. La riunione inizia e tu sei sereno. Una mattinata, dopotutto, quasi normale. Poteva andare molto peggio...",
      "exits": [
        {
          "id": "PG-3CFL0UKEY",
          "type": "end",
          "label": "Fine dell'avventura"
        }
      ]
    },
    {
      "id": "050",
      "name": "Epilogo ospedale",
      "text": "Il gabbiano ha vinto. Ti risvegli sul cemento con la testa che rimbomba e la valigetta qualche metro più in là. Qualcuno chiama i soccorsi mentre tu guardi l'orologio: 09:15. La riunione è persa, e spiegare che sei stato sconfitto da un pennuto sarà il tuo prossimo, disperato compito.",
      "exits": [
        {
          "id": "PG-Z7SRCBPLJ",
          "type": "end",
          "label": "Fine dell'avventura"
        }
      ]
    },
    {
      "id": "945",
      "name": "Non ti fermi",
      "text": "Sorridi a Nina ma non rallenti: «Mi dispiace, sono in ritardo pazzesco!». Scendi le scale a due a due, sentendo alle spalle un tonfo di borsa che cade e un sospiro. Non ti volti.",
      "exits": [
        {
          "id": "PG-Z7DRYDD4N",
          "type": "choice",
          "label": "Esci.",
          "to": "055"
        }
      ]
    },
    {
      "id": "739",
      "name": "Non saluti",
      "text": "Tiri dritto come un treno, ignorando completamente Nina e i suoi sacchetti. Il tonfo di una borsa che cade ti segue come un rimorso, ma raggiungi il portone senza voltarti indietro.",
      "exits": [
        {
          "id": "PG-MG4TP7MA1",
          "type": "choice",
          "label": "Esci.",
          "to": "055"
        }
      ]
    }
  ],
  "language": "Italiano",
  "ageRating18plus": false,
  "suggestedLevelRange": "1-2"
};

(function(){
window.__sagaStories = window.__sagaStories || [];
if(typeof Il_Parcheggio !== 'undefined') window.__sagaStories.push(Il_Parcheggio);
})();