const quotes = [
	`- error -`,
	`Lo specchio in camera tua deve aver vinto alla lotteria degli specchi o qualcosa del genere per poterti vedere così tanto ogni giorno`,
	`Voglio massaggiarti su un lettino in una stanza piena di candele e petali di rosa`,
	`Oggi ti mostro la prima cosa particolare di cui ti ho parlato nell'introduzione della pagina: fai doppio click da qualche parte`,
	`una volta ho sognato di conoscere l'amore della mia vita; mi devo ancora svegliare`,
	`Bramo il tuo effluvio, il tuo estro ed il tuo efflusso @1000;\\@0;<div class="big" style="animation: 1s ease-out 1 zoomIn, 20s ease-in-out 1s infinite alternate wobble;">🙃</div>`,
	`L'idea di fare questa cosa mi è venuta la notte del 31/01, quando mi sono svegliato e non sono più riuscito a prendere sonno`,
	`Spero che oggi ci sia il sole, mi rallegra così tanto l'animo sapere che sei felice`,
	`Vorrei tanto essere un musicista per poterti dedicare canzoni d'amore`,
	`Sei tutti i ricordi più belli che ho`,
	`Hai mai provato il brio di guardare la frase della giornata con qualche tua amica di fianco?@600;\\@-1;<br>Qualora lo facessi, vogliate perdonarmi eventuali amiche,@300;\\@50;<br>VOGLIO SCOPARTI@80;IIIII`,
	`Che crudele l'universo a fare le anime in coppie per poi dividerle`,
	`Voglio fare colla braciati stretti stretti`,
	`Sono innamorato del crepuscolo: mi ricorda il tempo con te, che sei <a href="https://open.spotify.com/track/0GrPvrBGrxwrU7rjlwYZiH">il mio tramonto</a>`,
	`<i>Nel suo aspetto tal dentro mi fei,<br>come si fe' Glauco nel gustar de l'erba<br>che 'l fé consorto in mar de li altri dei</i><br><br>(sì, ricordo ancora un pochino Dante)`,
	`- fine della versione corrente-`
];

// randomize shapes delays for a more natural look
document.documentElement.style.setProperty("--shape1AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape2AnimationDelay", -Math.random() * 20 + "s");
document.documentElement.style.setProperty("--shape3AnimationDelay", -Math.random() * 20 + "s");

// hooks
const quote_ = document.getElementById('quote');
const hudDate_ = document.getElementById('hudDate');
const heartContainer_ = document.getElementById('heartContainer');
const prevDay_ = document.getElementById('prevDay');
const nextDay_ = document.getElementById('nextDay');

// sweet juicy analytics
const timesOpened = +localStorage.getItem("timesOpened") || 0;
localStorage.setItem("timesOpened", timesOpened + 1);


// main timekeeping
const startDate = new Date("2025-02-14 00:00:00");
let daysOffset = +(new URLSearchParams(window.location.search).get("t")) || 0;
let today, day, month, timeDiff, daysSince;

function setTime() {
	today = new Date(new Date().getTime() + 86400000 * daysOffset); // today + query param t days

	day = today.getDate();
	month = today.getMonth() + 1;

	timeDiff = today.getTime() - startDate.getTime();
	daysSince = Math.floor(timeDiff / (1000 * 3600 * 24));

	hudDate_.innerHTML = `- ${("" + day).length === 2 ? day : "0" + day}/${("" + month).length == 2 ? month : "0" + month} -`;
}


// quote handling
const typeSpeed = 60;
let quoteContent = "";
let updaterInterval; // reference to eventual setIntervals that keep updating values to kill in case there was a need to rewrite text
let isTyping = false; // set to true to kill any typing-erasing in progress
let typeInterrupt = false; // set to true to kill any typing-erasing in progress


