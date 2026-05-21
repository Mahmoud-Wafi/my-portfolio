import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export const HeroSection = () => {
	const githubUrl = 'https://github.com/Mahmoud-Wafi';
	const techStack = ['Python', 'Django', 'FastAPI', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Celery', 'Redis', 'REST API', 'Linux', 'Git', 'GitHub'];
	const socialLinks = [
		{ name: 'GitHub', icon: <FaGithub />, href: githubUrl },
		{
			name: 'LinkedIn',
			icon: <FaLinkedin />,
			href: 'https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
		},
		{ name: 'Facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/mahmoud.wafi.abdelsalam' },
		{ name: 'Whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/message/QVLO5LO5X7NYE1' },
	];

	return (
		<div className="relative isolate min-h-screen overflow-hidden bg-[#0D1117]">
			<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(88,166,255,0.16),transparent_36%),linear-gradient(315deg,rgba(63,185,80,0.12),transparent_34%)]" />
			<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07]" />
			<div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
				<div className="max-w-3xl text-center lg:text-left">
					<div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm">Software Engineer</div>
					<h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">Mahmoud Wafi</h1>
					<p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
						I build reliable software systems with Python, Django, FastAPI, React, and modern databases, turning product ideas into clean APIs, secure workflows, and scalable web applications.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
						{techStack.map((tech) => (
							<span key={tech} className="rounded-full border border-blue-400/25 bg-[#161B22]/80 px-4 py-2 text-xs font-medium text-blue-200 shadow-sm shadow-blue-950/20 backdrop-blur-sm sm:text-sm">
								{tech}
							</span>
						))}
					</div>

					<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
						<a href="#work" className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-950/40 transition-all duration-300 hover:bg-blue-400">
							View My Work
							<FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
						<a href="#contact" className="inline-flex items-center justify-center rounded-full border border-blue-400/50 px-8 py-4 font-semibold text-blue-100 transition-all duration-300 hover:border-blue-300 hover:bg-white/10">
							Get in Touch
						</a>
					</div>

					<div className="mt-8 flex justify-center gap-4 lg:justify-start">
						{socialLinks.map((social) => (
							<a
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-700/70 bg-[#161B22]/70 text-xl text-gray-300 transition-all duration-300 hover:border-blue-400 hover:text-blue-300"
								aria-label={social.name}
							>
								{social.icon}
							</a>
						))}
					</div>

					<a href={githubUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-200 transition-colors hover:text-blue-100 lg:justify-start">
						<FaGithub className="h-4 w-4" />
						github.com/Mahmoud-Wafi
					</a>
				</div>

				<div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:max-w-none">
					<div className="absolute -inset-3 rounded-[2rem] border border-blue-300/10 bg-blue-300/5" />
					<div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#161B22] shadow-2xl shadow-blue-950/40">
						<Image src="/profile-photo.webp" alt="Portrait of Mahmoud Wafi" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
						<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D1117]/80 to-transparent" />
					</div>
				</div>
			</div>
		</div>
	);
};
