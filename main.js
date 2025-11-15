const quotes = [
	`Ciao amoreee<br>BUON SAN VALENTINOOO|400;<div class="small"> </div>|400;Il cuore di un uomo batte mediamente 3 miliardi di volte.<br>Tutti i battiti che ha fatto il mio da quando sei nella mia vita sono stati dovuti a te, ed ora come ora ammontano a circa<br><span id="heartbeats">${(Math.round((new Date() - new Date("2022-07-20")) / 850 + 19)).toLocaleString()}$updateHeartbeatCounter;@0;</span><div class="beatingHeart" style="margin-top: 8px;">🤍🤍🤍</div>`,
	`Lo specchio in camera tua deve aver vinto alla lotteria degli specchi o qualcosa del genere per poterti vedere così tanto ogni giorno`,
	`Voglio massaggiarti su un lettino in una stanza piena di candele e petali di rosa`,
	`Oggi ti mostro la prima cosa particolare di cui ti ho parlato nell'introduzione della pagina: fai doppio click da qualche parte`,
	`una volta ho sognato di conoscere l'amore della mia vita; mi devo ancora svegliare`,
	`Bramo il tuo effluvio, il tuo estro ed il tuo efflusso |1000;<div class="big" style="animation: 1s ease-out 1 zoomIn, 20s ease-in-out 1s infinite alternate wobble;">🙃</div>`,
	`L'idea di fare questa cosa mi è venuta la notte del 31/01, quando mi sono svegliato e non sono più riuscito a prendere sonno<br>...Quindi possiamo dire che mi tieni sveglio la notte`,
	`Spero che oggi ci sia il sole, mi rallegra così tanto l'animo sapere che sei felice`,
	`Vorrei tanto essere un musicista per poterti dedicare canzoni d'amore`,
	`Sei tutti i ricordi più belli che ho`,
	`Hai mai provato il brio di guardare la frase della giornata con qualche tua amica di fianco?|600;<br>Qualora lo facessi, vogliate perdonarmi eventuali amiche,|300;<br>VOGLIO SCOPARTI@90;IIIIIIII`,
	`Che crudele l'universo a fare le anime in coppie per poi dividerle`,
	`Voglio fare colla braciati stretti stretti`,
	`Sono innamorato del crepuscolo: mi ricorda il tempo con te, che sei <a href="https://open.spotify.com/track/0GrPvrBGrxwrU7rjlwYZiH">il mio tramonto</a>`,
	`<i>Nel suo aspetto tal dentro mi fei,<br>come si fe' Glauco nel gustar de l'erba<br>che 'l fé consorto in mar de li altri dei</i><br><br>(sì, ricordo ancora un pochino Dante)`,
	`Oggi è la giornata mondiale del complimento, dunque, ahem, sai di essere la ragazza più meravigliosa, amabile, bella, simpatica, gioiosa, amorevole, profumata ed arrapante che abbia mai avuto la fortuna di incontrare?`,
	`Non dimenticherò mai il modo in cui mi guardavi quando abbiamo visto i fuochi di Ferragosto abbracciati`,
	`Ricordati di respirare|2000;<br><br><br>@90;...@-1;<span class="small">(e di pensare a me che te lo impedisco)</span>`,
	`Quando facciamo finta di essere sconosciuti e di incontrarci per la prima volta in qualche locale?`,
	`Voglio accarezzarti la testolina`,
	`Se piovesse nel pineto, saresti la mia Ermione?`,
	`Se io fossi Oreste, saresti la mia Ermione? (siamo anche cugini hehe)`,
	`Ascolta <a href="https://open.spotify.com/track/2JxlwxM4YVK5YlnSuX7DBu">Il mondo insieme a te</a> degli 883, parla di te`,
	`Voglio ascoltare lofi steso sul letto con te`,
	`Ti va un bel massaggio?`,
	`D'ora in poi, se ti noi clicca in basso a sinistra, ti ho fatto un giochino<br><3`,
	`Sei la mia<br><i>raison d'être</i>|800;<div class="small"><br>(tanto che sono andato addirittura a cercare gli accenti giusti)</div>`,
	`Hai presente le canzoni che ti fanno venire i brividi?<br>tutte le volte che ti sfioro mi sento così`,
	`Come vuoi chiamare nostro figlio?`,
	`<div style="font-size:0.9em">Gaetano mi ha detto<br>che viviamo nel ghetto<br>e nel mentre penso che<br>se io dormissi disteso<br>sul tuo lato del letto<br><i>tra le braccia avrei te</i></div><div class="big beatingHeart">🤍</div>`,
	`Quando scegliamo la nostra stella?`,
	`Voglio un portale tra le nostre camere`,
	`Salvate in galleria ho 15 foto di me e 43 di noi due insieme, e questo riassume abbastanza bene quello che provo per te`,
	`Mi manchi come manca la pace ai soldati`,
	`Sei la mia luce nelle tenebre`,
	`Sei tutto ciò che desidero`,
	`Voglio cucinare qualcosa con te`,
	`Prima o poi ti porterò a guardare il tramonto sui monti`,
	`Vorrei che baciarti fosse l'inizio di ogni mia giornata`,
	`Il mio rimpianto più grande è non averti conosciuta prima`,
	`Voglio sentire le tue labbra`,
	`<div style="font-size:0.8em"><i>Bella mia d'argento:<br>sul tuo viso il riflesso,<br>d'un passionale amplesso<br>e mi perdo nel momento</i></div>`,
	`Ti vorrei qui con me|1500;<div class="small"><br>@40;Piccola curiosità <i>assolutamente non correlata</i>: sapevi che la popolarità del termine limonare (che allude al movimento delle mani che spremono un agrume hehehe) deriva in gran parte dall'usanza dei fruttivendoli lombardi di vendere i limoni in coppie alle giovani fanciulle che si recavano ai mercati?</div>`,
	`Sei la colla che tiene insieme i miei pezzi`,
	`L'unico motivo per cui cerco di non immaginarti quando sono in pubblico è che mi metterei ad accarezzare l'aria davanti alla gente`,
	`Sono stato così fortunato a conoscere proprio te, tra 100 miliardi di umani mai esistiti`,
	`Voglio girarmi nel letto e sentire il tuo profumo, aprire gli occhi e vedere i tuoi, darti il buongiorno ogni mattina con un bacio, e farti almeno mezz'ora di coccole`,
	`Chiunque sia l'artefice dell'enorme cuore su Plutone, mi ha rubato l'idea per un regalo`,
	`Se ti dedicassi una canzone, non finirei mai di scriverla, perché non sarebbe mai perfetta abbastanza da meritarti`,
	`🎶🎶<div class="small"> </div>You've been on my mind<br>girl,<br>like a drug<div class="small"> </div>🎶🎶`,
	`Ogni volta che ti guardo negli occhioni me ne reinnamoro come la prima volta`,
	`L'unico momento in cui riesco a non pensare a niente è quando sei con me, dato che non devo immaginarti per riempire il vuoto che sento senza di te`,
	`Mi manca parlarti`,
	`Ho letto che si può cucinare un pollo tirandogli una sberla a 1'600m/s (o 23'000 sberle normali), quindi devo ricordarmi di andarci piano con te`,
	`Quando facciamo un bagno a mezzanotte da nudi?`,
	`Ho voglia di prenderti per i capelli e strapparti un bacio`,
	`Voglio insegnarti a programmare`,
	`Oggi è la giornata mondiale del bacio; si celebra in onore della data del record per il bacio più lungo registrato, di 58h. Ti va di provare a batterlo?`,
	`Sei per me quello che è la penna per uno scrittore, il telescopio per un astronomo, la fotocamera per un fotografo`,
	`Voglio fare la doccia con te`,
	`Dietro di te<br>c'è sempre <i>bel <a href="https://open.spotify.com/track/3zb9a4NOpoSLuDZv6dmQzT">tempooooo</a> </i>`,
	`L'unico motivo per cui Giada non è il nome di un fiore è che non ne hanno ancora scoperto uno che sia bello abbastanza`,
	`Quando vivremo insieme, ti lascerò post-it in giro per casa: quelli rosa con messaggi sdolcinati, quelli blu con le cose che ti vorrò fare`,
	`Prima di te non conoscevo un significato così profondo della parola <i>desiderio</i>`,
	`Usciamo insieme un sabato sera?`,
	`buona Pasqua cucciola! Vorrei tanto fossi il mio uovo, ho una voglia matta di scartarti e poi mangiarti`,
	`Know I'll find you in my <a href="https://open.spotify.com/track/0nOkwnX9Vv34M2dO2mCZ66">dreams</a>`,
	`Sei il mio quadro preferito`,
	`Sei il mio pensiero preferito`,
	`Sei il mio suono preferito`,
	`Sei il mio sapore preferito`,
	`Sei il mio profumo preferito`,
	`Ti amo, e oggi le parole non mi bastano per dirti quanto`,
	`Volava,<br>un seme di soffione,<br><br>s'adagiò sul mio viso,<br>con come un sorriso.<br><br>Rideva,<br>perché sfiorata t'aveva.`,
	`Chissà come occupavo la mia testa prima che ci fossi tu`,
	`Ti ricordi quando siamo andati a vedere l'alba insieme?`,
	`Sei la mia scaramandrinaaaaaa`,
	`Vorrei che il mondo ci comprendesse come ci comprendiamo noi due`,
	`Voglio sussurrarti che ti amo finché ti stringo il collo`,
	`Siamo 2 poli dello stesso magnete`,
	`Sei tutte le stelle della notte, tutti i bagliori dell'alba, tutti i colori del tramonto, e tutta la luce del mio mondo`,
	`Vorrei tenerti al caldo nelle notti più fredde e servirti granite e strofinarti ghiaccio addosso nelle giornate più calde`,
	`Dove ti piacerebbe che andassimo a vivere?`,
	`Sei bellissimaaaaa|1200;<br><span class="small">no non basta</span>|500;@100;~17;|300;issimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissimissimissi<br>missimissima<br><span class="small">ecco, ora va bene</span>`,
	`Quando prendiamo l'aereo per un posto a caso?`,
	`Sei ciò che rende le giornate di merda belle, le giornate belle stupende, e ciò che dà a "stupendo" un significato`,
	`<i>Tú eres mi querencia</i>`,
	`Se fossi il diavolo travestito,<br>ti darei senza esitare la mia anima,<br>perché in ogni modo l'hai vinta`,
	`Come faccio a spiegarti a parole quanto ti amo?`,
	`Vorrei tornare a quando parlavamo di ditalini sul pontile ed innamorarmi in quel momento`,
	`Sei perfetta`,
	`È da un pezzo che non aggiorniamo la Cousitution, ti va di legislare un po' insieme?`,
	`Sei il mio posto, la mia casa`,
	`Puoi smettere di splendere un momento così riesco a vedere il sole? Solo un momento eh, poi voglio tornare a vedere solo te`,
	`A volte vorrei che vivessimo uno di quegli strani scenari apocalittici in cui un giorno tutte le persone tranne noi due spariscono a caso, e ci ritroviamo con tutto il mondo a nostra disposizione`,
	`Sei l'unica persona di cui mi fido ciecamente`,
	`Non c'è momento che la tua presenza non renderebbe migliore`,
	`Sei la mia patatina cuprina ciliegina cucciolina amorosa dolce e morbida e bella e intelligente e meravigliosa e e e ti amo e aaa@40;aaaa@35;aaaa@-1; perché non sono lì con teee@40;eee@35;eee`,
	`Voglio farti grattini@80;iiii`,
	`Tutte le volte che vado a dormire, ho paura di risvegliarmi e scoprire che sei stata solo un sogno`,
	`Sei bella come i Notturni di Chopin 🎶`,
	`L'unica parte brutta di stare con te è che quando non lo sono più mi sembra tutto così grigio e blando`,
	`Correntemente, tra chat, foto e video, occupi il 10% della memoria del mio telefono, ed il 90% di quella della mia testa`,
	`Mediamente un cuore umano a riposo batte 70 volte al minuto, o 150 se l'umano in questione sono io e mi trovo vicino a te`,
	`Voglio un fazzoletto con lo stampo di un tuo bacio`,
	`Quando ci trasferiamo sulle coste della Florida e rimettiamo quotidianamente in scena Jesolo?`,
	`Sono così fortunato ad averti nella mia vita`,
	`Quando ci troviamo per un po' di <i>Netflix e chill</i>?`,
	`È statisticamente probabile che in questo momento io ti stia pensando|800;@100;<br>(hehe)`,
	`Se è vero che l'anima di una persona si vede dagli <span class="angelEyes">occhi</span>, tu devi averne una veramente stupenda, perché tutte le volte che la cerco mi incanto`,
	`Vorrei saper suonare il piano per poterci duettare con te`,
	`Quando andiamo a saltare sui tappeti elastici?`,
	`Sai che mi piaci tanto quando fai la bimba?`,
	`La <span style="color:#dc77dc">nuvola rosa</span> è composta esclusivamente da archi di cerchio (tranne la base); volevo fosse perfetta come la bimba che rappresenta`,
	`And I've been counting days<br>to get a way<br>to <a href="https://open.spotify.com/track/5B2KdpqWRwcnO2Cfxh7MSX">see you again</a>`,
	`Quando facciamo un'escape room?`,
	`Sei il fertilizzante per la pianta della mia anima|800;<br><br><div class="small">(e no, non è un modo carino<br>per darti della merda)</div>`,
	`<a href="https://www.desmos.com/calculator/fkvtcq1a8h">Per te</a>`,
	`Il fuoco che ho dentro si nutre del tuo dolce soffio`,
	`@0;<img src="graphics/bearHug.gif" style="transform:scale(1.4); border: 4px dashed #00000088; border-radius: 20px;">`,
	`Sei i miei guanti d'inverno`,
	`Voglio portarti a prendere un gelato`,
	`Bimba mia bellaaa vieni a raccontarmi che stai facendo, che ho voglia di sentirti`,
	`Se dovessimo mai andare a fare bungee jumping insieme farei un infarto per le troppe emozioni forti insieme; in ordine: la tua presenza, l'averti tra le braccia e cadere nel vuoto`,
	`Buona fortuna amore miooo|600;<br><br>sei così brava a farmi da musa; prova ad usare un po' di questo talento su te stessa|400;@1;<div class="beatingHeart big" style="margin-top: 8px;">🤍</div>|1200;@-1;<div class="small">ps: ricorda che devi far piangere Eco d'invidia dalla tomba</div>`,
	`Buona fortuna anche oggi bimbaaa|600;<br><br>credo in te con tutto me stesso, ieri, oggi e per sempreee|400;@0;<div class="beatingHeart big" style="margin-top: 8px;">🤍</div>`,
	`Se ci fai caso, le graffette, il cuore e la nuvola oscillano lungo delle traiettorie a forma di cuore<br><3`,
	`Quando stiamo un po' su un'amaca insieme?`,
	`Mi rendi una persona migliore`,
	`Voglio attraversare l'Europa guidando con te in braccio`,
	`La tua presenza guarisce la mia anima`,
	`Ciao nuvoletta rosa miaaaa`,
	`Inizialmente volevo mettere 4 simboli su questa pagina, ma ero indeciso tra una birra ed un tulipano, quindi ho lasciato stare (non l'ho assolutamente fatto perché non so disegnare)`,
	`Hai invaso ogni parte di me: non c'è atomo del mio essere che non ti brami`,
	`Quando dipingiamo delle tazze insieme?`,
	`<div style="font-size:0.8em">La luce è circa un milione di volte più veloce del suono, e noi, quando siamo ognuno a casa propria, siamo circa un milione di volte più distanti di quando siamo insieme; perciò se ti mandassi un bacio ora, l'immagine ti raggiungerebbe nello stesso tempo che ci impiegherebbe il suono del muah se fossi lì con te<div><div class="small">(forse penso troppo)</div>`,
	`In questo mare<br>di infinte onde<br>io ho la <a href="https://open.spotify.com/track/4Z43nMEiOiNeDrqu2BN0JD">mia</a>`,
	`Patatatinaaaaaaaaaaaaaaa sono così contento di vederti oggiiiii`,
	`Un po' si vede che sei mezza napoletana: mi hai rubato il cuore`,
	`Voglio quel tatuaggio col cuore bianco`,
	`Sei la mia motivazione`,
	`Voglio rubare una bici con te, salirci, e portartici a girare il mondo`,
	`Come vuoi chiamare i cavalli che avrai quando andremo a vivere insieme?`,
	`Voglio accarezzarti`,
	`Oggi è l'altra data ufficialmente riconosciuta per la giornata del bacio, vieni a darmene qualcuno?`,
	`Voglio ubriacarmi con te e di te`,
	`<a href="https://xkcd.com/150/">Quando vivremo insieme <3</a>`,
	`Voglio baciare dolcemente ogni centimetro del tuo corpo`,
	`Sei la soluzione a qualunque mio problema`,
	`Voglio comprare un pigiama per 2 persone e passarci le sere con te`,
	`And I don't need to speak a single word<br>'Cause you got me howlin', <a href="https://open.spotify.com/track/596lDSwIMzDoiq3E6jJ0wC">howlin'</a>`,
	`Vorrei coprire la Luna di specchi<br>per poterti cercare la notte nei riflessi`,
	`Ho ancora in testa l'igloo eh`,
	`Siamo come due anelli di una catena, intrecciati e collegati per sempre, nonostante tutti i nostri simili tentino di separarci tirandoci`,
	`Quando ci facciamo un <a href="https://open.spotify.com/track/6sLOTtQ7NxRBBjaHE0gz9I">caffè freddo</a> e tante coccole?`,
	`<i>Si' tu l'unica luce d''o core mio, l'ammore ca mai cchiù amerò accussì</i> (pure in napoletano eh)`,
	`Vorrei essere lì a darti tanti bacini sulla fronte`,
	`Oggi vengo da te hihihih|900;@25;<div class="small">hihihihihihihihihihihihihihihihihihihih</div>`,
	`Ma ciao amore mioooooooooooooooo`,
	`La prossima volta che scalerò una montagna, giunto in cima urlerò il tuo nome`,
	`Ti va di andare a far vedere ai poveretti nella caverna di Platone le nostre ombre finché scopiamo?`,
	`Se nella confusione<br>piovesse il tuo nome<br><a href="https://open.spotify.com/track/3PYYiqmhooCNCGiiPTM5zS">una lettera per volta vorrei bereeeee</a><br><br><span class="small">(è l'edit con calcutta, a me piace un sacco)</span>`,
	`Ma lo sai che ti amo?`,
	`Sei come le pagine di un bel libro: vorrei bagnarmi le dita e sfogliarti lentamente, per perdermi in ogni parola`,
	`L'idea di perderti è la cosa che più al mondo mi spaventa`,
	`E così bello sentirmi il tuo profumo addosso dopo essere stato con te`,
	`@80;Dovevo farti più foto|350;<br>quando ti avevo|350;<br><br>Dovevo darti più baci|350;<br>ed abbracci|350;<br>quando potevo`,
	`Esattamente un anno fa è successa una cosa meravigliosa su uno sdraio...<br><br><3`,
	`Ehi oggi è la giornata mondiale delle fidanzate, va bene se mi presento da te verso le 18 con fiori, cioccolatini, <span class="small">il vibratore</span> e 2 biglietti per il cinema?`,
	`Già mi immagino tutte le cene fuori improvvisate che faremo quando vivremo insieme, perché saremo troppo '''impegnati''' per farci da mangiare|400;<div class="small"><br>hehehe</div>`,
	`<a href="https://open.spotify.com/track/3CYBvI2kRCPPFnIeZdSLcn?si=58fa81e81bf14ec8">Questa canzone</a> mi ricorda molto bene quello che voglio fare con te`,
	`Topinaaaa so che probabilmente ora farà un caldo assurdo, ma vorrei tanto sentire il calore di un tuo abbraccio@35;<div class="small"><br>(abbi pietà del me che ha scritto questa cosa a febbraio, ed ha pensato non troppo argutamente di mostrartela ad agosto)</div>`,
	`'Cause you're a sky, 'cause you're <a href=https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ>a sky full of stars</a>`,
	`Oggi interpello l'Eric del futuro, chiedi a lui di dirti qualcosa di carino (e digli di vergognarsi se non l'ha ancora mai fatto oggi)`,
	`Voglio regalarti delle conchiglie, dopo aver speso ore a cercare le più belle tra le più belle`,
	`Sei il pensiero che faccio in assoluto più fatica a togliermi dalla testa`,
	`Da quando ci sei vedo il mondo di colori più <span style="color: #001b5bff;">v</span><span style="color: #124062;">i</span><span style="color: #61408b;">v</span><span style="color: #ec4a6e;">i</span><span style="color: #ff8d28;">d</span><span style="color: #ffdc13;">i</span>`,
	`Un giorno capirò di che colore hai gli occhioni, dovessi passare tutta la vita a guardarli per riuscirci|600;<div class="small"><br>spero tanto che sia necessario hihih</div>`,
	`Sei dietro ad ogni mio sorriso`,
	`$shootingStars;Stanotte avrei tanto voluto passarla con te a guardare le stelle<br><div class="small">(so che San Lorenzo era ieri, ma il picco di visibilità quest'anno cade oggi)</div>`,
	`Ti amo come Deno ama il cibo: ti cerco di continuo, senza di te mi sento vuoto, e quando ti ho davanti mi godo fino all'ultima briciola hehe`,
	`Nessuna sensazione mi manca come tenerti tra le braccia`,
	`Non c'è pace per chi cerca la felicità in qualcuno di impossibile eh?`,
	`Ogni tanto mi immagino sotto alla finestra di camera tua a strimpellare una chitarra e cantarti una serenata`,
	`Ho voglia di sentire le tue labbra`,
	`Né i più arborei <span style="color: #32cf8188">verdi</span>|200;<br>od i glaciali <span style="color: #63a4cf88">azzurri</span>|200;<br>potranno mai paragonarsi|200;<br>alla meraviglia dei tuoi <span class="angelEyes">occhioni</span>`,
	`Ehi|400;<br>ma sai|400;<br>che sei|400;<br>proprio bellaaaaaaa?`,
	`Ti ricordi l’idea di tatuarci la % di dna che abbiamo in comune?|300;<br>Io ci penso ancora molto spesso`,
	`Voglio cambiare le lenzuola del nostro letto con te|800;<div class="small"><br>(e provarle subito dopo hehehe)</div>`,
	`Quando andiamo a scegliere le piastrelle da mettere nel nostro bagno?`,
	`Voglio guardare le nuvole con te`,
	`Da quando sei nella mia vita, sei l'unica cosa in grado di rendermi veramente felice`,
	`Quando andiamo a fare un giro in motoscafo?`,
	`Chiunque dica che il mare è pieno di pesci, chiaramente non si è mai innamorato quanto me`,
	`Allora, quando vieni da me a finire di fare i pancake?<br>L'impasto dello scorso yr si sarà stufato di aspettare (e anche io)`,
	`Sei la mia patatina tu`,
	`Quanto sarà bello un giorno prenderci cura l'uno dell'altra hihih`,
	`Non so se lo sai, ma pianti di continuo stupendi fiori nei miei pensieri`,
	`@100;Sei|500;<br>il|500;<br>mio|500;<br>​$updateYoureMyEverything;`,
	`Quando ti ho conosciuta ho visto subito qualcosa in te|800;<br><br>non sapevo bene cosa, ma avevo intuito fin dal primo momento che fossi speciale|800;<div class="small"><br>hihihih</div>`,
	`Tutte le cose migliori nella vita sono costosissime, illegali, impermanenti, o si chiamano Giada`,
	`<a href="https://xkcd.com/162/">Mi fai girare</a>`,
	`Sai che ho programmato un messaggio speciale da mostrare ogni 100 aperture della pagina?<br>$timesOpenedMessagesCounter;`,
	`<div style="padding: 0.5em; white-space: nowrap; height: 7.3em; width: 5.3em; position: absolute; top: 50%; left: 50%; translate: -50% -50%; text-align:left;">@100;Tu,<br>|200;unna:<br>|800;di notte<br>|400;i sogni<br>|400;m'invadi</div>`,
	`Sei la mia prima meta quando cerco un po' di felicità`,
	`Quando facciamo un picnic?`,
	`Sei la mia frequenza di risonanza`,
	`Quando mi aiuti a<br>fare un po' di migliorie<br>estetiche a questa<br>pagina?<br>Dopotutto sono un<br>programmatore, non<br>un designer, e quella<br>col senso del bello<br>sei tu`,
	`Ehi,<br>nel caso non te ne fossi ancora accorta: mi sono innamorato di te`,
	`Sono così assuefatto al pensiero di te che nei rari momenti in cui non sei nella mia testa mi sento angosciato`,
	`Ho bisogno di te`,
	`Vieni a dissetarmi?`,
	`Quando ti fai coprire di bacini dalla testa ai piedi?`,
	`Le migliori dormite della mia vita saranno quelle con te tra le braccia`,
	`Amarti è la cosa più difficile ed al contempo facile che abbia mai fatto`,
	`Potrei ammirarti per sempre e non stancarmi mai`,
	`La <span style="text-shadow: #e2b714 0 2px 20px">luce</span> che c'è nei tuoi occhi ha un'intensità che non ho mai visto in niente e nessun altro`,
	`@100;Stars above us|200;<br>Stars below us|200;<br>Stars within @300;us@100;|200;<br>and I|800;@120;<br>don't want you|150;<br><a href="https://open.spotify.com/track/6HMFOl9HIO4qB19VAshLKE?si=e573c6edd5a74add">to ever disappear</a>`,
	`@100;Time will never|200;<br>be forever|200;<br>but I will always|250;<br>be there|400;<br>from sunrise<br><a href="https://open.spotify.com/track/6HMFOl9HIO4qB19VAshLKE?si=e573c6edd5a74add">till light has turned to gray</a>`,
	`@80;Raccontami tutte le cose terribili che hai fatto, e lascia che ti ami lo stesso<div class="small"><br>(questa l'ho rubata a Poe)</div>`,
	`<div style="font-size:0.7em; line-height: 1.8">With you I don't close my eyes,<br>Since slumber I gladly despise;<br>Why waste time in dreams<br>When your presence, it seems,<br>Is heaven there to be apprised?</div>`,
	`Mi immagino così spesso la nostra vita insieme hihihih`,
	`Sei l'unica cosa a cui riesco a pensare lucidamente appena svegliato`,
	`Ciao conigliettaaa`,
	`Quando facciamo un calco delle nostre mani intrecciate?`,
	`Vieni qui da me infiocchettata come regalo?`,
	`La tua curva più bella è quella del tuo sorriso`,
	`$allStars;@70;Sei tutte le stelle`,
	`@80;Like <a href="https://open.spotify.com/track/5Y6aGweJC7l1N5CVfHmf3E">lullabies</a> you are|250;<br>forever in my mind|250;<br>I see you in all|250;<br>the pieces in my life`,
	`Sei ciò che mi spinge a migliorarmi`,
	`Sei il mio punto debole`,
	`Sei la mia Stella Polare,|300;<br>il mio punto fisso|300;<br>il mio assioma`,
	`Ancora non mi capacito del fatto che tu sia mia|2000;<br><br><div class="small">però ne sono così felice hihih</div>`,
	`Quando sono con te non sento il peso del mondo`,
	`Sei il regalo più bello che l'universo mi abbia mai fatto`,
	`I didn't know love<br>'til I saw you there|300;<br><br>as the sun beamed<br>down on your wavy hair|300;<br><br>now my heart<br>beats fast,<br><a href="https://open.spotify.com/track/6KNVrOaj6LVgWbPz6NxvxY">I couldn't prepare</a>`,
	`Mi è così facile sviluppare un attaccamento per qualunque cosa mi ricordi di te`,
	`Come un magnete|900;<br>m'attiri`,
	`Sei il mio piatto preferito`,
	`$setAskToGoToBd;Ma ciao bimba grande|400;<br><br>@80;AUGURIIIIIIIIII|4000;@-1;<br><br><div class="small">prova ad impostare la data del telefono ad un bel giorno di 19 anni fa</div>`,
	`Sei la mia ciliegina`,
	`Ti penso anche quando non dovrei sai`,
	`È così brutto non poter parlare di te a tutto e tutti`,
	`Ho voglia di comporre qualcosa per te`,
	`Voglio addormentarmi immerso nel tuo profumo`,
	`Quando mi fai fotografare ed incorniciare occhioni?`,
	`Sei la mia migliore amica`,
	`Sei la mia vita sai`,
	`Non so se te ne sei accorta, ma quando ti guardo ho gli occhi a cuoricino`,
	`Quando ripenso a tutta la strada che hai fatto con me, mi sento così fiero`,
	`Vieni prima di tutto tu`,
	`Casa mia è dove sei tu`,
	`@80;And I feel life for the very first time|600;<br>Love in my arms and the <a href="https://open.spotify.com/track/5pLpkaIRobcvPnUmclNv6o">sun in my eyes</a>`,
	`Sei l'unico desiderio che esprimo nelle situazioni in cui è consuetudine farlo`,
	`Quando facciamo il gioco della ciglia per vedere chi dei 2 dovrà passare il resto della vita con l'altro?`,
	`Andiamo a bere qualcosa stasera?`,
	`Se c'è una cosa<br>che odio di pi@150;uuù|400;<br>@-1;È che non posso vederti|400;<br><a href="https://open.spotify.com/track/6KFxSSyI4KR3bqflXMCnnu">tutti i giorn@150;iii</a>`,
	`Sei dove finisce l'arcobaleno`,
	`Il caldo tepore d'un tuo abbraccio è tutto ciò che bramo`,
	`Got me lookin'<br>got me lookin'<br>so <a href="https://open.spotify.com/track/5iJS04ZXjMkQZ5nS0PsIeY">crazy in love</a>`,
	`Sai perché non ci si può definire? Perché le parole descrivono bene concetti generali, tipo <span style="text-shadow: #d63a25bf 0 0 4px, #b98d2779 0 0 6px, #fbeb0735 0 0 12px; color: #580c32ff">caldo</span>, <span style="color: #f7f7e4ff">bianco</span>, <span style="color: #17031c91; display: inline-block; animation: float 6s ease-in-out infinite">leggero</span>; non sono fatte per le cose uniche, e noi lo siamo <3`,
	`Mi hanno sempre affascinato i rompicapo.|800;<br>|300;<br>|300;Forse è per questo che mi piaci tanto`,
	`Mio locus amoenus tu`,
	`Ho voglia di spiaggia, patatine al rosmarino, Moretti da 66, e te`,
	`Mi manchi`,
	`Sei il libro più bello che abbia mai iniziato a leggere`,
	`Miliardi di umani hanno scritto dediche prima di me, eppure nessuna di esse sarebbe in grado di esprimere anche solo una frazione di quello che provo per te`,
	`Sei i fiori<br>tra i sanpietrini`,
	`Mi manca ogni parte di te`,
	`Non vedo l'ora di andare a comprare vestiti con te, con te che mi dirai cosa prendere ed io che sorriderò annuendo`,
	`Ciao, io sono un buono per una cenetta romantica<br><br>Reclamami pure in qualsiasi momento, poi pensa solo a farti bella per uscire`,
	`Voglio farti un cocktail`,
	`Sei il mio sogno più bello`,
	`Quando faccio qualcosa per te mi sento sempre così motivato`,
	`Sei mia pesiolinaaaaa`,
	`Mi fai ardere il cuore`,
	`- fine -`,
];


