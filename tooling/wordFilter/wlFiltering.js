const { log } = require('console');
const fs = require('fs');
const path = require('path');
const readline = require('readline');


const filePath = path.join(__dirname, "data.txt");

async function askYN(question) {
	return new Promise(resolve => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout

		});

		const timeout = setTimeout(() => {
			process.stdout.write("timed out, asserting 'no'\n");
			rl.close();
			resolve(false);
		}, 10000);

		rl.question(question + " [y/n] (auto no in 10s) ", answer => {
			rl.close();
			clearTimeout(timeout);
			resolve(answer.toLowerCase() === 'y');
		});
	});
}


fs.readFile(filePath, 'utf8', async (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	let lines = data.split('\n');


	let bases = [];

	for (let i = 0; i < lines.length; i++) {

		// /(ino)$/m
		if (lines[i].match(/((are)|(ere)|(ire))$/m)) {

			bases.push(lines[i].slice(0, -3));
			// console.log(lines[i]);
			// lines.splice(i, 1);
			// i--;

		}
	}

	console.log("---");


	for (let i = 0; i < bases.length; i++) {

		for (let j = 0; j < lines.length; j++) {

			switch (lines[j].slice(0, -1)) {
				case bases[i] + "ssi":
				case bases[i] + "sti":
				case bases[i] + "sse":
				case bases[i] + "no":
				case bases[i] + "atevi":
				case bases[i] + "ssero":
					console.log(lines[j]);
					lines.splice(j, 1);
					j--;
					break;


				default:
					break;
			}
		}
	}



	const newData = lines.join('\n');

	// console.log(newData);


	console.log(`file length: ${data.split('\n').length} -> ${lines.length} (${lines.length - data.split('\n').length})`);

	if (await askYN('\x1b[34mDo you want to save the changes?\x1b[0m')) {
		fs.writeFile(filePath, newData, err => {

			if (err) {
				console.error(err);
				return;
			}

			console.log('\x1b[32m-- File updated --\x1b[0m');
		});
	}
});
