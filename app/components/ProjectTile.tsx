'use client';

import React, { useId, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaPlus } from 'react-icons/fa6';
import type { Project } from '../data/projects';
import { CountUp } from './CountUp';
import { Tilt } from './Tilt';

type Layout = 'single' | 'wide' | 'full';

const spans: Record<Layout, string> = {
	single: 'h-full',
	wide: 'h-full lg:col-span-2',
	full: 'h-full lg:col-span-3',
};

const metricLabels: Record<string, string> = {
	performance: 'Performance',
	accessibility: 'Accessibility',
	seo: 'SEO',
};

/** A project card. The image warms from grey to colour on hover, and "Show details" opens the full stack and scores. */
export const ProjectTile = ({ project, layout = 'single' }: { project: Project; layout?: Layout }) => {
	const [open, setOpen] = useState(false);
	const panelId = useId();
	const horizontal = layout !== 'single';

	return (
		<Tilt className={spans[layout]} max={3}>
			<article className={`spotlight group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-deep transition-colors duration-300 focus-within:border-lamp/40 hover:border-lamp/40 ${horizontal ? 'lg:flex-row' : ''}`}>
				<div className={`relative aspect-[16/10] overflow-hidden ${horizontal ? `lg:aspect-auto lg:min-h-[340px] lg:shrink-0 ${layout === 'full' ? 'lg:w-3/5' : 'lg:w-1/2'}` : ''}`}>
					<Image
						src={project.image}
						alt={`${project.title} preview`}
						fill
						sizes={horizontal ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
						className="object-cover grayscale transition duration-700 group-focus-within:grayscale-0 group-hover:scale-105 group-hover:grayscale-0"
					/>
					<div aria-hidden className="absolute inset-0 bg-tide/50 mix-blend-multiply transition-opacity duration-500 group-focus-within:opacity-0 group-hover:opacity-0" />
					<div aria-hidden className={`absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent ${horizontal ? 'lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-deep/80' : ''}`} />
					<h3 className={`absolute inset-x-5 bottom-4 font-display text-2xl font-bold leading-tight tracking-tight text-sand sm:text-3xl ${horizontal ? 'lg:text-4xl' : ''}`}>{project.title}</h3>
				</div>

				<div className={`flex flex-1 flex-col p-5 sm:p-6 ${horizontal ? 'lg:justify-center lg:p-8' : ''}`}>
					<p className="text-base leading-relaxed text-fog sm:text-lg">{project.description}</p>

					<ul className="mt-4 flex flex-wrap gap-2">
						{project.techDetails.slice(0, 3).map((tech) => (
							<li key={tech} className="rounded-full border border-white/15 px-3 py-1 font-display text-sm text-sand/90">
								{tech}
							</li>
						))}
					</ul>

					<div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
						<button
							type="button"
							onClick={() => setOpen((value) => !value)}
							aria-expanded={open}
							aria-controls={panelId}
							className="inline-flex items-center gap-2 font-display text-sm font-semibold text-sand transition-colors hover:text-lamp"
						>
							<FaPlus aria-hidden className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
							{open ? 'Hide details' : 'Show details'}
						</button>

						{project.link && (
							<a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 rounded-full bg-lamp px-4 py-2 font-display text-sm font-semibold text-harbor transition-transform hover:scale-105">
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
								<div className="mt-6 border-t border-white/10 pt-6">
									<h4 className="font-display text-base font-semibold text-sand">Stack and features</h4>
									<ul className="mt-3 space-y-1.5 text-base text-fog">
										{project.techDetails.map((detail) => (
											<li key={detail} className="flex gap-3">
												<span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-lamp" />
												{detail}
											</li>
										))}
									</ul>

									{project.metrics && (
										<dl className="mt-6 grid grid-cols-3 gap-3">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="rounded-lg bg-harbor/60 px-3 py-3 text-center">
													<dd className="font-display text-3xl font-extrabold text-lamp">
														<CountUp to={value} />
													</dd>
													<dt className="mt-1 text-sm text-fog">{metricLabels[key] ?? key}</dt>
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
		</Tilt>
	);
};
