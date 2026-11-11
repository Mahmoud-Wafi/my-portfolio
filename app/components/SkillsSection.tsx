'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const categories = [
	{
		title: 'Front end',
		summary: 'Interfaces that load fast and work on every screen.',
		skills: ['Next.js', 'React.js', 'Tailwind CSS', 'JavaScript and TypeScript', 'HTML and modern CSS'],
	},
	{
		title: 'Back end and data',
		summary: 'APIs and databases designed to keep working as they grow.',
		skills: ['Django', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Database design', 'Postman'],
	},
	{
		title: 'Performance and DevOps',
		summary: 'Getting software shipped, kept fast, and kept running.',
		skills: ['Ubuntu', 'Linux', 'Web performance', 'CI/CD', 'Git', 'GitHub'],
	},
];

export const SkillsSection = () => {
	const [selected, setSelected] = useState(0);
	const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const onKeyDown = (event: React.KeyboardEvent, index: number) => {
		const last = categories.length - 1;
		let next = index;
		if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
		else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
		else return;
		event.preventDefault();
		setSelected(next);
		tabRefs.current[next]?.focus();
	};

	const current = categories[selected];

	return (
		<section id="skills" className="scroll-mt-16 border-y border-white/10 bg-deep/40 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<SectionHeading title="Skills" description="What I use day to day, grouped by where it sits in the stack." />

				<div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
					<div role="tablist" aria-label="Skill areas" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible">
						{categories.map((category, index) => {
							const isSelected = index === selected;
							return (
								<button
									key={category.title}
									ref={(el) => {
										tabRefs.current[index] = el;
									}}
									type="button"
									role="tab"
									id={`skill-tab-${index}`}
									aria-selected={isSelected}
									aria-controls="skill-panel"
									tabIndex={isSelected ? 0 : -1}
									onClick={() => setSelected(index)}
									onKeyDown={(event) => onKeyDown(event, index)}
									className={`relative shrink-0 whitespace-nowrap py-3 pl-5 pr-6 text-left font-display text-2xl font-bold tracking-tight transition-colors sm:text-4xl lg:whitespace-normal lg:py-5 ${isSelected ? 'text-sand' : 'text-fog hover:text-sand'}`}
								>
									{isSelected && <motion.span layoutId="skill-bar" className="absolute inset-y-2 left-0 w-1 rounded-full bg-lamp" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
									{category.title}
								</button>
							);
						})}
					</div>

					<div role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${selected}`} tabIndex={0} className="min-h-[260px]">
						<AnimatePresence mode="wait">
							<motion.div key={current.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
								<p className="max-w-md text-xl leading-relaxed text-fog">{current.summary}</p>
								<ul className="mt-8 flex flex-wrap gap-3">
									{current.skills.map((skill, index) => (
										<motion.li
											key={skill}
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
											className="rounded-full border border-white/15 bg-harbor/50 px-5 py-2.5 font-display text-lg font-medium text-sand transition-colors hover:border-lamp hover:text-lamp"
										>
											{skill}
										</motion.li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
};