// randomize shapes delays for a more natural look
document.documentElement.style.setProperty("--shape1AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape2AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape3AnimationDelay", -Math.random() * 20 + "s");

// hooks ------------------------------
const searchParams = new URLSearchParams(window.location.search);
const quote_ = document.getElementById('quote');
const hudDate_ = document.getElementById('hudDate');
const info_ = document.getElementById('info');
const infoTitle_ = document.getElementById('infoTitle');
const infoText_ = document.getElementById('infoText');
const heartOverlay_ = document.getElementById('heartOverlay');
const prevDay_ = document.getElementById('prevDay');
const nextDay_ = document.getElementById('nextDay');
const prevDayBulk_ = document.getElementById('prevDayBulk');
const nextDayBulk_ = document.getElementById('nextDayBulk');
const hangman_ = document.getElementById('hangmanButton');
const dbg_ = document.getElementById('dbgMenuToggle');



// sweet juicy analytics --------------

const timesOpened = +localStorage.getItem("timesOpened") || 0;
localStorage.setItem("timesOpened", timesOpened + 1);



// timekeeping ------------------------

const startDate = new Date("2025-02-14 00:00:00Z");
let daysOffset = +(searchParams.get("t")) || 0;
let today, day, month, timeDiff, daysSince;

function setTime() {
	today = new Date(new Date().getTime() + 86400000 * daysOffset); // today + query param t days

	day = today.getDate();
	month = today.getMonth() + 1;

	timeDiff = today.getTime() - startDate.getTime();
	daysSince = Math.floor(((timeDiff / 60000) - today.getTimezoneOffset()) / (60 * 24));


	hudDate_.innerHTML = `- ${("" + day).length === 2 ? day : "0" + day}/${("" + month).length === 2 ? month : "0" + month} -`;
}



