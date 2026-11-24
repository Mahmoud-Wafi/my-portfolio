'use client';

import React, { useId, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaPlus } from 'react-icons/fa6';
import type { Project } from '../data/projects';
import { CountUp } from './CountUp';

const metricLabels: Record<string, string> = {
	performance: 'Performance',
	accessibility: 'Accessibility',
	seo: 'SEO',
};

/** A project card. "Show details" opens the full stack and scores. */
export const ProjectTile = ({ project }: { project: Project }) => {
	const [open, setOpen] = useState(false);
	const panelId = useId();

	return (
		<article className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
			<div className="relative aspect-[16/10] overflow-hidden bg-mint">
				<Image src={project.image} alt={`${project.title} preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
			</div>

			<div className="flex flex-1 flex-col gap-4 p-6">
				<h3 className="font-display text-2xl font-extrabold tracking-tight">{project.title}</h3>
				<p className="text-base leading-relaxed text-muted">{project.description}</p>

				<ul className="flex flex-wrap gap-1.5">
					{project.techDetails.slice(0, 3).map((tech) => (
						<li key={tech} className="rounded-full bg-mint px-3 py-1 text-[13px] text-ink/85">
							{tech}
						</li>
					))}
				</ul>

				<div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
					<button
						type="button"
						onClick={() => setOpen((value) => !value)}
						aria-expanded={open}
						aria-controls={panelId}
						className="inline-flex min-h-11 items-center gap-2 font-display text-[15px] font-bold transition-colors hover:text-leaf"
					>
						<FaPlus aria-hidden className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
						{open ? 'Hide details' : 'Show details'}
					</button>

					{project.link && (
						<a href={project.link} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 font-display text-[15px] font-bold text-ink">
							Visit site
							<FaArrowUpRightFromSquare aria-hidden className="h-3 w-3" />
							<span className="sr-only"> (opens in new tab)</span>
						</a>
					)}
				</div>

				<AnimatePresence initial={false}>
					{open && (
						<motion.div
							id={panelId}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
							className="overflow-hidden"
						>
							<div className="border-t border-line pt-5">
								<h4 className="font-display text-base font-bold">Stack and features</h4>
								<ul className="mt-3 space-y-1.5 text-base text-muted">
									{project.techDetails.map((detail) => (
										<li key={detail} className="flex gap-3">
											<span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-leaf" />
											{detail}
										</li>
									))}
								</ul>

								{project.metrics && (
									<dl className="mt-5 grid grid-cols-3 gap-3">
										{Object.entries(project.metrics).map(([key, value]) => (
											<div key={key} className="rounded-2xl bg-ground px-2 py-3 text-center">
												<dd className="font-display text-3xl font-extrabold text-leaf">
													<CountUp to={value} />
												</dd>
												<dt className="mt-1 text-[13px] text-muted">{metricLabels[key] ?? key}</dt>
											</div>
										))}
									</dl>
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</article>
	);
};
