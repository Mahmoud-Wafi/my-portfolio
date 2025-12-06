import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
  title: 'ITI Coffee',
  description: 'Full-stack coffee ordering system using Django REST API and React frontend',
  metrics: {
    performance: 93,
    accessibility: 96,
    seo: 98,
  },
  techDetails: [
    'Django REST Framework',
    'PostgreSQL Database',
    'React.js',
    'Tailwind CSS',
    'JWT Authentication',
    'Responsive UI Design'
  ],
  image: '/pic6.avif',
}
,
						{
							title: 'E-commerce WebSite',
							description: 'High-performance Progressive Web App with offline capabilities',
							metrics: {
								performance: 98,
								accessibility: 100,
								seo: 100,
							},
							techDetails: ['Service Worker implementation', 'IndexedDB for offline data','Postgres for storing data', 'Dynamic code splitting'],
							image: '/code.jpg',
						},
						{
  title: 'Coffee WebSite',
  description: 'Dynamic web platform built with Django and PostgreSQL backend',
  metrics: {
    performance: 95,
    accessibility: 98,
    seo: 100,
  },
  techDetails: [
    
	'Django Framework',
    'PostgreSQL Database',
    'HTML & CSS',
	'JWT Authentication',
    'JavaScript (Vanilla)',
    'Jinja Template Language'
  ],
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
  techDetails: [
    'Django REST Framework (Backend)',
    'PostgreSQL Database',
    'React.js (Frontend)',
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
  metrics: {
    performance: 94,
    accessibility: 97,
    seo: 98,
  },
  techDetails: [
    'Django Framework',
    'Django REST Framework (API)',
    'PostgreSQL Database',
    'HTML & CSS',
    'JavaScript (Vanilla)',
    'Responsive Job Search UI',
    'Application Submission System',
    'User Authentication & Profile Management',
    'Admin Panel for Job Posting Management'
  ],
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
},{
   title: 'Library Management System',
   description: 'A web-based library platform for managing books, users, and borrowing records efficiently',
   metrics: {
     performance: 90,
     accessibility: 95,
     seo: 97,
   },
   techDetails: [
     'Django Framework (Backend)',
     'PostgreSQL Database',
     'HTML & CSS',
     'JavaScript & jQuery',
     'Book Search & Borrowing System',
     'User Roles: Admin, Librarian, and Member',
     'Borrowing History & Due Date Alerts',
     'Responsive User Interface',
     'Admin Dashboard for Inventory Management'
   ],
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
   techDetails: [
     'Django REST Framework (Backend API)',
     'PostgreSQL Database',
     'React.js (Frontend)',
     'Tailwind CSS for UI Styling',
     'JWT Authentication & Authorization',
     'Course Management System',
     'Student Progress Tracking',
     'Real-time Notifications',
     'Responsive Design',
     'Admin Dashboard for Course Management'
   ],
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
   techDetails: [
     'Django REST Framework (Backend API)',
     'PostgreSQL Database',
     'React.js (Frontend)',
     'Tailwind CSS for Styling',
     'JWT Authentication & Role-based Access Control',
     'User Profiles & Networking Features',
     'Project Collaboration Tools',
     'Discussion & Forum System',
     'Real-time Chat Integration',
     'Admin Dashboard for Platform Management'
   ],
   image: '/pic3.avif',
}





					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
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
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
