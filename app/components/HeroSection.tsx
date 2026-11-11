import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export const HeroSection = () => {
	const githubUrl = 'https://github.com/Mahmoud-Wafi';
	const techStack = ['Python', 'Django', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Celery', 'REST API'];
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
		<section id="top" className="relative isolate overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(52,211,153,0.14),transparent),radial-gradient(50%_40%_at_90%_30%,rgba(96,165,250,0.12),transparent)]" />
			<div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.05] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

			<div className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
				<div className="text-center lg:text-left">
					<a href="#work" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200 transition-colors hover:bg-emerald-400/15 sm:text-sm">
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						New: Momo Club &amp; Leqaa digital menus
						<FaArrowRight className="h-3 w-3" />
					</a>

					<h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
						Mahmoud <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Wafi</span>
					</h1>
					<p className="mt-3 text-lg font-medium text-zinc-300 sm:text-xl">Software Engineer · Alexandria, Egypt</p>
					<p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg lg:mx-0">
						I build reliable software systems with Python, Django, FastAPI, React, and modern databases, turning product ideas into clean APIs, secure workflows, and scalable web applications.
					</p>

					<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
						<a href="#work" className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-black transition-colors hover:bg-emerald-300">
							View My Work
							<FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
						<a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5">
							Get in Touch
						</a>
					</div>

					<ul className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
						{techStack.map((tech) => (
							<li key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300">
								{tech}
							</li>
						))}
					</ul>

					<div className="mt-8 flex justify-center gap-3 lg:justify-start">
						{socialLinks.map((social) => (
							<a
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xl text-zinc-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
								aria-label={social.name}
							>
								{social.icon}
							</a>
						))}
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none">
					<div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-sky-400/20 blur-2xl" />
					<div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#11161D] shadow-2xl shadow-black/50">
						<Image src="/profile-photo.webp" alt="Portrait of Mahmoud Wafi" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover" />
						<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D12]/80 to-transparent" />
					</div>
				</div>
			</div>
		</section>
	);
};