async function type(content, toWriteNextIndex = 0, speed = typeSpeed) {

	isTyping = true;

	return new Promise((resolve) => {

		const typeHelper = () => {
			if (typeInterrupt) {
				typeInterrupt = false;
				isTyping = false;
				resolve();
				return;
			}

			if (toWriteNextIndex >= content.length) {
				isTyping = false;
				resolve();
				return;
			}

			if (speed === 0) { // if speed is set to 0, output the whole string at once
				quoteContent += content.substring(toWriteNextIndex);
				quote_.innerHTML = quoteContent;
				isTyping = false;
				resolve();
				return;
			}


			let i = toWriteNextIndex;

			if (content[i] === "<" && content[i + 1] !== "3") { // output tags as single tokens, to avoid weird pauses
				while (content[++i] !== ">");
				quoteContent += content.substring(toWriteNextIndex, i + 1);

				toWriteNextIndex = i + 1;
				return typeHelper();
			}

			if (content[i] === "@") { // @number; sets the typing speed
				while (content[++i] !== ";");

				speed = +content.substring(toWriteNextIndex + 1, i);
				if (speed === -1) { speed = typeSpeed; }

				toWriteNextIndex = i + 1;
				return typeHelper();
			}

			if (content[i] === "\\") { // \ skips a typing step (to create delays such as @1000;\@-1;)
				toWriteNextIndex++;
				setTimeout(() => typeHelper(), speed);
				return;
			}

			quoteContent += content.substring(toWriteNextIndex, i + 1);
			quote_.innerHTML = quoteContent;
			toWriteNextIndex = i + 1;

			let delay = speed;
			if ([",", ";", ":"].includes(content[i])) {
				delay = 3 * speed;

			}
			else if ([".", "!", "?"].includes(content[i])) {
				delay = 7 * speed;
			}

			setTimeout(() => typeHelper(), delay);
		};

		typeHelper();
	});
}

async function erase(charsAmt = quoteContent.length, speed = 0.8 * typeSpeed) {

	isTyping = true;

	return new Promise((resolve) => {

		const eraseHelper = () => {

			if (typeInterrupt) {
				typeInterrupt = false;
				isTyping = false;
				resolve();
				return;
			}

			if (charsAmt <= 0) {
				isTyping = false;
				resolve();
				return;
			}

			if (speed === 0) { // if speed is set to 0, clear all the string at once
				quoteContent = "";
				quote_.innerHTML = "";
				isTyping = false;
				resolve();
				return;
			}

			let charsToErase = 1;

			if (quoteContent[quoteContent.length - 1] === ">") { // erase tags as single tokens, to avoid weird pauses
				while (quoteContent[quoteContent.length - charsToErase] !== "<") {
					charsToErase++;
				}
			}

			quoteContent = quoteContent.slice(0, -charsToErase);
			quote_.innerHTML = quoteContent;

			if (charsToErase === 1) {
				charsAmt--;
				setTimeout(() => eraseHelper(), speed);
			} else {
				eraseHelper();
			}
		};

		eraseHelper();

	});
}


// hearts whereabouts
let clickCount = 0;
let lastClickTime = 0;

function createHeart(x, y) {
	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.innerHTML = Math.random() > .5 ? "🤍" : Math.random() > .5 ? "💕" : "❤️";
	heart.style.left = `${x}px`;
	heart.style.top = `${y}px`;
	heart.style.zIndex = Math.random() > .5 ? 2 : Math.random() > .5 ? 1 : 0;
	heart.style.fontSize = `${Math.random() * 25 + 25}px`;

	// random animation duration and curve
	const duration = Math.random() * 4 + 2; // take between 2 and 6 seconds
	const curve = (Math.random() > .5 ? 1 : -1) * (Math.random() * 300); // between 0 and 300px

	// Apply the animation dynamically
	heart.style.animation = `floatUp ${duration}s ease-in forwards`;
	heart.style.setProperty('--curve', `${curve}px`);

	// Append the heart to the container
	heartContainer_.appendChild(heart);

	// Remove the heart after the animation ends
	heart.addEventListener('animationend', () => {
		heart.remove();
	});
}

function handleDoubleClick(event) {
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
		const numHearts = 16 + (40 * Math.random() | 0); // Between 16 and 54 hearts
		for (let i = 0; i < numHearts; i++) {
			createHeart(event.clientX, event.clientY);
		}
	}
}

function makeRisingHearts(minAmt = 0) { // spawns some hearts at the bottom of the screen on random intervals
	const tresh = Math.max(Math.random(), .2);
	while (minAmt > 0 || Math.random() > tresh) {
		const x = window.innerWidth / 4 + Math.random() * window.innerWidth / 2;
		const y = window.innerHeight;
		createHeart(x, y);
		minAmt--;
	}

	setTimeout(() => {
		makeRisingHearts();
	}, Math.random() * 5000);
}