// typing handling --------------------

let updaterInterval = null;
let quoteUpdateTimer = null;
let quoteTyper = new Typer(quote_);



// hearts logic -----------------------

let clickCount = 0;
let lastClickTime = 0;

function createHeart(x, y) {
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerHTML = ["🤍", "🤍", "💕", "❤️"][Math.random() * 4 | 0];
	heart.style.zIndex = [2, 2, 1, 0][Math.random() * 4 | 0];
	const size = (Math.random() * 26 | 0) + 25;
	heart.style.fontSize = `${size}px`;
	heart.style.left = `${x - (size >> 3)}px`;
	heart.style.top = `${y - (size >> 2)}px`;

	// Apply the animation dynamically
	heart.style.animation = `floatUp ${Math.random() * 4 + 2}s cubic-bezier(.59, .12, .78, .4) forwards`; // between 2 and 6 seconds
	heart.style.setProperty('--curve', `${(Math.random() * 800 | 0) - 400}px`); // between -400px and 400px

	// Append the heart to the container
	heartOverlay_.appendChild(heart);

	// Remove the heart after the animation ends
	heart.addEventListener('animationend', () => {
		heart.remove();
	});
}

function makeRisingHearts(minAmt = 0) { // spawns some hearts at the bottom of the screen
	const tresh = Math.max(Math.random(), .2);
	while (minAmt > 0 || Math.random() > tresh) {
		const x = window.innerWidth / 8 + Math.random() * window.innerWidth * 3 / 4;
		const y = window.innerHeight + Math.random() * window.innerHeight / 8;
		createHeart(x, y);
		minAmt--;
	}
}

