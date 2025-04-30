const quotes = [
	`- error -`,
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
	`- fine della versione corrente-`,
];


// randomize shapes delays for a more natural look
document.documentElement.style.setProperty("--shape1AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape2AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape3AnimationDelay", -Math.random() * 20 + "s");

// hooks
const quote_ = document.getElementById('quote');
const hudDate_ = document.getElementById('hudDate');
const heartOverlay_ = document.getElementById('heartOverlay');
const prevDay_ = document.getElementById('prevDay');
const nextDay_ = document.getElementById('nextDay');
const prevDayBulk_ = document.getElementById('prevDayBulk');
const nextDayBulk_ = document.getElementById('nextDayBulk');
const hangman_ = document.getElementById('hangmanButton');

// sweet juicy analytics
const timesOpened = +localStorage.getItem("timesOpened") || 0;
localStorage.setItem("timesOpened", timesOpened + 1);


// main timekeeping
const startDate = new Date("2025-02-14 00:00:00Z");
let daysOffset = +(new URLSearchParams(window.location.search).get("t")) || 0;
let today, day, month, timeDiff, daysSince;

function setTime() {
	today = new Date(new Date().getTime() + 86400000 * daysOffset); // today + query param t days

	day = today.getDate();
	month = today.getMonth() + 1;

	timeDiff = today.getTime() - startDate.getTime();
	daysSince = Math.floor(((timeDiff / 60000) - today.getTimezoneOffset()) / (60 * 24));


	hudDate_.innerHTML = `- ${("" + day).length === 2 ? day : "0" + day}/${("" + month).length == 2 ? month : "0" + month} -`;
}

// typing handling

let updaterInterval = null;
let quoteTyper = new Typer(quote_);



// hearts logic

let clickCount = 0;
let lastClickTime = 0;

function createHeart(x, y) {
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerHTML = Math.random() > .5 ? "🤍" : Math.random() > .5 ? "💕" : "❤️";
	heart.style.zIndex = Math.random() > .5 ? 2 : Math.random() > .5 ? 1 : 0;
	const size = Math.random() * 25 + 25;
	heart.style.fontSize = `${size}px`;
	heart.style.left = `${x - (size >> 3)}px`;
	heart.style.top = `${y - (size >> 2)}px`;

	// const correctionFactor = x < 200 ? 150 : x > window.innerWidth - 100 ? 600 : 400; // correction factor to avoid hearts going off screen

	// random animation duration and curve
	const duration = Math.random() * 4 + 2; // take between 2 and 6 seconds
	const curve = Math.random() * 800 - 400; // between -400px and 400px

	// Apply the animation dynamically
	heart.style.animation = `floatUp ${duration}s cubic-bezier(.59, .12, .78, .4) forwards`;
	heart.style.setProperty('--curve', `${curve}px`);

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

		// Create multiple hearts with slightly different curves
		const numHearts = 16 + (40 * Math.random() | 0); // Between 16 and 55 hearts
		for (let i = 0; i < numHearts; i++) {
			createHeart(event.clientX - 30, event.clientY - 30);
		}
	}
}


// hangman game

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

async function fetchList() {
	await fetch("https://raw.githubusercontent.com/Thread4all2/RegaloPerTatina/refs/heads/main/src/60kParole.txt")
		// .then(response => response.blob())
		.then(response => response.text())
		.then(text => { bigWordList = text.split("\n"); })
		.catch(error => {
			console.error('Error fetching the file:', error);
			setTimeout(() => {
				fetchList();
			}, 300);
		});
};

fetchList();

const wordContainer_ = document.getElementById("hangmanWord");
const livesContainer_ = document.getElementById("hangmanLives");
const hangmanMessage_ = document.getElementById("hangmanMessage");

const areSameLetter = (base, accented) => base.toLowerCase() === accented.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function revealKnownLetters() {
	wordContainer_.innerHTML = "<br>" + hangmanState.word.split("").map(l => (hangmanState.triedLetters.some(tried => areSameLetter(tried, l)) || l === " ") ? l : "_").join("");
}

function updateLivesCounter() {
	livesContainer_.innerText = "💔".repeat(6 - hangmanState.lives) + "❤️".repeat(hangmanState.lives);

}

