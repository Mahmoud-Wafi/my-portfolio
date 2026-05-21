import React from 'react';
import Image from 'next/image';

type Project = {
	title: string;
	description: string;
	metrics: Record<string, number>;
	techDetails: string[];
	image: string;
};

const newProjects: Project[] = [
	{
		title: 'AI Penetration System',
		description: 'AI-assisted security testing platform for analyzing targets, organizing findings, and generating clear penetration testing reports.',
		metrics: {
			performance: 94,
			accessibility: 96,
			seo: 97,
		},
		techDetails: ['Python automation', 'AI-assisted vulnerability analysis', 'Django/FastAPI API layer', 'Security workflow dashboard', 'Report generation', 'Role-based access control'],
		image: '/code.jpg',
	},
	{
		title: 'MyPractice App for Python Beginners',
		description: 'Beginner-friendly Python practice app with guided exercises, quizzes, and progress tracking for new programmers.',
		metrics: {
			performance: 96,
			accessibility: 98,
			seo: 99,
		},
		techDetails: ['Python fundamentals exercises', 'Practice challenges and quizzes', 'Progress tracking', 'Clean learner UI', 'Responsive design', 'Beginner-focused content flow'],
		image: '/laptop.jpg',
	},
];

const featuredProjects: Project[] = [
	{
		title: 'ITI Coffee',
		description: 'Full-stack coffee ordering system using Django REST API and React frontend',
		metrics: {
			performance: 93,
			accessibility: 96,
			seo: 98,
		},
		techDetails: ['Django REST Framework', 'PostgreSQL Database', 'React.js', 'Tailwind CSS', 'JWT Authentication', 'Responsive UI Design'],
		image: '/pic6.avif',
	},
	{
		title: 'E-commerce WebSite',
		description: 'High-performance Progressive Web App with offline capabilities',
		metrics: {
			performance: 98,
			accessibility: 100,
			seo: 100,
		},
		techDetails: ['Service Worker implementation', 'IndexedDB for offline data', 'Postgres for storing data', 'Dynamic code splitting'],
		image: '/code.jpg',
	},
	{
		title: 'Coffee WebSite',
		description: 'Dynamic web platform built with Django and PostgreSQL server-side architecture',
		metrics: {
			performance: 95,
			accessibility: 98,
			seo: 100,
		},
		techDetails: ['Django Framework', 'PostgreSQL Database', 'HTML & CSS', 'JWT Authentication', 'JavaScript (Vanilla)', 'Jinja Template Language'],
		image: '/pic5.avif',
	},
	{
		title: 'Arabia Webstore',
		description: 'Modern e-commerce platform with secure APIs, intuitive UI, and real-time payment processing',
		metrics: {
			performance: 92,
			accessibility: 95,
			seo: 97,
		},
		techDetails: ['Django REST Framework API', 'PostgreSQL Database', 'React.js Frontend', 'Tailwind CSS for styling', 'JWT Authentication', 'Stripe Payment Integration', 'Shopping Cart & Checkout Flow', 'Admin Dashboard for Products & Orders', 'Responsive UI Design'],
		image: '/pic4.avif',
	},
	{
		title: 'Job Board',
		description: 'Interactive job portal for job seekers to search and apply for employment opportunities',
		metrics: {
			performance: 94,
			accessibility: 97,
			seo: 98,
		},
		techDetails: ['Django Framework', 'Django REST Framework (API)', 'PostgreSQL Database', 'HTML & CSS', 'JavaScript (Vanilla)', 'Responsive Job Search UI', 'Application Submission System', 'User Authentication & Profile Management', 'Admin Panel for Job Posting Management'],
		image: '/pic3.avif',
	},
	{
		title: 'Online Book Store',
		description: 'Full-stack bookstore platform with dynamic catalog, user accounts, and secure transactions',
		metrics: {
			performance: 91,
			accessibility: 94,
			seo: 96,
		},
		techDetails: ['Node.js', 'Express.js (RESTful API)', 'MongoDB (NoSQL Database)', 'React.js (Frontend)', 'Tailwind CSS for UI Styling', 'User Authentication with JWT', 'Book Listing & Search Functionality', 'Cart System & Order Handling', 'Admin Panel for Managing Books & Orders'],
		image: '/pic2.avif',
	},
	{
		title: 'Library Management System',
		description: 'A web-based library platform for managing books, users, and borrowing records efficiently',
		metrics: {
			performance: 90,
			accessibility: 95,
			seo: 97,
		},
		techDetails: ['Django Framework', 'PostgreSQL Database', 'HTML & CSS', 'JavaScript & jQuery', 'Book Search & Borrowing System', 'User Roles: Admin, Librarian, and Member', 'Borrowing History & Due Date Alerts', 'Responsive User Interface', 'Admin Dashboard for Inventory Management'],
		image: '/pic1.avif',
	},
	{
		title: 'Smart Learning Academy',
		description: 'Comprehensive online learning platform with interactive courses, progress tracking, and student management',
		metrics: {
			performance: 96,
			accessibility: 98,
			seo: 99,
		},
		techDetails: ['Django REST Framework API', 'PostgreSQL Database', 'React.js Frontend', 'Tailwind CSS for UI Styling', 'JWT Authentication & Authorization', 'Course Management System', 'Student Progress Tracking', 'Real-time Notifications', 'Responsive Design', 'Admin Dashboard for Course Management'],
		image: '/pic2.avif',
	},
	{
		title: 'TechMate Platform',
		description: 'Collaborative tech community platform connecting developers, engineers, and tech enthusiasts for knowledge sharing and project collaboration',
		metrics: {
			performance: 95,
			accessibility: 97,
			seo: 98,
		},
		techDetails: ['Django REST Framework API', 'PostgreSQL Database', 'React.js Frontend', 'Tailwind CSS for Styling', 'JWT Authentication & Role-based Access Control', 'User Profiles & Networking Features', 'Project Collaboration Tools', 'Discussion & Forum System', 'Admin Dashboard for Platform Management'],
		image: '/pic3.avif',
	},
];

