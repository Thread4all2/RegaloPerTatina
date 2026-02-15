class Typer extends EventTarget {
	constructor(element, typeSpeed = 60) {
		super();
		this.element = element; // ref to the html element being handled by the typer
		this.text = ""; // internal representation of the element content
		this.speed = typeSpeed;
		this.taskQueue = [];
		this.isProcessing = false;
		this.interrupt = false;
		/*
			custom helper functions, called with $funName; in the type() method, or with addTask("call", "funName")
			- any added content to the page by these functions should have the class "specialQuoteContent", so it can be removed when switching quotes
			- if any continuously running effect is implemented, stopSpecialQuoteRendering should be set to false at the start of the function
			- edits to any of the already existing page elements should be reverted when stopSpecialQuoteRendering is set to true
			- any running effect should check stopSpecialQuoteRendering and stop when it becomes true
		*/
		this.helperFuncs = {
			updateHeartbeatCounter: () => {
				if (document.getElementById("heartbeats")) {
					updaterInterval = setInterval(() => {
						document.getElementById("heartbeats").innerText = ((new Date() - new Date("2022-07-20")) / 850 | 0).toLocaleString();
					}, 850);
				}
			},
			shootingStars: () => {

				stopSpecialQuoteRendering = false;

				const shootingStars = document.createElement("div");
				shootingStars.innerHTML = `<div class="stars specialQuoteContent">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
</div>`;
				document.body.appendChild(shootingStars);

				// load the shootingStars css stylesheet
				const customStyle = document.createElement("link");
				customStyle.rel = "stylesheet";
				customStyle.href = "src/shootingStars.css";
				customStyle.className = "specialQuoteContent";
				document.head.appendChild(customStyle);
			},
			updateYoureMyEverything: () => {

				if (daysSince === 198) {

					const stepSize = +window.sessionStorage.getItem("youreMyEverythingStepSize") || ((Math.random() * 3 + 1) | 0);
					window.sessionStorage.setItem("youreMyEverythingStepSize", stepSize);

					const choiceIndex = ((+window.sessionStorage.getItem("youreMyEverythingChoiceIndex") || 0) + stepSize) % 7;
					window.sessionStorage.setItem("youreMyEverythingChoiceIndex", choiceIndex);

					const choice = ["tutto", "mondo", "futuro", "primo pensiero", "desiderio", "amore", "cuoricino"][choiceIndex];

					// console.log(`youreMyEverything stepSize: ${stepSize}, choiceIndex: ${choiceIndex}, choice: ${choice}`);


					quoteTyper.addTask("type", choice, 100);
					quoteTyper.addTask("wait", 2000);
					quoteTyper.addTask("erase", choice.length, 50);
					quoteTyper.addTask("wait", 600);

					quoteTyper.addTask("call", "updateYoureMyEverything"); // call the function again when the queue is done
				}
			},
			timesOpenedMessagesCounter: () => { // can't be inlined in the quote because of dynamic values that need to be fetched after full page load (timesOpened)
				quoteTyper.addTask("type", `Ora sei a ${timesOpened}${timesOpened > 1000 ? "|400; (wow hihih)" : ""}, quindi dovresti ${(timesOpened > 1000) ? "averli visti tutti" : `averne vist${timesOpened < 200 ? "o" : "i"} ${timesOpened / 100 | 0}`}`);
			},
			allStars: () => {

				stopSpecialQuoteRendering = false;

				const customStyle = document.createElement("link");
				customStyle.rel = "stylesheet";
				customStyle.href = "src/allStars.css";
				customStyle.className = "specialQuoteContent";
				document.head.appendChild(customStyle);

				const starsContainer = document.createElement("div");
				starsContainer.id = "starsContainer";
				starsContainer.className = "specialQuoteContent";
				document.body.appendChild(starsContainer);

				document.getElementById("starsContainer").classList.add("darken");
				document.getElementById("quote").classList.add("toLightColor");

				document.getElementById("starsContainer").offsetHeight; // force reflow
				document.getElementById("quote").offsetHeight; // force reflow

				let counter = 0;

				const addStar = () => {

					const star = document.createElement("div");
					star.className = "star";
					star.innerHTML = ".";
					star.style.position = "absolute";

					let top = Math.random() * 100;
					let left = Math.random() * 100;

					star.style.setProperty("--maxOpacity", (Math.random() * .8 + .2).toFixed(2));
					star.style.setProperty("--color", `hsl(${Math.random() * 50 + 180 | 0}, 100%, 80%)`);
					star.style.setProperty("--size", (Math.random() * .2 + .05).toFixed(2) + "em");
					star.style.setProperty("--radianceRadius", (Math.random() * .4 + .1).toFixed(2) + "em");

					star.style.top = `${top}%`;
					star.style.left = `${left}%`;
					starsContainer.appendChild(star);

					counter++;

					if (!stopSpecialQuoteRendering && counter < 200) {
						setTimeout(() => addStar(), 2500 / counter | 1);
					}
				};

				addStar();

			},
			setAskToGoToBd: () => {
				localStorage.setItem("askedToGoToBirthday", "1");
			},
			setKlimtBg: () => {

				const overlay = document.createElement("div");
				overlay.className = "specialQuoteContent";
				overlay.style.position = "fixed";
				overlay.style.inset = "0";
				overlay.style.backgroundImage = 'url("img/klimtKiss.webp")';
				overlay.style.backgroundPosition = "center";
				overlay.style.backgroundSize = "cover";
				overlay.style.backgroundRepeat = "no-repeat";
				overlay.style.opacity = "0";
				overlay.style.animation = "fadeIn 8s linear forwards";
				overlay.style.zIndex = "-1";
				overlay.style.pointerEvents = "none";

				document.body.appendChild(overlay);
				overlay.offsetHeight;
			},
			mirrorEffect: () => {
				stopSpecialQuoteRendering = false;

				const customStyle = document.createElement("link");
				customStyle.rel = "stylesheet";
				customStyle.href = "src/mirror.css";
				customStyle.className = "specialQuoteContent";
				document.head.appendChild(customStyle);

				const mirrorButton = document.createElement("button");
				mirrorButton.className = "specialQuoteContent";
				mirrorButton.id = "mirrorButton";
				mirrorButton.innerText = "Chi sarà mai?";
				document.getElementById("quoteContainer").appendChild(mirrorButton);

				let videoStream = null;

				async function resizeVideo() {
					if (!videoStream) return;

					try {
						await videoStream.getVideoTracks()[0].applyConstraints({
							width: { ideal: document.documentElement.clientWidth - 48 },
							height: { ideal: document.documentElement.clientHeight - 168 }
						});
					} catch (e) {
						console.error("Error resizing video stream: ", e);
					}
				}

				mirrorButton.addEventListener("click", () => {
					mirrorButton.remove();
					quoteTyper.clearText();

					const mirrorContainer = document.createElement("div");
					mirrorContainer.className = "specialQuoteContent";
					mirrorContainer.id = "mirrorContainer";


					const video = document.createElement("video");
					video.id = "videoMirror";
					video.autoplay = true;
					video.muted = true;
					video.playsInline = true; // for iOS

					const videoMirrorOverlay = document.createElement("div");
					videoMirrorOverlay.id = "videoMirrorOverlay";


					mirrorContainer.appendChild(video);
					mirrorContainer.appendChild(videoMirrorOverlay);

					document.body.appendChild(mirrorContainer);


					navigator.mediaDevices
						.getUserMedia({
							video: {
								facingMode: "user",
								width: { ideal: document.documentElement.clientWidth - 48 },
								height: { ideal: document.documentElement.clientHeight - 168 }
							},
							audio: false
						})
						.then((stream) => {
							videoStream = stream;
							video.srcObject = stream;
							video.play();
						})
						.catch((err) => {
							console.error(`An error occurred: ${err}`);
							alert("amore mi serve vederti per poterti mostrare riflessa sullo schermo, fa' la brava bimba e dammi il permesso");
						});

				});

				let resizeDebounceTimer;

				window.addEventListener("resize", () => {
					clearTimeout(resizeDebounceTimer);
					resizeDebounceTimer = setTimeout(resizeVideo, 100);
				});
			}
		};
	}

	addTask(instruction, value = "", speed = this.speed) {

		this.taskQueue.push([instruction, value, speed]);

		if (!this.isProcessing) {
			this.processTasks();
		}
	}

	// interrupts the current task and clears the task queue
	haltProcessing() {
		this.taskQueue = [];
		this.interrupt = true; // will propagate to the task currently executing, if any, or it will be reset by the next invocation of processTasks
	}

	// immediately clears all text from the element and internal representation
	clearText() {
		this.text = "";
		this.element.innerHTML = "";
	}


	async processTasks() {

		if (this.isProcessing) {
			return;
		}

		this.interrupt = false; // reset the interrupt flag, to avoid lingering interrupts suppressing the next task

		while (this.taskQueue.length > 0) {
			this.isProcessing = true;

			const [instruction, value, speed] = this.taskQueue.shift();

			switch (instruction) {
				case "type":
					await this.type(value || "", 0, speed || this.speed);
					break;
				case "erase":
					await this.erase(+value || this.text.length, speed || this.speed);
					break;
				case "wait":
					await this.wait(+value || 1000);
					break;
				case "call":
					if (this.helperFuncs[value]) {
						await this.helperFuncs[value]();
					} else {
						console.error("Unknown helper function : ", value);
					}
					break;
				default:
					console.error("Unknown instruction : ", instruction);
					console.error("Tried to execute    : [", instruction, value, speed, "]");
					break;
			}

		}

		this.isProcessing = false;

		this.dispatchEvent(new Event("tasksCompleted"));
	}


	// special chars reference:
	// @number; sets the typing speed to <number> (-1 resets to default, 0 outputs the whole string at once)
	// |number; waits <number> milliseconds
	// ~number; erases <number> characters
	// $funName; executes helperFuncs[funName]
	async type(content, toWriteNextIndex = 0, speed = this.speed) {

		this.isProcessing = true;

		return await new Promise((resolve) => {

			const typeHelper = async () => {
				if (this.interrupt) {
					this.interrupt = false;
					resolve();
					return;
				}

				if (toWriteNextIndex >= content.length) {
					resolve();
					return;
				}

				if (speed === 0) { // if speed is set to 0, output the whole string at once
					this.text += content.substring(toWriteNextIndex);
					this.element.innerHTML = this.text;
					resolve();
					return;
				}


				let i = toWriteNextIndex;

				if (i < content.length - 1 && content[i] === "<" && content[i + 1] !== "3") { // output tags as single tokens, to avoid weird pauses
					while (content[++i] !== ">");
					this.text += content.substring(toWriteNextIndex, i + 1);

					toWriteNextIndex = i + 1;
					return typeHelper();
				}

				if (i < content.length - 1 && content[i] === "@") { // @number; sets the typing speed
					while (content[++i] !== ";");

					speed = +content.substring(toWriteNextIndex + 1, i);
					if (speed === -1) { speed = this.speed; }

					toWriteNextIndex = i + 1;
					return typeHelper();
				}

				if (i < content.length - 1 && content[i] === "|") { // |number; skips <number> milliseconds)
					while (content[++i] !== ";");
					const delay = +content.substring(toWriteNextIndex + 1, i);

					toWriteNextIndex = i + 1;
					await this.wait(delay);
					return typeHelper();
				}

				if (i < content.length - 1 && content[i] === "~") { // ~number; erases <number> characters
					while (content[++i] !== ";");
					const charsAmt = +content.substring(toWriteNextIndex + 1, i);

					toWriteNextIndex = i + 1;
					await this.erase(charsAmt, speed);
					return typeHelper();
				}

				if (i < content.length - 1 && content[i] === "$") { // $funName; execs helperFuncs[funName]
					while (content[++i] !== ";");
					const funName = content.substring(toWriteNextIndex + 1, i);

					toWriteNextIndex = i + 1;
					await this.helperFuncs[funName]();
					return typeHelper();
				}

				if (i < content.length - 1 && content[i] === "&" && content[i + 1] !== " ") { // output html control chars (eg &lt;) as single tokens, to avoid partial prints
					while (content[++i] !== ";");
					this.text += content.substring(toWriteNextIndex, i + 1);

					toWriteNextIndex = i + 1;
				}

				this.text += content.substring(toWriteNextIndex, i + 1);
				this.element.innerHTML = this.text;
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

	async erase(charsAmt = this.text.length, speed = 0.8 * typeSpeed) {

		this.isProcessing = true;

		return await new Promise((resolve) => {

			const eraseHelper = () => {

				if (this.interrupt) {
					this.interrupt = false;
					resolve();
					return;
				}

				if (charsAmt <= 0) {
					resolve();
					return;
				}

				if (speed === 0) { // if speed is set to 0, remove all the chars at once
					this.text = this.text.slice(0, -charsAmt);
					this.element.innerHTML = this.text;
					resolve();
					return;
				}

				let charsToErase = 1;

				if (this.text[this.text.length - 1] === ">") { // erase tags as single tokens, to avoid weird pauses
					while (this.text.length - charsToErase > -1 && this.text[this.text.length - charsToErase] !== "<") {
						charsToErase++;
					}
				}

				this.text = this.text.slice(0, -charsToErase);
				this.element.innerHTML = this.text;

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

	async wait(delay) {

		this.isProcessing = true;

		return await new Promise((resolve) => {

			let interruptCatcher = setInterval(() => {
				if (this.interrupt) {
					clearInterval(interruptCatcher);
					resolve();
				}
			}, 50);

			setTimeout(() => {
				clearInterval(interruptCatcher);
				resolve();
			}, delay);
		});
	}

}
