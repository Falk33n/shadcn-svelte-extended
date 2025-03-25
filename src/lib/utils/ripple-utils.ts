function linearToGamma(color: number) {
	return color >= 0.0031308 ? 1.055 * Math.pow(color, 1 / 2.4) - 0.055 : 12.92 * color;
}

function clamp(value: number, min: number, max: number) {
	return Math.max(Math.min(value, max), min);
}

function oklabToRGB(oklab: string) {
	const cleanOklab = oklab
		.replace('oklab(', '')
		.replace(')', '')
		.trim()
		.split(' ')
		.map((value) => {
			if (value.includes('/')) {
				return parseFloat(value);
			}
			return parseFloat(value.trim());
		})
		.slice(0, 3);

	if (cleanOklab.length !== 3) return '';

	const [L, A, B] = cleanOklab;

	let l = L + A * +0.3963377774 + B * +0.2158037573;
	let m = L + A * -0.1055613458 + B * -0.0638541728;
	let s = L + A * -0.0894841775 + B * -1.291485548;

	l = l ** 3;
	m = m ** 3;
	s = s ** 3;

	let r = l * +4.0767416621 + m * -3.3077115913 + s * +0.2309699292;
	let g = l * -1.2684380046 + m * +2.6097574011 + s * -0.3413193965;
	let b = l * -0.0041960863 + m * -0.7034186147 + s * +1.707614701;

	r = 255 * linearToGamma(r);
	g = 255 * linearToGamma(g);
	b = 255 * linearToGamma(b);

	r = clamp(r, 0, 255);
	g = clamp(g, 0, 255);
	b = clamp(b, 0, 255);

	r = Math.round(r);
	g = Math.round(g);
	b = Math.round(b);

	return `rgb(${r}, ${g}, ${b})`;
}

function oklchToRGB(oklch: string) {
	const cleanOklch = oklch
		.replace('oklch(', '')
		.replace(')', '')
		.trim()
		.split(' ')
		.map((value) => parseFloat(value.trim()));

	if (cleanOklch.length !== 3) return '';

	const [l, c, h] = cleanOklch;

	const [L, a, b] = [
		l,
		isNaN(h) ? 0 : c * Math.cos((h * Math.PI) / 180),
		isNaN(h) ? 0 : c * Math.sin((h * Math.PI) / 180),
	];

	const oklabString = `oklab(${L} ${a} ${b})`;

	return oklabToRGB(oklabString);
}

export function getContrastingRippleColor(bgColor: string) {
	if (bgColor.startsWith('oklab')) {
		bgColor = oklabToRGB(bgColor);
	} else if (bgColor.startsWith('oklch')) {
		bgColor = oklchToRGB(bgColor);
	} else if (!bgColor.startsWith('rgb')) return '';

	const color = bgColor
		.replace(/rgb?\(|\s+|\)/g, '')
		.split(',')
		.map((value) => parseInt(value, 10));

	const r = color[0];
	const g = color[1];
	const b = color[2];

	if (color.length === 0) return '';

	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return luminance > 128 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';
}