const ProjectCard = ({ project }: { project: Project }) => (
	<div className="group overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-br from-[#21262D] to-[#161B22] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
		<div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
			<div className="space-y-6 p-6 sm:p-8">
				<h3 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">{project.title}</h3>
				<p className="text-sm text-gray-400 sm:text-base">{project.description}</p>

				<div className="space-y-3">
					<h4 className="text-base font-semibold sm:text-lg">Performance Metrics</h4>
					<div className="grid grid-cols-3 gap-2 sm:gap-4">
						{Object.entries(project.metrics).map(([key, value]) => (
							<div key={key} className="text-center">
								<div className="text-2xl font-bold text-blue-400">{value}</div>
								<div className="text-sm capitalize text-gray-400">{key}</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<h4 className="mb-2 text-base font-semibold sm:mb-3 sm:text-lg">Technical Implementation</h4>
					<ul className="space-y-1.5 text-sm sm:space-y-2 sm:text-base">
						{project.techDetails.map((detail) => (
							<li key={detail} className="flex items-center gap-2">
								<span className="text-green-400">▹</span>
								<span className="text-gray-300">{detail}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="relative h-full min-h-[300px] lg:min-h-full">
				<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
				<div className="absolute inset-0 bg-gradient-to-b from-[#21262D] via-transparent to-transparent lg:bg-gradient-to-r lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
			</div>
		</div>
	</div>
);

export const ProjectsSection = () => {
	return (
		<section id="work" className="scroll-mt-20 bg-gradient-to-b from-[#161B22] to-[#0D1117] px-4 py-20 sm:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mb-16 text-center sm:mb-20">
					<h2 className="mb-4 bg-gradient-to-r from-white via-blue-200 to-gray-300 bg-clip-text text-3xl font-black text-transparent sm:text-4xl md:text-5xl">Projects</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-400">New work and featured software projects I have built or worked on.</p>
				</div>

				<div className="mb-16 sm:mb-20">
					<div className="mb-8 text-center">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">New Projects</p>
						<h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Recently Worked On</h3>
					</div>
					<div className="space-y-10 sm:space-y-14">
						{newProjects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</div>

				<div className="mb-8 text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Featured Work</p>
					<h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Selected Portfolio Projects</h3>
				</div>
				<div className="space-y-10 sm:space-y-14">
					{featuredProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};
