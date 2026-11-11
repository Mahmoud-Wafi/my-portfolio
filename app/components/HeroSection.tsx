'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

const socialLinks = [
	{ name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Mahmoud-Wafi' },
	{
		name: 'LinkedIn',
		icon: <FaLinkedin />,
		href: 'https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
	},
	{ name: 'Facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/mahmoud.wafi.abdelsalam' },
	{ name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/message/QVLO5LO5X7NYE1' },
];

const nameWords = ['Mahmoud', 'Wafi'];
const ease = [0.22, 1, 0.36, 1] as const;

export const HeroSection = () => {
	const reduce = useReducedMotion();
	const heroRef = useRef<HTMLElement>(null);
	const archRef = useRef<HTMLDivElement>(null);

	// Keep the beam's origin (the lamp) exactly above the top of the portrait arch at every screen size.
	useEffect(() => {
		const hero = heroRef.current;
		const arch = archRef.current;
		if (!hero || !arch) return;
		const place = () => {
			const h = hero.getBoundingClientRect();
			const a = arch.getBoundingClientRect();
			hero.style.setProperty('--lamp-x', `${a.left - h.left + a.width / 2}px`);
			hero.style.setProperty('--lamp-y', `${a.top - h.top - 40}px`);
		};
		place();
		const observer = new ResizeObserver(place);
		observer.observe(hero);
		observer.observe(arch);
		window.addEventListener('resize', place);
		return () => {
			observer.disconnect();
			window.removeEventListener('resize', place);
		};
	}, []);

	let letterIndex = 0;

	return (
		<section id="top" ref={heroRef} className="beam-scope relative isolate overflow-hidden">
			<div aria-hidden className="beam-grid absolute inset-0 -z-20" />
			<div aria-hidden className="beam-light absolute inset-0 -z-10" />
			<div aria-hidden className="lamp absolute z-0 -translate-x-1/2 -translate-y-1/2" style={{ left: 'var(--lamp-x)', top: 'var(--lamp-y)' }} />

			<div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-24">
				<div className="order-2 lg:order-1 lg:col-span-8">
					<h1 aria-label="Mahmoud Wafi" className="font-display text-[clamp(3.6rem,11vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-sand">
						{nameWords.map((word) => (
							<span key={word} aria-hidden className="block overflow-hidden whitespace-nowrap pb-[0.12em]">
								{word.split('').map((letter) => {
									const delay = 0.15 + letterIndex++ * 0.05;
									return (
										<motion.span key={`${word}-${letterIndex}`} className="inline-block" initial={reduce ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
											{letter}
										</motion.span>
									);
								})}
							</span>
						))}
					</h1>

					<motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.95, ease }}>
						<p className="mt-8 font-display text-xl font-semibold text-sand sm:text-2xl">Software engineer in Alexandria, Egypt.</p>
						<p className="mt-4 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">
							I build reliable software systems with Python, Django, FastAPI, React, and modern databases, turning product ideas into clean APIs, secure workflows, and scalable web applications.
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-3">
							<a href="#projects" className="rounded-full bg-lamp px-7 py-3.5 font-display font-semibold text-harbor transition-transform hover:scale-105">
								View projects
							</a>
							<a href="#contact" className="rounded-full border border-white/20 px-7 py-3.5 font-display font-semibold text-sand transition-colors hover:border-lamp hover:text-lamp">
								Email me
							</a>
						</div>

						<ul className="mt-9 flex gap-3">
							{socialLinks.map((social) => (
								<li key={social.name}>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${social.name} (opens in new tab)`}
										className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl text-fog transition-all hover:-translate-y-0.5 hover:border-lamp hover:text-lamp"
									>
										{social.icon}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				<div className="order-1 lg:order-2 lg:col-span-4">
					<motion.div
						ref={archRef}
						className="relative w-full max-w-[220px] sm:max-w-[300px] lg:ml-auto lg:max-w-[360px]"
						initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
						animate={{ clipPath: 'inset(0% 0 0 0)' }}
						transition={{ duration: 1.3, delay: 0.3, ease }}
					>
						<div aria-hidden className="absolute -inset-3 rounded-t-[999px] rounded-b-2xl border border-lamp/40" />
						<div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-xl bg-deep">
							<Image src="/profile-photo.webp" alt="Portrait of Mahmoud Wafi" fill priority sizes="(max-width: 1024px) 300px, 360px" className="object-cover" />
							<div aria-hidden className="absolute inset-0 bg-gradient-to-t from-harbor/60 via-transparent to-transparent" />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