const heartStream = () => { // spawn hearts at random intervals

	makeRisingHearts();

	setTimeout(() => {
		heartStream();
	}, Math.random() * 3000 + 100);
};

function heartOnDoubleClick(event) {
	if (event.clientY < 65) { // if the click is in the top bar, ignore it (the user may be clicking buttons)
		return;
	}

	if (isPlayingHangman) { // disable the gesture if the hangman game is open
		return;
	}

	const clickTime = new Date().getTime();
	const timeBetweenClicks = clickTime - lastClickTime;

	// Reset the click count if the time between clicks is too long
	if (timeBetweenClicks > 300) { // threshold for double click
		clickCount = 0;
	}

	clickCount++;
	lastClickTime = clickTime;

	if (clickCount === 2) {
		clickCount = 0; // Reset for the next double click

		// Create hearts
		const numHearts = 16 + (Math.random() * 40 | 0); // Between 16 and 55 hearts
		for (let i = 0; i < numHearts; i++) {
			createHeart(event.clientX - 30, event.clientY - 30);
		}
	}
}



// hangman game -----------------------

let isPlayingHangman = false;
let hangmanState = {
	lives: 0,
	word: "",
	lastWord: "",
	triedLetters: [],
	isGameOver: false,
	isSpecialWord: false,
};
let bigWordList = [];

