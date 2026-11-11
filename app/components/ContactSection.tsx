import React from 'react';
import { FaEnvelope, FaFileLines, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { Reveal } from './Reveal';

export const ContactSection = () => (
	<section id="contact" className="scroll-mt-20 px-4 pb-16 pt-24 sm:px-6 sm:pt-32 lg:px-8">
		<div className="mx-auto max-w-4xl">
			<Reveal>
				<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11161D] px-6 py-14 text-center sm:px-12 sm:py-20">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(52,211,153,0.14),transparent)]" />
					<div className="relative">
						<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Contact</p>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Let&apos;s build something together</h2>
						<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">Have a product, a menu, or a system in mind? Tell me about it and let&apos;s turn it into something that works.</p>

						<div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500">
							<FaLocationDot className="h-3.5 w-3.5" />
							<span>Alexandria, Egypt</span>
						</div>

						<div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
							<a href="mailto:mahmoudwafi33@gmail.com" className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-7 py-3.5 font-semibold text-black transition-colors hover:bg-emerald-300">
								<FaEnvelope className="h-4 w-4" />
								Get in Touch
							</a>
							<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5">
								<FaFileLines className="h-4 w-4" />
								View Resume
							</a>
						</div>

						<div className="mt-10 flex justify-center gap-3">
							<a
								href="https://github.com/Mahmoud-Wafi"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/mahmoud-wafi-30960a24a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
			</Reveal>

			<p className="mt-10 text-center text-xs text-zinc-600">© {new Date().getFullYear()} Mahmoud Wafi. All rights reserved.</p>
		</div>
	</section>
);
