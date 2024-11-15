import type { Config } from 'tailwindcss';
import * as tailwindcssAnimate from 'tailwindcss-animate';

export default {
	darkMode: ['class'],
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],

	plugins: [tailwindcssAnimate],
} satisfies Config;
