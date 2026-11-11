'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCopy, FaGithub, FaLinkedin } from 'react-icons/fa6';

const email = 'mahmoudwafi33@gmail.com';

export const ContactSection = () => {
	const [message, setMessage] = useState('');

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setMessage('Email copied');
		} catch {
			setMessage("Couldn't copy. Select the address and copy it manually.");
		}
		window.setTimeout(() => setMessage(''), 2500);
	};

	return (
		<section id="contact" className="relative scroll-mt-16 overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-32 lg:px-8">
			<div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,181,71,0.14),transparent)]" />

			<div className="relative mx-auto max-w-6xl">
				<h2 className="max-w-4xl font-display text-[clamp(2.8rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-sand">Let&apos;s talk about your project</h2>
				<p className="mt-6 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">Tell me what you want to build, and I&apos;ll reply with how I would approach it.</p>

				<div className="mt-10 flex flex-wrap items-center gap-3">
					<a href={`mailto:${email}`} className="rounded-full bg-lamp px-7 py-3.5 font-display font-semibold text-harbor transition-transform hover:scale-105">
						Email me
					</a>
					<button
						type="button"
						onClick={copyEmail}
						className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-display font-semibold text-sand transition-colors hover:border-lamp hover:text-lamp"
					>
						<FaCopy aria-hidden className="h-4 w-4" />
						{email}
					</button>
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-3.5 font-display font-semibold text-fog underline decoration-white/20 underline-offset-4 transition-colors hover:text-lamp hover:decoration-lamp">
						Resume<span className="sr-only"> (opens in new tab)</span>
					</a>
				</div>

				<div className="mt-4 h-6" role="status" aria-live="polite">
					<AnimatePresence>
						{message && (
							<motion.p key={message} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-display text-sm font-medium text-glass">
								{message}
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				<footer className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
					<p className="font-display text-sm text-fog">© {new Date().getFullYear()} Mahmoud Wafi. Alexandria, Egypt.</p>
					<ul className="flex gap-3">
						<li>
							<a
								href="https://github.com/Mahmoud-Wafi"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub (opens in new tab)"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl text-fog transition-all hover:-translate-y-0.5 hover:border-lamp hover:text-lamp"
							>
								<FaGithub />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn (opens in new tab)"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xl text-fog transition-all hover:-translate-y-0.5 hover:border-lamp hover:text-lamp"
							>
								<FaLinkedin />
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</section>
	);
};