const wordContainer_ = document.getElementById("hangmanWord");
const livesContainer_ = document.getElementById("hangmanLives");
const hangmanMessage_ = document.getElementById("hangmanMessage");

const areSameLetter = (base, accented) => base.toLowerCase() === accented.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

async function fetchList(attempt = 0) {
	await fetch("https://raw.githubusercontent.com/Thread4all2/RegaloPerTatina/refs/heads/main/src/parole.txt")
		// .then(response => response.blob())
		.then(response => response.text())
		.then(text => { bigWordList = text.split("\n"); })
		.catch(error => {
			console.error('Error fetching the file:', error);

			if (attempt > 5) {
				displayMessage("Si è rotto qualcosa...", "rgb(240, 80, 80, 0.8)", 40000, 1);
				return;
			}

			setTimeout(() => {
				fetchList(attempt + 1);
			}, 300);
		});
};

function revealKnownLetters() {
	wordContainer_.innerHTML = "<br>" + hangmanState.word.split("").map(l => (hangmanState.triedLetters.some(tried => areSameLetter(tried, l)) || l === " ") ? l : "_").join("");
}

function updateLivesCounter() {
	livesContainer_.innerText = "💔".repeat(6 - hangmanState.lives) + "❤️".repeat(hangmanState.lives);

}

