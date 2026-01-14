const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, "data.txt");
// const filePath = path.join(__dirname, "../../src/parole.txt");

async function askYN(question) {
	return new Promise(resolve => {

		process.stdout.cursorTo(0);
		process.stdout.write(question.toString() + " \x1b[2m(auto no in 10s)\x1b[0m [y/n] ");

		let resolved = false;

		const onData = (data) => {

			if (data.toString().trim() === '\u0003') { // ctrl+c quits
				process.stdout.write("^C");
				cleanup();
				process.exit(0);
			}


			const answer = data.toString().trim().toLowerCase();
			if (answer === 'y' || answer === 'n') {
				process.stdout.write(data);
				cleanup();
				process.stdout.write("\n");
				resolve(answer === 'y');
			}
		};

		const cleanup = () => {
			if (resolved) return;
			resolved = true;
			clearTimeout(timeout);
			process.stdin.setRawMode(false);
			process.stdin.pause();
			process.stdin.removeListener('data', onData);
		};

		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		process.stdin.setRawMode(true);
		process.stdin.on('data', onData);

		const timeout = setTimeout(() => {
			process.stdout.write("timed out, asserting \x1b[91m'no'\x1b[0m\n");
			cleanup();
			resolve(false);
		}, 10000);

	});
}


fs.readFile(filePath, 'utf8', async (err, data) => {

	process.stdout.write(fmtInfo("Loading file  : "));

	if (err) {
		console.error(err);
		return;
	}

	let lines = data.split(/\r*\n/); // gotta love crlf

	process.stdout.write(`${fmtSuccess("Done")}, ${lines.length} entries (in file ${filePath})\n`);


	// Preprocessing ------------------------------------------------------------

	process.stdout.write(fmtInfo("Preprocessing : "));

	let bases = [];
	let addons = [];

	for (let i = 0; i < lines.length; i++) {

		if (lines[i].match(/((are)|(ere)|(ire))$/m)) {

			bases.push(lines[i].slice(0, -3));
			// addons.push("");
			addons.push(lines[i].charAt(lines[i].length - 3));

			// console.log(bases[bases.length - 1]);
			// lines.splice(i, 1);
			// i--;

		}
	}

	process.stdout.write(`${fmtSuccess("Done")}, ${bases.length} matching bases found\n`);


	// Filtering ---------------------------------------------------------------

	process.stdout.write(fmtInfo("Filtering     : "));
	process.stdout.write("\nResults: [");

	let resultsFound = false;
	// for (let i = 0; i < bases.length; i++) {

	// 	const baseInitial = bases[i].charAt(0);

	// 	for (let j = 0; j < lines.length; j++) {

	// 		if (baseInitial != lines[j].charAt(0)) { // quick check to skip most of the lines fast
	// 			continue;
	// 		}

	// 		switch (lines[j].slice(0, -1)) {

	// 			// indicativo
	// 			// presente
	// 			// case bases[i] + addons[i] + "o": // too many collisions with nouns
	// 			// case bases[i] + addons[i] + "i": // too many collisions with nouns
	// 			// case bases[i] + addons[i] + "e": // too many collisions with nouns
	// 			// case bases[i] + "iamo":
	// 			// case bases[i] + addons[i] + "te":
	// 			// case bases[i] + addons[i] + "no":

	// 			// imperfetto
	// 			// case bases[i] + addons[i] + "vo":
	// 			// case bases[i] + addons[i] + "vi":
	// 			// case bases[i] + addons[i] + "va":
	// 			case bases[i] + addons[i] + "vamo":
	// 			case bases[i] + addons[i] + "vate":
	// 			case bases[i] + addons[i] + "vano":

	// 			// passato remoto
	// 			// case bases[i] + addons[i] + "i":
	// 			case bases[i] + addons[i] + "sti":
	// 			// case bases[i] + addons[i] + "o":
	// 			case bases[i] + addons[i] + "mmo":
	// 			case bases[i] + addons[i] + "ste":
	// 			case bases[i] + addons[i] + "rono":

	// 			// futuro semplice
	// 			case bases[i] + addons[i] + "ro":
	// 			case bases[i] + addons[i] + "rai":
	// 			case bases[i] + addons[i] + "ra":
	// 			case bases[i] + addons[i] + "remo":
	// 			case bases[i] + addons[i] + "rete":
	// 			case bases[i] + addons[i] + "ranno":

	// 			/* condizionale ✓ */
	// 			case bases[i] + addons[i] + "rei":
	// 			case bases[i] + addons[i] + "resti":
	// 			case bases[i] + addons[i] + "rebbe":
	// 			case bases[i] + addons[i] + "remmo":
	// 			case bases[i] + addons[i] + "reste":
	// 			case bases[i] + addons[i] + "rebbero":

	// 			/* congiuntivo ✓ */
	// 			// presente ✓
	// 			// case bases[i] + addons[i] + "i":
	// 			case bases[i] + addons[i] + "iamo":
	// 			case bases[i] + addons[i] + "iate":
	// 			case bases[i] + addons[i] + "ino":

	// 			// passato ✓
	// 			case bases[i] + addons[i] + "ssi":
	// 			case bases[i] + addons[i] + "sti":
	// 			case bases[i] + addons[i] + "sse":
	// 			case bases[i] + addons[i] + "ssimo":
	// 			// case bases[i] + addons[i] + "ste":
	// 			case bases[i] + addons[i] + "ssero":


	// 			/* riflessivi ✓ */
	// 			case bases[i] + addons[i] + "mi":
	// 			case bases[i] + addons[i] + "ti":
	// 			case bases[i] + addons[i] + "si":
	// 			case bases[i] + addons[i] + "ci":
	// 			case bases[i] + addons[i] + "vi":
	// 			case bases[i] + addons[i] + "siamo":
	// 			case bases[i] + addons[i] + "viamo":
	// 			case bases[i] + addons[i] + "atevi":
	// 			case bases[i] + addons[i] + "atesi":



	// 				console.log(lines[j]);
	// 				lines.splice(j, 1);
	// 				j--;
	// 				break;


	// 			default:
	// 				break;
	// 		}
	// 	}
	// }

	for (let i = 0; i < lines.length; i++) {

		if (lines[i].match(/(ate)$/)) {

			if (!resultsFound) {
				process.stdout.write("\n");
				resultsFound = true;
			}

			console.log("    " + lines[i]);
			lines.splice(i, 1);
			i--;
		}

	}


	process.stdout.write("]\n");


	process.stdout.write(`${fmtSuccess("Done")}, ${lines.length} entries left\n`);


	const newData = lines.join('\n');

	// console.log(newData);

	const diff = lines.length - data.split('\n').length;

	console.log(`\nfile length: ${lines.length - diff} -> ${lines.length} (${diff})`);


	if (!diff) {
		console.log('\x1b[93mNo changes to be made.\x1b[0m\n');
		return;
	}

	if (await askYN('\n\x1b[36mDo you want to save the changes?\x1b[0m')) {
		fs.writeFile(filePath, newData, err => {

			if (err) {
				console.error(err);
				return;
			}

			console.log('\x1b[92mFile updated!\x1b[0m');
		});
	} else {
		console.log('\x1b[93mChanges not saved.\x1b[0m');
		return;
	}
});


function fmtInfo(text) {
	return `\x1b[94m${text}\x1b[0m`;
}

function fmtSuccess(text) {
	return `\x1b[32m${text}\x1b[0m`;
}