import React from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { menuProjects, projects } from '../data/projects';
import { MenuCard } from './MenuCard';
import { ProjectTile } from './ProjectTile';
import { SectionHeading } from './SectionHeading';

const [sidi, ...otherProjects] = projects;

export const ProjectsSection = () => (
	<section id="work" className="mx-auto max-w-[1280px] scroll-mt-16 px-5 pb-12 pt-24 sm:px-10 sm:pt-28">
		<SectionHeading title="Featured work" description="Live projects you can open and click through right now." />

		<div className="reveal flex flex-wrap gap-6">
			{menuProjects.map((project) => (
				<div key={project.title} className="flex-[1_1_300px]">
					<MenuCard project={project} />
				</div>
			))}

			<div className="flex-[1_1_300px]">
				<article className="lift flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
					<div className="relative aspect-[16/10] overflow-hidden bg-mint">
						<Image src={sidi.image} alt="Sidi Group landing page, The House Behind Great Brands" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
					</div>
					<div className="flex flex-1 flex-col gap-3.5 p-6">
						<h3 className="font-display text-2xl font-extrabold tracking-tight">{sidi.title}</h3>
						<p className="text-base leading-relaxed text-muted">Corporate site for a group spanning food, retail, hospitality, and entertainment.</p>
						<ul className="flex flex-wrap gap-1.5">
							{['Next.js', 'Tailwind CSS', 'SEO'].map((tag) => (
								<li key={tag} className="rounded-full bg-mint px-3 py-1 text-[13px] text-ink/85">
									{tag}
								</li>
							))}
						</ul>
						{sidi.link && (
							<a href={sidi.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 font-display text-base font-bold text-leaf">
								Open live site
								<FaArrowUpRightFromSquare aria-hidden className="h-3.5 w-3.5" />
								<span className="sr-only"> (opens in new tab)</span>
							</a>
						)}
					</div>
				</article>
			</div>

			<div className="flex-[1_1_300px]">
				<article className="lift flex h-full min-h-[360px] flex-col justify-between gap-6 rounded-3xl bg-lime p-8">
					<h3 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">Your project could be next.</h3>
					<div className="flex flex-col gap-5">
						<p className="text-[17px] leading-relaxed text-ink/90">Tell me what you need and I&apos;ll reply with how I would build it.</p>
						<a href="mailto:mahmoudwafi33@gmail.com" className="btn self-start rounded-full bg-ink px-6 py-3.5 text-base font-bold text-ground">
							Start a project
						</a>
					</div>
				</article>
			</div>
		</div>

		<h3 className="reveal mb-8 mt-24 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">More projects</h3>
		<div className="reveal grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{otherProjects.map((project) => (
				<ProjectTile key={project.title} project={project} />
			))}
		</div>
	</section>
);
