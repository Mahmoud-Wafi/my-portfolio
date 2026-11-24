import type { Config } from 'tailwindcss';

export default {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				ink: '#0E1B14', // text, dark buttons
				ground: '#F3F6EE', // page background
				paper: '#FFFFFF', // cards
				forest: '#0F2A1E', // dark bands
				lime: '#8FD43A', // accent fills (always with ink text)
				leaf: '#3B7410', // accent text on light backgrounds
				muted: '#3B4A40', // secondary text
				line: '#D5DFCB', // borders
				mint: '#EAF1E1', // tags
			},
			fontFamily: {
				display: ['"Manrope Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				arabic: ['"IBM Plex Sans Arabic"', '"Noto Sans Arabic"', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
