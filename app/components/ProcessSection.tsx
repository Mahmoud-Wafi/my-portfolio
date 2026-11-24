import React from 'react';
import { SectionHeading } from './SectionHeading';

const steps = [
	{ title: 'You send a brief', text: 'Share what the business needs. I reply with a plan and what I would build first.' },
	{ title: 'I build in stages', text: 'You see a working version early and can change direction before it is finished.' },
	{ title: 'I launch and hand over', text: 'I deploy it, then walk your team through the dashboards.' },
];

export const ProcessSection = () => (
	<section id="process" className="mx-auto max-w-[1280px] scroll-mt-16 px-5 pb-12 pt-24 sm:px-10 sm:pt-28">
		<SectionHeading title="How a project runs" />
		<ol className="reveal flex flex-wrap gap-5">
			{steps.map((step, index) => (
				<li key={step.title} className="flex flex-[1_1_280px] flex-col gap-3.5 rounded-3xl border border-line bg-paper p-8">
					<span className="font-display text-6xl font-extrabold leading-none text-leaf">{index + 1}</span>
					<h3 className="font-display text-2xl font-extrabold tracking-tight">{step.title}</h3>
					<p className="text-base leading-relaxed text-muted">{step.text}</p>
				</li>
			))}
		</ol>
	</section>
);
