import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/newsreader';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import './globals.css';
import { Providers } from './components/Providers';

export const metadata: Metadata = {
	title: 'Mahmoud Wafi - Software Engineer',
	description:
		'Portfolio of Mahmoud Wafi, a software engineer building reliable APIs, scalable web applications, and database-driven systems with Python, Django, FastAPI, React, PostgreSQL, and modern web technologies.',
	keywords: [
		'Software Engineer',
		'Python Developer',
		'Django Developer',
		'FastAPI Developer',
		'React Developer',
		'PostgreSQL',
		'MongoDB',
		'REST API',
		'Docker',
		'Redis',
		'Celery',
		'Mahmoud Wafi',
	],
	authors: [{ name: 'Mahmoud Wafi' }],
	creator: 'Mahmoud Wafi',
	openGraph: {
		title: 'Mahmoud Wafi - Software Engineer Portfolio',
		description: 'Software engineer building APIs, database-driven systems, and scalable web applications.',
		siteName: 'Mahmoud Wafi Portfolio',
		images: [
			{
				url: '/profile-photo.webp',
				width: 900,
				height: 900,
				alt: 'Portrait of Mahmoud Wafi',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mahmoud Wafi - Software Engineer',
		description: 'Software engineer building APIs, database-driven systems, and scalable web applications.',
		creator: '@mahmoudwafi',
		images: ['/profile-photo.webp'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: '#061B26',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<a href="#main" className="sr-only z-[70] rounded-md bg-lamp px-4 py-2 font-display font-semibold text-harbor focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
					Skip to content
				</a>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
