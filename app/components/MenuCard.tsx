import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { MenuProject } from '../data/projects';

/** A digital menu project, shown as a marketplace-style card with a themed preview. */
export const MenuCard = ({ project }: { project: MenuProject }) => (
	<article className="lift flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
		<div className="flex aspect-[16/10] flex-col items-center justify-center gap-3.5 p-5" style={{ background: project.background, color: project.foreground }}>
			<p lang="ar" dir="rtl" className="text-center font-arabic text-3xl font-semibold sm:text-4xl">
				{project.arabicTitle}
			</p>
			<ul className="flex flex-wrap justify-center gap-1.5">
				{project.categories.slice(0, 3).map((category) => (
					<li key={category} className="rounded-full bg-white/[0.12] px-3 py-1 text-[13px]">
						{category}
					</li>
				))}
			</ul>
		</div>

		<div className="flex flex-1 flex-col gap-3.5 p-6">
			<h3 className="font-display text-2xl font-extrabold tracking-tight">{project.title}</h3>
			<p className="text-base leading-relaxed text-muted">{project.description}</p>
			<ul className="flex flex-wrap gap-1.5">
				{['Arabic (RTL)', 'Cashier dashboard', 'Manager dashboard'].map((tag) => (
					<li key={tag} className="rounded-full bg-mint px-3 py-1 text-[13px] text-ink/85">
						{tag}
					</li>
				))}
			</ul>
			<p className="text-sm text-muted">{project.hosting}</p>
			<a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 font-display text-base font-bold text-leaf">
				Open live menu
				<FaArrowUpRightFromSquare aria-hidden className="h-3.5 w-3.5" />
				<span className="sr-only"> (opens in new tab)</span>
			</a>
		</div>
	</article>
);