function checkWin() {
	if (hangmanState.word.split("").every(l => (hangmanState.triedLetters.some(tried => areSameLetter(tried, l)) || l === " "))) {
		displayMessage(
			hangmanState.lives == 6 ? "mia bimba perfetta" :
				hangmanState.lives == 1 ? "pheww" :
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



// main functions

function loadShapes() { // injects svgs, to avoid flashing them before page load
	document.getElementById("leftArrow").src = "graphics/leftArrow.svg";
	document.getElementById("rightArrow").src = "graphics/rightArrow.svg";
	document.getElementById("doubleLeftArrow").src = "graphics/doubleLeftArrow.svg";
	document.getElementById("doubleRightArrow").src = "graphics/doubleRightArrow.svg";
	document.getElementById("openGame").src = "graphics/hangman.svg";
	document.getElementById("paperclips").src = "graphics/paperclips.svg";
	document.getElementById("whiteHeart").src = "graphics/whiteHeart.svg";
	document.getElementById("pinkCloud").src = "graphics/pinkCloud.svg";
}

function setQuote(bypassInfo = 1) {

	if (!bypassInfo && timesOpened === 0 && daysSince === 0) { // show info on first visit
		document.getElementById("info").style.display = "block";
		return;
	}


	if (daysSince < 0) {

		if (today.getDate() === 11 && today.getMonth() === 9 && today.getFullYear() === 2006) {

			quoteTyper.addTask("type", "Oggi nasce l'amore della mia vita, ed io sono ancora troppo pargolo per realizzarlo");
			localStorage.removeItem("askedToGoToBirthday");
		}
		else {

			if (localStorage.getItem("askedToGoToBirthday") === "1") {
				quoteTyper.addTask("type", "Giorno sbagliato amore 🙃");
			}
			else {
				quoteTyper.addTask("type", "Ehi, non si viaggia nel tempo senza permesso<br>(ti amo lo stesso)");
			}
		}
	}
	else if (daysSince < 365) {

		// update the quote at midnight (wait at least 30s to avoid erasing while the quote is still being typed, as it would be annoying)
		const now = new Date();
		setTimeout(() => { updateQuote(1); }, Math.max(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime(), 30_000));


		if (daysSince === 0) {

			function updateHeartbeats() {
				quoteTyper.removeEventListener("tasksCompleted", updateHeartbeats);

				if (document.getElementById("heartbeats")) {
					updaterInterval = setInterval(() => {
						document.getElementById("heartbeats").innerText = ((new Date() - new Date("2022-07-20")) / 850 | 0).toLocaleString();

					}, 850);
				}
				// document.getElementById("beatingHearts").style.animationDelay = "450ms";
			}

			quoteTyper.addTask(
				"type",
				`Ciao amoreee<br>BUON SAN VALENTINOOO|400;<br>---<br>|400; \
				Il cuore di un uomo batte mediamente 3 miliardi di volte. \
				Tutti i battiti che ha fatto il mio da quando sei nella mia vita sono stati dovuti a te, ed ora come ora ammontano a circa \
				<span id="heartbeats">${(Math.round((new Date() - new Date("2022-07-20")) / 850 + 19)).toLocaleString()}</span><div class="beatingHeart" style="margin-top: 8px;">🤍🤍🤍</div>`
			);

			quoteTyper.addEventListener("tasksCompleted", updateHeartbeats);

		}
		else {
			quoteTyper.addTask("type", quotes[daysSince]);
		}


	}
	else if (daysSince === 365 && localStorage.getItem("endMessageShown") === null) {
		localStorage.setItem("endMessageShown", "1");
		quoteTyper.addTask("type", "È passato 1yr, quindi la pagina ha fatto il suo corso.<br>D'ora in poi, ad ogni apertura mostrerà una frase a caso");
	}
	else {
		quoteTyper.addTask("type", quotes[(Math.random() * quotes.length) | 0]);
	}

}

function updateQuote(midnightMessage = 0) {

	clearInterval(updaterInterval);

	if (quoteTyper.isProcessing) {
		quoteTyper.haltProcessing();
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



// code calling

window.scrollTo(0, 0); // avoids the page getting off center on browser reopening (due to browser heuristics' black magic)
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

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

if (daysSince % 11 === 0) {

	let heartFountain = setInterval(() => {
		makeRisingHearts(5);
	}, 100);

	setTimeout(() => {
		clearInterval(heartFountain);
	}, 20000);
}



makeRisingHearts(20);
heartStream();

setTimeout(() => { setQuote(0); }, 150);

// event handlers

let dayChanges = 0;
let areBulksHidden = true;

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
		prevDay_.style.transform = "translateX(45px)";
		nextDay_.style.transform = "translateX(-45px)";
		setTimeout(() => {
			prevDayBulk_.style.display = "block";
			nextDayBulk_.style.display = "block";
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

	if (daysSince > 30) {
		daysOffset -= 30;
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

	const diff = (new Date().getTime() - startDate.getTime()) / 86_400_000 | 0; // days since start date

	if (diff - daysSince > 30) {
		daysOffset += 30;
	} else if (daysSince < diff) {
		daysOffset += diff - daysSince;
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


console.log(`\x1b[94mDebug info:\x1b[0m
Today is    : ${today}
TimeDiff    : ${timeDiff} (${(today.getTime() - startDate.getTime()) / 86_400_000} days)
DaysSince   : ${daysSince}
Opened	    : ${timesOpened} times
EndMessage  : ${localStorage.getItem("endMessageShown") ? "seen" : "unseen"}
`);
