import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa6';

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-[#161B22]">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
				<div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
				<div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '🚀', delay: '0s', position: 'top-32 right-1/4' },
					{ icon: '💻', delay: '1s', position: 'bottom-40 left-1/4' },
					{ icon: '⚡', delay: '2s', position: 'top-1/3 left-1/3' },
					{ icon: '🔥', delay: '3s', position: 'bottom-32 right-1/3' },
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-40`} style={{ animationDelay: item.delay }}>
						<span className="text-5xl sm:text-6xl filter drop-shadow-lg">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
				<div className="text-center space-y-8 sm:space-y-10">
					{/* Greeting Badge */}
					<div className="inline-block">
						<div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm">
							👋 Welcome to my portfolio
						</div>
					</div>

					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0 animate-fade-in">
						<div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
						<h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-300 pb-2 leading-tight">
							Mahmoud Wafi
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-6 sm:space-y-8 mt-8 sm:mt-10">
						<div className="flex flex-col items-center gap-4 sm:gap-6">
							<div className="flex items-center gap-4 sm:gap-6">
								<span className="h-1 w-8 sm:w-16 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span>
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">Backend Engineer</h2>
								<span className="h-1 w-8 sm:w-16 bg-gradient-to-l from-blue-500 to-transparent rounded-full"></span>
							</div>
							<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl px-4 sm:px-0 leading-relaxed font-light">
								Crafting robust and scalable backend systems with Python, Django, and modern web technologies. Passionate about clean code and high-performance applications.
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 px-4 sm:px-0">
							{[
  'Python',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Celery',
  'Redis',
  'REST API',
  'Linux',
  'Git',
  'GitHub',
]
.map((tech) => (
								<span
									key={tech}
									className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full text-xs sm:text-sm font-medium text-blue-300 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-sm"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 sm:mt-12 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
							<span className="relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full inline-flex items-center justify-center w-full sm:w-auto font-semibold text-white hover:shadow-lg transition-all duration-300">
								View My Work
								<svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent rounded-full hover:bg-white/10 transition-all border-2 border-blue-500/50 hover:border-blue-400 text-center font-semibold backdrop-blur-sm"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
						{[
							
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Mahmoud-Wafi' },
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/mahmoud.wafi.abdelsalam' },
  { name: 'Whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/message/QVLO5LO5X7NYE1' }

						].map((social) => (
							<a key={social.name} href={social.href} className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors" aria-label={social.name}>
								<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">{social.icon}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	);
};
