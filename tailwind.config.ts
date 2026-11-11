import type { Config } from 'tailwindcss';

export default {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				harbor: '#061B26', // page background, the sea at night
				deep: '#0C2E3F', // raised surfaces
				tide: '#12485E', // borders, tints
				sand: '#F1E8D4', // primary text, paper
				fog: '#9DB4B8', // secondary text
				lamp: '#FFB547', // the lighthouse lamp, the only warm accent
				glass: '#5FD0C0', // sea glass, used rarely
			},
			fontFamily: {
				display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				body: ['"Newsreader Variable"', 'Georgia', 'serif'],
				arabic: ['"IBM Plex Sans Arabic"', '"Noto Sans Arabic"', 'sans-serif'],
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				marquee: 'marquee 50s linear infinite',
			},
		},
	},
	plugins: [],
} satisfies Config;
