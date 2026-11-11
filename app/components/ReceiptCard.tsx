'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaCheck } from 'react-icons/fa6';
import type { MenuProject } from '../data/projects';
import { Tilt } from './Tilt';

/** A digital menu project, drawn as the paper receipt a café prints. It "prints" once as it scrolls into view. */
export const ReceiptCard = ({ project, index }: { project: MenuProject; index: number }) => {
	const reduce = useReducedMotion();

	return (
		<motion.article
			className="mx-auto w-full max-w-[440px]"
			initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
			whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
			viewport={{ once: true, margin: '-10% 0px' }}
			transition={{ duration: 1.4, delay: index * 0.3, ease: [0.22, 1, 0.36, 1] }}
		>
			<Tilt max={4}>
				<div className="receipt px-7 pb-14 pt-9 shadow-2xl">
					<header className="text-center">
						<p lang="ar" dir="rtl" className="font-arabic text-4xl font-semibold leading-tight">
							{project.arabicTitle}
						</p>
						<h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">{project.title}</h3>
					</header>

					<p className="mt-5 text-center text-base leading-relaxed text-[#0C2E3F]/80">{project.description}</p>

					<hr className="my-6 border-t-2 border-dashed border-[#0C2E3F]/40" />

					<ul className="space-y-2.5 font-display text-base font-medium">
						{project.categories.map((category) => (
							<li key={category} className="flex items-baseline gap-3">
								<span>{category}</span>
								<span aria-hidden className="flex-1 -translate-y-1 border-b-2 border-dotted border-[#0C2E3F]/40" />
								<FaCheck aria-hidden className="h-3 w-3 shrink-0 text-[#136A64]" />
							</li>
						))}
					</ul>

					<hr className="my-6 border-t-2 border-dashed border-[#0C2E3F]/40" />

					<div className="flex flex-wrap justify-center gap-3">
						<span className="-rotate-3 rounded-md border-2 border-[#136A64] px-3 py-1 font-display text-sm font-extrabold uppercase tracking-wider text-[#136A64]">Cashier dashboard</span>
						<span className="rotate-2 rounded-md border-2 border-[#136A64] px-3 py-1 font-display text-sm font-extrabold uppercase tracking-wider text-[#136A64]">Manager dashboard</span>
					</div>

					<p className="mt-6 text-center text-sm text-[#0C2E3F]/70">{project.hosting}</p>

					<a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 flex items-center justify-center gap-2 bg-[#0C2E3F] px-5 py-3.5 font-display font-semibold text-sand transition-colors hover:bg-[#12485E]"
					>
						Open menu
						<FaArrowUpRightFromSquare aria-hidden className="h-3 w-3" />
						<span className="sr-only"> (opens in new tab)</span>
					</a>
				</div>
			</Tilt>
		</motion.article>
	);
};
