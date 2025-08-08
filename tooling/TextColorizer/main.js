import { interpolate, formatHex } from 'culori';

const blend = interpolate([
				"#49bb8d",
				"#6d9a8f",
				"#549db6",
				"#4b90c5",
				"#7e95b2",
				"#6ab1c5",
				"#549bb1",
				"#7ea89a",
				"#6ea3a3",
				"#31be9f",
				"#89a4a0",
				"#27a48b",
				"#a8acb7",
				"#83b0bc",
				"#8da5b5",
				"#83af88",
				"#84a490",
				"#73a4a4",
				"#6ca869",
				"#68a265",
				"#0a9e79"
			],
			"oklab");

const steps = 40;
const gradientStops = Array.from(
	{ length: steps },
	(_, i) => formatHex(blend(i / (steps - 1)))
).join(',\n');

const gradientCSS = `linear-gradient(90deg, ${gradientStops})`;

console.log(gradientCSS);
