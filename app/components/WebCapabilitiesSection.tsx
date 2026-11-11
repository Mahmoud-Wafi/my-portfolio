import React from 'react';
import { FaCodeBranch, FaDatabase, FaGears, FaLock, FaPlug, FaWandMagicSparkles } from 'react-icons/fa6';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const services = [
	{
		title: 'Software Development',
		icon: <FaGears />,
		features: ['Django Framework', 'RESTful APIs', 'Database Design', 'Async Processing'],
	},
	{
		title: 'Database Management',
		icon: <FaDatabase />,
		features: ['PostgreSQL', 'MongoDB', 'Query Optimization', 'Data Modeling'],
	},
	{
		title: 'API Development',
		icon: <FaPlug />,
		features: ['REST APIs', 'JWT Auth', 'Request Validation', 'Error Handling'],
	},
	{
		title: 'DevOps & Deployment',
		icon: <FaCodeBranch />,
		features: ['Docker', 'Linux/Ubuntu', 'CI/CD', 'Performance Optimization'],
	},
	{
		title: 'Code Quality',
		icon: <FaWandMagicSparkles />,
		features: ['Clean Architecture', 'Testing', 'Documentation', 'Best Practices'],
	},
	{
		title: 'Security',
		icon: <FaLock />,
		features: ['Authentication', 'Authorization', 'Encryption', 'Security Audits'],
	},
];

export const WebCapabilitiesSection = () => (
	<section id="services" className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div className="mx-auto max-w-6xl">
			<SectionHeading eyebrow="What I Do" title="Modern web capabilities" description="From the database to deployment, I cover the full path from idea to production." />
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{services.map((service, index) => (
					<Reveal key={service.title} delay={(index % 3) * 0.08}>
						<div className="group h-full rounded-3xl border border-white/10 bg-[#11161D] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
							<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/10 text-lg text-sky-300 transition-colors group-hover:bg-emerald-400/10 group-hover:text-emerald-300">{service.icon}</div>
							<h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>
							<ul className="space-y-2.5">
								{service.features.map((feature) => (
									<li key={feature} className="flex items-center gap-2.5 text-sm text-zinc-400">
										<span className="h-1 w-1 rounded-full bg-emerald-400" />
										{feature}
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
