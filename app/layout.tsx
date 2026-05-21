import type { Metadata } from 'next';
import './globals.css';

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
