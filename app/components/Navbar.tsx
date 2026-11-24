'use client';

import React, { useEffect, useState } from 'react';

const links = [
	{ label: 'Services', id: 'services' },
	{ label: 'Work', id: 'work' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Process', id: 'process' },
];

export const Navbar = () => {
	const [active, setActive] = useState('');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
			{ rootMargin: '-45% 0px -50% 0px' },
		);
		links.forEach((link) => {
			const el = document.getElementById(link.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-line bg-ground/85 backdrop-blur-xl' : 'border-b border-transparent'}`}>
			<nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3 sm:px-10" aria-label="Main">
				<a href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
					<span aria-hidden className="h-7 w-7 rounded-lg bg-lime" />
					Mahmoud Wafi
				</a>
				<ul className="hidden items-center gap-1 md:flex">
					{links.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`} aria-current={active === link.id ? 'true' : undefined} className={`block rounded-full px-4 py-3 text-base font-medium transition-colors hover:text-leaf ${active === link.id ? 'bg-mint text-ink' : 'text-ink/80'}`}>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-2">
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden rounded-full px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:text-leaf sm:block">
						Resume<span className="sr-only"> (opens in new tab)</span>
					</a>
					<a href="mailto:mahmoudwafi33@gmail.com" className="btn rounded-full bg-ink px-5 py-3 text-base font-semibold text-ground">
						Hire me
					</a>
				</div>
			</nav>
		</header>
	);
};
