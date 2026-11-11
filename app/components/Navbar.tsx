'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
	{ label: 'Projects', id: 'projects' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Services', id: 'services' },
	{ label: 'Contact', id: 'contact' },
];

export const Navbar = () => {
	const [active, setActive] = useState<string>('');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' },
		);
		links.forEach((link) => {
			const el = document.getElementById(link.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'border-b border-white/10 bg-harbor/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
			<nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
				<a href="#top" className="font-display text-lg font-bold tracking-tight text-sand">
					Mahmoud Wafi
				</a>
				<ul className="hidden items-center gap-1 md:flex">
					{links.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} className="relative block rounded-full px-4 py-2 font-display text-sm font-medium text-fog transition-colors hover:text-sand" aria-current={active === link.id ? 'true' : undefined}>
								{active === link.id && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
								<span className={active === link.id ? 'text-sand' : ''}>{link.label}</span>
							</a>
						</li>
					))}
				</ul>
				<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-lamp px-4 py-2 font-display text-sm font-semibold text-harbor transition-transform hover:scale-105">
					Resume<span className="sr-only"> (opens in new tab)</span>
				</a>
			</nav>
		</header>
	);
};
