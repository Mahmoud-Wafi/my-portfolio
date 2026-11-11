import React from 'react';
import { menuProjects, projects } from '../data/projects';
import { ProjectTile } from './ProjectTile';
import { ReceiptCard } from './ReceiptCard';
import { SectionHeading } from './SectionHeading';

export const ProjectsSection = () => (
	<section id="projects" className="scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div className="mx-auto max-w-6xl">
			<SectionHeading title="Projects" description="Digital menus for two restaurants, a corporate site, and full-stack platforms built with Django, React, and Next.js." />

			<div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
				{menuProjects.map((project, index) => (
					<div key={project.title} className={index === 1 ? 'lg:mt-20' : ''}>
						<ReceiptCard project={project} index={index} />
					</div>
				))}
			</div>

			<h3 className="mb-8 font-display text-3xl font-bold tracking-tight text-sand sm:text-4xl">More projects</h3>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectTile key={project.title} project={project} layout={index === 0 ? 'full' : index === projects.length - 1 ? 'wide' : 'single'} />
				))}
			</div>
		</div>
	</section>
);