function checkWin() {
	if (hangmanState.word.split("").every(l => (hangmanState.triedLetters.some(tried => areSameLetter(tried, l)) || l === " "))) {
		displayMessage(
			hangmanState.lives === 6 ? "mia bimba perfetta" :
				hangmanState.lives === 1 ? "pheww" :
					["hai vinto bimbaaa", "bravaaaaaaaa", "mia genietta tu", "brava cucciolaa", "meriti un premio"][Math.random() * 5 | 0],
			"rgb(238, 130, 238, 0.8)", 4000, 1.5
		);
		makeRisingHearts(20 * hangmanState.lives * (hangmanState.isSpecialWord ? 2 : 1));
		updaterInterval = setTimeout(() => setupHangman(), 4000);
		hangmanState.isGameOver = true;
	}
}

function checkLoss() {
	if (!hangmanState.lives) {
		displayMessage(["hai perso amore", "nuuuuuu", "tontolina mia", "mi dispiaceee", "🥺"][Math.random() * 5 | 0], "rgb(100, 100, 100, 0.8)", 4000, 1.5);
		updaterInterval = setTimeout(() => setupHangman(), 4000);
		hangmanState.isGameOver = true;
	}
}

function displayMessage(message, bg, duration = 2000, size = 1.2) {
	hangmanMessage_.innerText = message;

	hangmanMessage_.style.animationDuration = duration + "ms";
	hangmanMessage_.style.fontSize = size + "em";
	hangmanMessage_.style.backgroundColor = bg;
	hangmanMessage_.classList.remove("fadeOut");
	hangmanMessage_.offsetHeight; // trigger reflow
	hangmanMessage_.classList.add("fadeOut");
}

async function setupHangman() {

	const specialWordlist = [
		"sei il mio amore tu",
		"bambolina",
		"ciliegina",
		"patatina",
		"cuoricina",
		"coniglietta",
		"ti amo",
		"nuvoletta rosa",
		"scaramandrina",
	];

	if (bigWordList.length === 0) {
		await fetchList();
	}

	hangmanState.isSpecialWord = Math.random() < .1;

	let wordlist = hangmanState.isSpecialWord ? specialWordlist : bigWordList;

	// setup state
	let randWord = wordlist[Math.random() * wordlist.length | 0];

	while (hangmanState.lastWord === randWord) {
		randWord = wordlist[Math.random() * wordlist.length | 0];
	}

	hangmanState.word = randWord;
	hangmanState.triedLetters = [hangmanState.word[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), hangmanState.word[hangmanState.word.length - 1].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()]; // reveal first and last letter
	hangmanState.lives = 6;
	hangmanState.isGameOver = false;
	hangmanState.lastWord = hangmanState.word;

	for (let i of document.getElementsByClassName(`letter`)) {

		if (areSameLetter(i.innerText, hangmanState.triedLetters[0]) || areSameLetter(i.innerText, hangmanState.triedLetters[1])) {
			i.style.color = "#40f040";
			i.style.backgroundColor = "#0b3a3aa0";
		} else {
			i.style.color = "#edf1fe";
			i.style.backgroundColor = "#aaaaaa80";
		}
	}


	// setup UI
	revealKnownLetters();
	updateLivesCounter();

}

function checkLetter(elem, letter) {

	if (hangmanState.triedLetters.includes(letter) || hangmanState.isGameOver) { // already tried the letter or the game has ended
		return;
	}

	hangmanState.triedLetters.push(letter);

	elem.style.backgroundColor = "#0b3a3aa0";

	if (hangmanState.word.split("").some(l => areSameLetter(letter, l))) {
		elem.style.color = "#40f040";
		displayMessage(["brava amoreee", "sii", "c'è", "così si fa", "brava", "continua così"][Math.random() * 6 | 0], "rgb(42, 246, 93, 0.6)");
		checkWin();

	} else {
		hangmanState.lives--;
		elem.style.color = "#808080";
		displayMessage(["nu more", "nuu", "non c'è", "eh no", "🙃", "nope"][Math.random() * 6 | 0], "rgb(240, 80, 80, 0.6)");
		checkLoss();
	}


	updateLivesCounter();

	if (hangmanState.lives) {
		revealKnownLetters();
	} else {
		wordContainer_.innerHTML = "<br>" + hangmanState.word.split("").map(l => (hangmanState.triedLetters.some(tried => areSameLetter(tried, l)) || l === " ") ? l : `<span style="color:rgb(184, 22, 76)">${l}</span>`).join("");
	}
}



