export type Metrics = { performance: number; accessibility: number; seo: number };

export type Project = {
	title: string;
	description: string;
	techDetails: string[];
	image: string;
	metrics?: Metrics;
	link?: string;
	linkText?: string;
};

export type MenuProject = {
	title: string;
	arabicTitle: string;
	description: string;
	categories: string[];
	hosting: string;
	href: string;
};

export const menuProjects: MenuProject[] = [
	{
		title: 'Momo Club digital menu',
		arabicTitle: 'المنيو الإلكتروني',
		description: 'Arabic digital menu for Momo Club. Guests browse the full menu on their phone, and the cashier and manager each get their own dashboard.',
		categories: ['Grills', 'Pizza', 'Pasta', 'Crepes', 'Sandwiches', 'Drinks'],
		hosting: 'Deployed on Vercel',
		href: 'https://momoclubmenu.vercel.app/',
	},
	{
		title: 'Leqaa Café digital menu',
		arabicTitle: 'مطعم وكافيه لقاء',
		description: 'Arabic digital menu for Leqaa Restaurant & Café, built for quick browsing on mobile, with separate cashier and manager dashboards.',
		categories: ['Crepes', 'Pizza', 'Shawarma', 'Burgers', 'Drinks', 'Desserts'],
		hosting: 'Deployed on Cloudflare Workers',
		href: 'https://leqaacafe-menu.mahmoudwafi33.workers.dev',
	},
];

