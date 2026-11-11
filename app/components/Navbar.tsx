import React from 'react';

const links = [
	{ label: 'Work', href: '#work' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Services', href: '#services' },
	{ label: 'Contact', href: '#contact' },
];

export const Navbar = () => (
	<header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0A0D12]/70 backdrop-blur-xl">
		<nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
			<a href="#top" className="text-sm font-semibold tracking-tight text-white">
				Mahmoud<span className="text-emerald-400">.</span>Wafi
			</a>
			<ul className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
				{links.map((link) => (
					<li key={link.href}>
						<a href={link.href} className="transition-colors hover:text-white">
							{link.label}
						</a>
					</li>
				))}
			</ul>
			<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:border-emerald-400/60 hover:text-emerald-300">
				Resume
			</a>
		</nav>
	</header>
);
