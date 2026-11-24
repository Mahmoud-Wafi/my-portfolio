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
		<section id="skills" className="mx-auto max-w-[1280px] scroll-mt-16 px-5 pb-12 pt-24 sm:px-10 sm:pt-28">
			<SectionHeading title="Skills" description="What I use day to day, grouped by where it sits in the stack." />

			<div className="reveal grid gap-8 rounded-[2rem] border border-line bg-paper p-6 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
				<div role="tablist" aria-label="Skill areas" aria-orientation="vertical" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
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
								className={`relative shrink-0 whitespace-nowrap rounded-2xl px-5 py-3.5 text-left font-display text-xl font-extrabold tracking-tight transition-colors sm:text-2xl lg:whitespace-normal lg:py-5 ${isSelected ? 'text-ink' : 'text-muted hover:text-ink'}`}
							>
								{isSelected && <motion.span layoutId="skill-pill" className="absolute inset-0 -z-10 rounded-2xl bg-lime" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
								{category.title}
							</button>
						);
					})}
				</div>

				<div role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${selected}`} tabIndex={0} className="min-h-[200px]">
					<AnimatePresence mode="wait">
						<motion.div key={current.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
							<p className="max-w-md text-xl leading-relaxed text-muted">{current.summary}</p>
							<ul className="mt-7 flex flex-wrap gap-3">
								{current.skills.map((skill, index) => (
									<motion.li
										key={skill}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
										className="rounded-full border border-line bg-ground px-5 py-2.5 font-display text-lg font-semibold transition-colors hover:border-leaf hover:text-leaf"
									>
										{skill}
									</motion.li>
								))}
							</ul>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