export const projects: Project[] = [
	{
		title: 'Sidi Group Landing Page',
		description: 'Official corporate landing page for Sidi Group ("The House Behind Great Brands"), an integrated operating group spanning food & beverage, luxury retail, hospitality, and entertainment across the Arab region.',
		metrics: { performance: 98, accessibility: 98, seo: 100 },
		techDetails: [
			'Next.js App Router & Server Components',
			'Tailwind CSS custom luxury design system',
			'React 19 & TypeScript',
			'High-definition video streaming & lazy loading',
			'Fluid responsive grid & editorial typography',
			'SEO optimization & structured metadata',
		],
		image: '/sidigroup-hero.png',
		link: 'https://sidigroup.site/',
		linkText: 'Visit Live Website',
	},
	{
		title: 'AI Penetration System',
		description: 'AI-assisted security testing platform for analyzing targets, organizing findings, and generating clear penetration testing reports.',
		metrics: { performance: 94, accessibility: 96, seo: 97 },
		techDetails: ['Python automation', 'AI-assisted vulnerability analysis', 'Django/FastAPI API layer', 'Security workflow dashboard', 'Report generation', 'Role-based access control'],
		image: '/code.jpg',
	},
	{
		title: 'MyPractice App for Python Beginners',
		description: 'Beginner-friendly Python practice app with guided exercises, quizzes, and progress tracking for new programmers.',
		metrics: { performance: 96, accessibility: 98, seo: 99 },
		techDetails: ['Python fundamentals exercises', 'Practice challenges and quizzes', 'Progress tracking', 'Clean learner UI', 'Responsive design', 'Beginner-focused content flow'],
		image: '/laptop.jpg',
	},
	{
		title: 'ITI Coffee',
		description: 'Full-stack coffee ordering system using Django REST API and React frontend',
		metrics: { performance: 93, accessibility: 96, seo: 98 },
		techDetails: ['Django REST Framework', 'PostgreSQL Database', 'React.js', 'Tailwind CSS', 'JWT Authentication', 'Responsive UI Design'],
		image: '/pic6.avif',
	},
	{
		title: 'E-commerce WebSite',
		description: 'High-performance Progressive Web App with offline capabilities',
		metrics: { performance: 98, accessibility: 100, seo: 100 },
		techDetails: ['Service Worker implementation', 'IndexedDB for offline data', 'Postgres for storing data', 'Dynamic code splitting'],
		image: '/code.jpg',
	},
	{
		title: 'Coffee WebSite',
		description: 'Dynamic web platform built with Django and PostgreSQL server-side architecture',
		metrics: { performance: 95, accessibility: 98, seo: 100 },
		techDetails: ['Django Framework', 'PostgreSQL Database', 'HTML & CSS', 'JWT Authentication', 'JavaScript (Vanilla)', 'Jinja Template Language'],
		image: '/pic5.avif',
	},
	{
		title: 'Arabia Webstore',
		description: 'Modern e-commerce platform with secure APIs, intuitive UI, and real-time payment processing',
		metrics: { performance: 92, accessibility: 95, seo: 97 },
		techDetails: [
			'Django REST Framework API',
			'PostgreSQL Database',
			'React.js Frontend',
			'Tailwind CSS for styling',
			'JWT Authentication',
			'Stripe Payment Integration',
			'Shopping Cart & Checkout Flow',
			'Admin Dashboard for Products & Orders',
			'Responsive UI Design',
		],
		image: '/pic4.avif',
	},
	{
		title: 'Job Board',
		description: 'Interactive job portal for job seekers to search and apply for employment opportunities',
		metrics: { performance: 94, accessibility: 97, seo: 98 },
		techDetails: [
			'Django Framework',
			'Django REST Framework (API)',
			'PostgreSQL Database',
			'HTML & CSS',
			'JavaScript (Vanilla)',
			'Responsive Job Search UI',
			'Application Submission System',
			'User Authentication & Profile Management',
			'Admin Panel for Job Posting Management',
		],
		image: '/pic3.avif',
	},
	{
		title: 'Online Book Store',
		description: 'Full-stack bookstore platform with dynamic catalog, user accounts, and secure transactions',
		metrics: { performance: 91, accessibility: 94, seo: 96 },
		techDetails: [
			'Node.js',
			'Express.js (RESTful API)',
			'MongoDB (NoSQL Database)',
			'React.js (Frontend)',
			'Tailwind CSS for UI Styling',
			'User Authentication with JWT',
			'Book Listing & Search Functionality',
			'Cart System & Order Handling',
			'Admin Panel for Managing Books & Orders',
		],
		image: '/pic2.avif',
	},
	{
		title: 'Library Management System',
		description: 'A web-based library platform for managing books, users, and borrowing records efficiently',
		metrics: { performance: 90, accessibility: 95, seo: 97 },
		techDetails: [
			'Django Framework',
			'PostgreSQL Database',
			'HTML & CSS',
			'JavaScript & jQuery',
			'Book Search & Borrowing System',
			'User Roles: Admin, Librarian, and Member',
			'Borrowing History & Due Date Alerts',
			'Responsive User Interface',
			'Admin Dashboard for Inventory Management',
		],
		image: '/pic1.avif',
	},
	{
		title: 'Smart Learning Academy',
		description: 'Comprehensive online learning platform with interactive courses, progress tracking, and student management',
		metrics: { performance: 96, accessibility: 98, seo: 99 },
		techDetails: [
			'Django REST Framework API',
			'PostgreSQL Database',
			'React.js Frontend',
			'Tailwind CSS for UI Styling',
			'JWT Authentication & Authorization',
			'Course Management System',
			'Student Progress Tracking',
			'Real-time Notifications',
			'Responsive Design',
			'Admin Dashboard for Course Management',
		],
		image: '/pic2.avif',
	},
	{
		title: 'TechMate Platform',
		description: 'Collaborative tech community platform connecting developers, engineers, and tech enthusiasts for knowledge sharing and project collaboration',
		metrics: { performance: 95, accessibility: 97, seo: 98 },
		techDetails: [
			'Django REST Framework API',
			'PostgreSQL Database',
			'React.js Frontend',
			'Tailwind CSS for Styling',
			'JWT Authentication & Role-based Access Control',
			'User Profiles & Networking Features',
			'Project Collaboration Tools',
			'Discussion & Forum System',
			'Admin Dashboard for Platform Management',
		],
		image: '/pic3.avif',
	},
];
