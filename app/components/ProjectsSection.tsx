import React from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare, FaCashRegister, FaChartLine } from 'react-icons/fa6';
import { menuProjects, projects, type MenuProject, type Project } from '../data/projects';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const MenuPreview = ({ project }: { project: MenuProject }) => (
	<div className="relative flex h-56 flex-col justify-between overflow-hidden p-6 sm:h-64" style={{ background: project.theme.background }}>
		<div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl" style={{ background: project.theme.accentSoft }} />
		<div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
		<div className="relative">
			<p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: project.theme.accent }}>
				Digital Menu
			</p>
			<p dir="rtl" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
				{project.arabicTitle}
			</p>
		</div>
		<div className="relative flex flex-wrap gap-2">
			{project.categories.map((category) => (
				<span key={category} className="rounded-full border px-3 py-1 text-xs font-medium text-white/90" style={{ borderColor: project.theme.accent + '55', background: project.theme.accentSoft }}>
					{category}
				</span>
			))}
		</div>
	</div>
);

const MenuCard = ({ project }: { project: MenuProject }) => (
	<article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#11161D] transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
		<MenuPreview project={project} />
		<div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
			<div>
				<h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
				<p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
					<FaCashRegister className="h-4 w-4 shrink-0" style={{ color: project.theme.accent }} />
					<span className="text-sm font-medium text-zinc-200">Cashier dashboard</span>
				</div>
				<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
					<FaChartLine className="h-4 w-4 shrink-0" style={{ color: project.theme.accent }} />
					<span className="text-sm font-medium text-zinc-200">Manager dashboard</span>
				</div>
			</div>

			<ul className="flex flex-wrap gap-2">
				{project.highlights.map((item) => (
					<li key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
						{item}
					</li>
				))}
			</ul>

			<div className="mt-auto flex flex-wrap gap-3 pt-2">
				{project.links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
						style={{ background: project.theme.accent }}
					>
						{link.label}
						<FaArrowUpRightFromSquare className="h-3 w-3" />
					</a>
				))}
			</div>
		</div>
	</article>
);

const ProjectCard = ({ project }: { project: Project }) => (
	<article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#11161D] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
		<div className="relative h-48 overflow-hidden">
			<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
			<div className="absolute inset-0 bg-gradient-to-t from-[#11161D] via-[#11161D]/20 to-transparent" />
		</div>
		<div className="flex flex-1 flex-col gap-5 p-6">
			<div>
				<h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
				<p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
			</div>

			<ul className="flex flex-wrap gap-2">
				{project.techDetails.slice(0, 5).map((tech) => (
					<li key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
						{tech}
					</li>
				))}
				{project.techDetails.length > 5 && <li className="rounded-full px-2 py-1 text-xs text-zinc-500">+{project.techDetails.length - 5} more</li>}
			</ul>

			{project.metrics && (
				<dl className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
					{Object.entries(project.metrics).map(([key, value]) => (
						<div key={key} className="text-center">
							<dd className="text-lg font-bold text-emerald-300">{value}</dd>
							<dt className="text-[11px] capitalize text-zinc-500">{key}</dt>
						</div>
					))}
				</dl>
			)}

			{project.link && (
				<a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200">
					{project.linkText || 'Visit Live Website'}
					<FaArrowUpRightFromSquare className="h-3 w-3" />
				</a>
			)}
		</div>
	</article>
);

export const ProjectsSection = () => (
	<section id="work" className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div className="mx-auto max-w-6xl">
			<SectionHeading eyebrow="Selected Work" title="Projects I've built" description="Real products for real businesses, plus full-stack platforms across Django, React, and Next.js." />

			<div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
				{menuProjects.map((project, index) => (
					<Reveal key={project.title} delay={index * 0.1}>
						<MenuCard project={project} />
					</Reveal>
				))}
			</div>

			<Reveal>
				<h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">More projects</h3>
			</Reveal>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
				{projects.map((project, index) => (
					<Reveal key={project.title} delay={(index % 3) * 0.08}>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>
		</div>
	</section>
);