// main functions ---------------------

function loadShapes() { // injects svgs, to avoid flashing them before page load
	document.getElementById("leftArrow").src = "graphics/leftArrow.svg";
	document.getElementById("rightArrow").src = "graphics/rightArrow.svg";
	document.getElementById("doubleLeftArrow").src = "graphics/doubleLeftArrow.svg";
	document.getElementById("doubleRightArrow").src = "graphics/doubleRightArrow.svg";
	document.getElementById("openGame").src = "graphics/hangman.svg";
	document.getElementById("paperclips").src = "graphics/paperclips.svg";
	document.getElementById("whiteHeart").src = "graphics/whiteHeart.svg";
	document.getElementById("pinkCloud").src = "graphics/pinkCloud.svg";
	document.getElementById("dbg").src = "graphics/debug.svg";
}

function setQuote() {

	if (daysSince < 0) {

		const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
		switch (date) {
			case "2006-10-11":
				quoteTyper.addTask("type", "Oggi nasce l'amore della mia vita, ed io sono ancora troppo pargolo per realizzare quanta felicità potrà portarmi|400; hihihih");
				localStorage.removeItem("askedToGoToBirthday");
				break;

			default:
				if (localStorage.getItem("askedToGoToBirthday")) {
					quoteTyper.addTask("type", "Giorno sbagliato amore 🙃");
				}
				else {
					quoteTyper.addTask("type", "Ehi, non si viaggia nel tempo senza permesso<br>(ti amo lo stesso)");
				}
		}
	}
	else if (daysSince < 365) {
		quoteTyper.addTask("type", quotes[daysSince]);
	}
	else if (daysSince === 365 && localStorage.getItem("endMessageShown") === null) {
		localStorage.setItem("endMessageShown", "true");
		quoteTyper.addTask("type", "È passato 1yr, quindi la pagina ha fatto il suo corso.<br>D'ora in poi, ad ogni apertura mostrerà una frase a caso");
	}
	else {
		quoteTyper.addTask("type", quotes[(Math.random() * quotes.length) | 0]);
	}

	// update the quote at midnight (wait at least 30s to avoid erasing while the quote is still being typed, as it would be annoying)
	const now = new Date();
	quoteUpdateTimer = setTimeout(() => { updateQuote(1); }, Math.max(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime(), 30_000));

}

function updateQuote(midnightMessage = 0) {

	clearInterval(updaterInterval);

	if (quoteTyper.isProcessing) {
		quoteTyper.haltProcessing();
	}

	stopSpecialQuoteRendering = true; // send stop signal to special quote tasks

	// remove anything put on the page by a special quote
	for (let i of document.querySelectorAll(".specialQuoteContent")) {
		i.remove();
	}

	quoteTyper.addTask("erase");
	quoteTyper.addTask("wait", 200);

	if (midnightMessage) {
		quoteTyper.addTask("type", `Ciao bimba, sto aggiornando la frase per domani<br><3`);
		quoteTyper.addTask("wait", 1000);
		quoteTyper.addTask("erase");
		quoteTyper.addTask("wait", 200);
	}

	setTime();
	setQuote();

}



// event handlers ---------------------

let dayChanges = 0;
let areBulksHidden = true;
let stopSpecialQuoteRendering = false; // used to send a stop signal to continuously running tasks executed by special quotes


function updateDayChangeButtonsVisibility() {

	if (daysSince < 1) { // if it's not the first day, we can go back
		prevDay_.style.display = "none";
		prevDayBulk_.style.display = "none";
	}
	else {
		prevDay_.style.display = "block";

		if (!areBulksHidden) {
			prevDayBulk_.style.display = "block";
		}
	}
	if (new Date().getTime() - today.getTime() < 86_400_000) { // if it's not today, we can go forward
		nextDay_.style.display = "none";
		nextDayBulk_.style.display = "none";
	}
	else {
		nextDay_.style.display = "block";

		if (!areBulksHidden) {
			nextDayBulk_.style.display = "block";
		}
	}

	if (areBulksHidden && dayChanges > 3) {
		areBulksHidden = false;
		prevDay_.style.transform = "translateX(51px)";
		nextDay_.style.transform = "translateX(-51px)";
		setTimeout(() => {
			if (daysSince > 0) {
				prevDayBulk_.style.display = "block";
			}
			if (new Date().getTime() - today.getTime() > 86_400_000) {
				nextDayBulk_.style.display = "block";
			}
		}, 200);
	}
}

prevDay_.onclick = () => {

	daysOffset--;

	quoteTyper.haltProcessing();
	quoteTyper.clearText();

	setTime();
	updateQuote();

	dayChanges++;
	updateDayChangeButtonsVisibility();
};

nextDay_.onclick = () => {

	daysOffset++;

	quoteTyper.haltProcessing();
	quoteTyper.clearText();

	setTime();
	updateQuote();

	dayChanges++;
	updateDayChangeButtonsVisibility();
};

prevDayBulk_.onclick = () => {

	const daysInPrevMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][(new Date(new Date().getTime() + 86400000 * daysOffset).getMonth() + 11) % 12]; // days in the previous month

	if (daysSince > daysInPrevMonth) {
		daysOffset -= daysInPrevMonth;
	} else if (daysSince > 0) {
		daysOffset -= daysSince;
	} else {
		daysOffset = 0;
	}

	quoteTyper.haltProcessing();
	quoteTyper.clearText();

	setTime();
	updateQuote();

	updateDayChangeButtonsVisibility();
};

nextDayBulk_.onclick = () => {

	const daysInCurrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][new Date(new Date().getTime() + 86400000 * daysOffset).getMonth()]; // days in the previous month

	const diff = (new Date().getTime() - startDate.getTime()) / 86_400_000 | 0; // days since start date


	if (diff - daysSince > daysInCurrMonth) {
		daysOffset += daysInCurrMonth;
	} else {
		daysOffset = 0;
	}

	quoteTyper.haltProcessing();
	quoteTyper.clearText();

	setTime();
	updateQuote();

	updateDayChangeButtonsVisibility();
};

