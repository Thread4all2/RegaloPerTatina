class Typer extends EventTarget {
	constructor(element, typeSpeed = 60) {
		super();
		this.element = element; // ref to the html element being handled by the typer
		this.text = ""; // internal representation of the element content
		this.speed = typeSpeed;
		this.taskQueue = [];
		this.isProcessing = false;
		this.interrupt = false;
	}


	addTask(instruction, value = "", speed = this.speed) {

		this.taskQueue.push([instruction, value, speed]);

		if (!this.isProcessing) {
			this.processTasks();
		}
	}

	haltProcessing() {
		this.taskQueue = [];
		this.interrupt = true; // will propagate to the task currently executing, if any, or it will be reset by the next invocation of processTasks
	}

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
				default:
					console.error("Unknown instruction : ", instruction);
					console.error("Tried to execute    : [", instruction, value, speed, "]");
					break;
			}

		}

		this.isProcessing = false;

		this.dispatchEvent(new Event("tasksCompleted"));
	}


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

				if (i < content.length - 1 && content[i] === "&" && content[i + 1] !== " ") { // output html control chars (eg &lt;) as single tokens, to avoid partial prints
					while (content[++i] !== ">");
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
			setTimeout(() => {
				resolve();
			}, delay);
		});
	}

}