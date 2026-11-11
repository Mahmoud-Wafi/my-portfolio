import React from 'react';
import { FaCode, FaRocket, FaServer } from 'react-icons/fa6';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const categories = [
	{
		title: 'Frontend',
		icon: <FaCode />,
		skills: ['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript / TypeScript', 'HTML & Modern CSS'],
	},
	{
		title: 'Backend & Data',
		icon: <FaServer />,
		skills: ['Django', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Database Design', 'Postman'],
	},
	{
		title: 'Performance & DevOps',
		icon: <FaRocket />,
		skills: ['Ubuntu', 'Linux', 'Web Performance', 'CI/CD', 'Git', 'GitHub'],
	},
];

export const SkillsSection = () => (
	<section id="skills" className="scroll-mt-20 border-y border-white/5 bg-white/[0.015] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div className="mx-auto max-w-6xl">
			<SectionHeading eyebrow="Toolbox" title="Technical expertise" description="The tools I reach for to design, build, and ship software." />
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{categories.map((category, index) => (
					<Reveal key={category.title} delay={index * 0.1}>
						<div className="h-full rounded-3xl border border-white/10 bg-[#11161D] p-7 transition-colors hover:border-emerald-400/30">
							<div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-lg text-emerald-300">{category.icon}</div>
							<h3 className="mb-5 text-xl font-bold text-white">{category.title}</h3>
							<ul className="flex flex-wrap gap-2">
								{category.skills.map((skill) => (
									<li key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-300">
										{skill}
									</li>
								))}
							</ul>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	</section>
);