hangman_.onclick = () => {

	isPlayingHangman = !isPlayingHangman;
	hangmanMessage_.classList.remove("fadeOut");


	if (isPlayingHangman) {
		quoteTyper.haltProcessing();
		quoteTyper.clearText();
		hudDate_.innerHTML = `- impiccato -`;

		prevDay_.style.display = "none";
		nextDay_.style.display = "none";
		if (!areBulksHidden) {
			prevDayBulk_.style.display = "none";
			nextDayBulk_.style.display = "none";
		}

		document.getElementById("hangmanContainer").style.display = "flex";
		document.getElementById("openGame").src = "graphics/leftArrow.svg";

		hangman_.style.display = "none";
		hangman_.style.bottom = "unset";
		hangman_.style.top = "10px";
		hangman_.style.padding = "7px 8px 3px 6px";
		hangman_.style.background = "#0a021d10";
		hangman_.style.display = "block";

		// clear the update-at-midnight timer
		clearTimeout(quoteUpdateTimer);

		setupHangman();
	}
	else {
		quoteTyper.haltProcessing();
		quoteTyper.clearText();
		setTime();

		document.getElementById("hangmanContainer").style.display = "none";
		document.getElementById("openGame").src = "graphics/hangman.svg";

		hangman_.style.display = "none";
		hangman_.style.top = "unset";
		hangman_.style.bottom = "10px";
		hangman_.style.padding = " 2px 2px 0px 2px";
		hangman_.style.background = "#d697dc49";
		hangman_.style.display = "block";

		updateDayChangeButtonsVisibility();
		setQuote();
	}
};



// code calling -----------------------


// scroll restoration (sometimes on iPhone the page gets scrolled down when reopening the browser, webkit I guess)

window.scrollTo(0, 0); // avoids the page getting off center on browser reopening (due to browser heuristics' black magic)
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}



// set a clock to refresh the page if it goes inactive (like in background) for more than 16 seconds (to correctly count visits)

localStorage.setItem("tick", new Date().getTime());

setInterval(() => {

	if (new Date().getTime() - localStorage.getItem("tick") > 32_000) {
		location.reload(true);
	}

	localStorage.setItem("tick", new Date().getTime());

}, 16_000);



// set the time and load the shapes

setTime();
loadShapes();



// check whether to enable features

if (daysSince > 0) { // if it's not the first day, we can go back
	prevDay_.style.display = "block";
}

if (new Date().getTime() - today.getTime() >= 86_400_000) { // if the day displayed is earlier than today, we can go forward
	nextDay_.style.display = "block";
}


if (daysSince > 2) { // enable double click to create hearts on 2025-02-17
	document.addEventListener('click', heartOnDoubleClick);
}

if (daysSince > 24) { // enable the hangman game
	hangman_.style.display = "block";
}

if (daysSince % 11 === 0) { // make a heart fountain on every 11 days

	hudDate_.style.color = "rgb(162, 19, 100)";

	let heartFountain = setInterval(() => {
		makeRisingHearts(5);
	}, 100);

	setTimeout(() => {
		clearInterval(heartFountain);
	}, 20000);
}


// make the stream of up-bubbling hearts

makeRisingHearts(20);
heartStream();


// set the quote (displaying messages on special occasions)

switch (timesOpened) {
	case 0:
		if (daysSince === 0) {
			infoTitle_.innerHTML = "Ciao patatina";
			infoText_.innerHTML = `Questa pagina serve a ricordarti che ti penso sempre: ogni giorno fino al prossimo 14 febbraio, qui troverai una frase diversa dedicata a te (in alcuni giorni ci saranno cose particolari che ho passato decisamente troppo tempo a programmare hahaha)<br><br><br>spero tanto ti piaccia <3`;
			info_.style.display = "block";
		} else {
			setTimeout(() => { setQuote(1); }, 150);
		}
		break;

	case 100:
	case 200:
	case 300:
		infoTitle_.innerHTML = `${timesOpened}!`;
		infoText_.innerHTML = `Hai aperto questa pagina ${timesOpened} volte bimba<br><br><div style="position:absolute; left: 12%; bottom: 12%; font-size:3em; ">🤍</div> hihihih <span style="position:absolute; right: 12%; bottom: 12%; font-size:3em; ">🤍</span><br><br><span class="small">lice io</span>`;
		info_.style.display = "block";
		break;

	case 400:
	case 500:
	case 600:
	case 700:
	case 800:
	case 900:
		infoTitle_.innerHTML = `${timesOpened}?!`;
		infoText_.innerHTML = `Wow se sono tante<br><br>adesso facciamo un po' di statistica: dunque, sono passati ${daysSince} giorni da san valentino, quindi in media l'hai aperta ${(timesOpened / daysSince).toFixed(2)} volte al giorno hihihih<br><br>ti amo patata <3`;
		info_.style.display = "block";
		break;

	case 1000:
		infoTitle_.innerHTML = `${timesOpened}???`;
		infoText_.innerHTML = `Amore mio<br><br>non so bene cosa dire hahaha<br><br>Immagino dovrò rifarlo se ti è piaciuto tanto 🙃`;
		info_.style.display = "block";
		break;

	default:
		setTimeout(() => { setQuote(1); }, 150);
}




// debug ------------------------------

const debug = searchParams.get("dbg");
let debugMenuUpdater = null;

if (debug === "stat") {

	dbg_.style.display = "block";

	dbg_.onclick = () => {

		if (info_.style.display === "none") {

			// adapt the info box styles
			infoTitle_.style.margin = "-20px 0 16px 0";
			infoTitle_.style.fontSize = "1.5em";
			infoTitle_.style.textAlign = "left";

			infoText_.style.fontFamily = "monospace";
			infoText_.style.whiteSpace = "pre-wrap";
			infoText_.style.fontSize = "0.8em";
			infoText_.style.textAlign = "left";

			// adjust the x button bevavior, as it mustn't trigger the quote update
			document.getElementById("xButton").onclick = () => { document.getElementById('info').style.display = 'none'; };

			infoTitle_.textContent = "DEBUG INFO";

			infoText_.innerHTML = `\
<b>MAIN:</b>
Visit at   : ${today.toISOString().slice(0, -5).replace("T", ", ")} UTC
Time Diff  : ${timeDiff.toLocaleString("en-US")}
Days Since : ${daysSince} (${((today.getTime() - startDate.getTime()) / 86_400_000).toFixed(6)})
Opened     : ${timesOpened} times
Last tick  : <span id="dbgLastTickTime" style="font-family:monospace;">${new Date(+localStorage.getItem("tick")).toISOString().split('T')[1].slice(0, -1)}</span> UTC
Hearts     : <span id="dbgHeartsCounter" style="font-family:monospace;">${heartOverlay_.children.length}</span>

<b>FLAGS:</b>
Asked      : ${localStorage.getItem("askedToGoToBirthday") ? "yes" : "no"}
End        : ${localStorage.getItem("endMessageShown") ? "seen" : "unseen"}

<div style="display:flex; flex-direction:row; justify-content:space-between; position:absolute; bottom: 10px; left: 10px; gap: 8px;">
<button style="padding: 8px 8px 4px 8px; border-radius: 8px; border: none; font-size: 1em; background-color: #aa3333; color: #fff;" onclick="location.reload(true);">Reload</button>
</div>
`;

			debugMenuUpdater = setInterval(() => {
				document.getElementById("dbgLastTickTime").textContent = new Date(+localStorage.getItem("tick")).toISOString().split('T')[1].slice(0, -1);
				document.getElementById("dbgHeartsCounter").textContent = heartOverlay_.children.length;
			}, 100);
			info_.style.display = "block";

		} else {

			if (debugMenuUpdater) {
				clearInterval(debugMenuUpdater);
				debugMenuUpdater = null;
			}
			info_.style.display = "none";
		}
	};

}
