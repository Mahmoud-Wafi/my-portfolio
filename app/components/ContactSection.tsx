'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCopy } from 'react-icons/fa6';

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
		<section id="contact" className="mx-auto max-w-[1280px] scroll-mt-16 px-5 pb-4 pt-24 sm:px-10 sm:pt-28">
			<div className="reveal flex flex-col gap-7 rounded-[2.25rem] bg-forest px-6 py-12 text-[#E8F0E2] sm:px-14 sm:py-[72px]">
				<h2 className="max-w-[820px] font-display text-[2.5rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[72px]">Have a project in mind? Let&apos;s talk.</h2>
				<p className="max-w-[520px] text-lg leading-relaxed text-[#B7C8BB] sm:text-xl">Tell me what you want to build and I&apos;ll reply with how I would approach it.</p>
				<div className="flex flex-wrap items-center gap-3">
					<a href={`mailto:${email}`} className="btn rounded-full bg-lime px-8 py-4 text-[17px] font-bold text-ink">
						Email me
					</a>
					<button type="button" onClick={copyEmail} className="inline-flex items-center gap-3 rounded-full border-[1.5px] border-[#4E6A58] px-7 py-4 text-[17px] font-semibold transition-colors hover:border-lime">
						<FaCopy aria-hidden className="h-4 w-4" />
						{email}
					</button>
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-4 text-[17px] font-semibold underline decoration-[#4E6A58] underline-offset-4 transition-colors hover:text-lime">
						Resume<span className="sr-only"> (opens in new tab)</span>
					</a>
				</div>
				<div className="h-5" role="status" aria-live="polite">
					<AnimatePresence>
						{message && (
							<motion.p key={message} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-display text-sm font-semibold text-lime">
								{message}
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			</div>

			<footer className="flex flex-wrap items-center justify-between gap-4 pb-10 pt-6 text-[15px] text-muted">
				<p>© {new Date().getFullYear()} Mahmoud Wafi. Alexandria, Egypt.</p>
				<ul className="flex gap-1">
					<li>
						<a href="https://github.com/Mahmoud-Wafi" target="_blank" rel="noopener noreferrer" className="block px-3.5 py-3 font-medium transition-colors hover:text-leaf">
							GitHub<span className="sr-only"> (opens in new tab)</span>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="block px-3.5 py-3 font-medium transition-colors hover:text-leaf">
							LinkedIn<span className="sr-only"> (opens in new tab)</span>
						</a>
					</li>
				</ul>
			</footer>
		</section>
	);
};