// main functions
function loadShapes() { // injects svgs, to avoid flashing them before page load
	document.getElementById("leftArrow").src = "graphics/leftArrow.svg";
	document.getElementById("rightArrow").src = "graphics/rightArrow.svg";
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

			type("Oggi nasce l'amore della mia vita, ed io sono ancora troppo pargolo per realizzarlo");
			localStorage.removeItem("askedToGoToBirthday");
		}
		else {

			if (localStorage.getItem("askedToGoToBirthday") === "1") {
				type("Giorno sbagliato amore 🙃");
			}
			else {
				type("Ehi, non si viaggia nel tempo senza permesso<br>(ti amo lo stesso)");
			}
		}
	}
	else if (daysSince < 365) {

		// update the quote at midnight (wait at least 30s to avoid erasing while the quote is still being typed)
		const now = new Date();
		setTimeout(() => { updateQuote(1); }, Math.max(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime(), 30_000));


		if (daysSince === 0) {
			type(`Ciao amoreee<br>BUON SAN VALENTINOOO<div class='small'></div>🤍🤍🤍<br><div class='small'></div>@400;\\@60; \
				Il cuore di un uomo batte mediamente 3 miliardi di volte. \
				Tutti i battiti che ha fatto il mio da quando sei nella mia vita sono stati dovuti a te, ed ora come ora ammontano a circa \
				<span id="heartbeats">${(0 | ((new Date() - new Date("2022-07-20")) / 850) + 19).toLocaleString()}</span>`).then(() => {
				updaterInterval = setInterval(() => {
					document.getElementById("heartbeats").innerText = (0 | ((new Date() - new Date("2022-07-20")) / 850)).toLocaleString();
				}, 850);
			});
		}
		else {
			type(quotes[daysSince]);
		}


	}
	else if (daysSince === 365 && localStorage.getItem("endMessageShown") === null) {
		localStorage.setItem("endMessageShown", "1");
		type("È passato 1yr, quindi la pagina ha fatto il suo corso.<br>D'ora in poi, ad ogni apertura mostrerà una frase a caso");
	}
	else {
		type(quotes[Math.floor(Math.random() * quotes.length)]);
	}

}

function updateQuote(midnightMessage = 0) {

	clearInterval(updaterInterval);

	erase().then(() => {
		setTimeout(() => {

			if (midnightMessage) {
				type(`Amore, che ci fai qui a mezzanotte?<br>Sto aggiornando la frase per domani <3`).then(() => {
					setTimeout(() => {
						erase().then(() => {
							setTime();
							setQuote();
						});
					}, 1200);
				});
			}
			else {
				setTime();
				setQuote();
			}

		}, 200);
	});
}




// code calling

setTime();
loadShapes();


// check whether to enable the buttons to change days
if (daysSince > 0) { // if it's not the first day, we can go back
	prevDay_.style.display = "block";
}
if (new Date().getTime() - today.getTime() >= 86_400_000) { // if it's earlier than today, we can go forward
	nextDay_.style.display = "block";
}

setTimeout(() => makeRisingHearts(20), 200);

setTimeout(() => { setQuote(0); }, 250);

// event handlers
prevDay_.onclick = () => {
	daysOffset--;

	if (isTyping) {
		typeInterrupt = true;
	}

	quote_.innerHTML = "";
	quoteContent = "";

	// update visibility of the buttons to change day
	if (daysSince < 2) { // if it's not the first day, we can go back
		prevDay_.style.display = "none";
	}
	else {
		prevDay_.style.display = "block";
	}
	if (new Date().getTime() - (today.getTime() - 86_400_000) < 86_400_000) { // if it's not the first day, we can go back
		nextDay_.style.display = "none";
	}
	else {
		nextDay_.style.display = "block";
	}

	setTimeout(() => updateQuote(), 100);
};

nextDay_.onclick = () => {
	daysOffset++;

	if (isTyping) {
		typeInterrupt = true;
	}

	quote_.innerHTML = "";
	quoteContent = "";

	setTimeout(() => updateQuote(), 100);


	// update visibility of the buttons to change day
	if (daysSince < 0) { // if it's not the first day, we can go back
		prevDay_.style.display = "none";
	}
	else {
		prevDay_.style.display = "block";
	}
	if (new Date().getTime() - (today.getTime() + 86_400_000) < 86_400_000) { // if it's not the first day, we can go back
		nextDay_.style.display = "none";
	}
	else {
		nextDay_.style.display = "block";
	}
};

if (daysSince > 2) { // enable double click to create hearts on 2025-02-17
	document.addEventListener('click', handleDoubleClick);
}


console.log(`\x1b[94mDebug info:\x1b[0m
Today is    : ${today}
TimeDiff    : ${timeDiff} (${(today.getTime() - startDate.getTime()) / 86_400_000} days)
DaysSince   : ${daysSince}
Opened	    : ${timesOpened} times
EndMessage  : ${localStorage.getItem("endMessageShown") ? "seen" : "unseen"}
`);
