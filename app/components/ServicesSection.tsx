import React from 'react';
import { SectionHeading } from './SectionHeading';

const services = [
	{ title: 'Back-end development', features: ['Django', 'RESTful APIs', 'Database design', 'Async processing'] },
	{ title: 'Databases', features: ['PostgreSQL', 'MongoDB', 'Query optimization', 'Data modeling'] },
	{ title: 'APIs', features: ['REST APIs', 'JWT authentication', 'Request validation', 'Error handling'] },
	{ title: 'Deployment', features: ['Docker', 'Linux and Ubuntu', 'CI/CD', 'Performance tuning'] },
	{ title: 'Code quality', features: ['Clean architecture', 'Testing', 'Documentation', 'Best practices'] },
	{ title: 'Security', features: ['Authentication', 'Authorization', 'Encryption', 'Security audits'] },
];

export const ServicesSection = () => (
	<section id="services" className="scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div className="mx-auto max-w-6xl">
			<SectionHeading title="Services" description="Where I can help on your project, from the database to deployment." />

			<ul className="border-t border-white/10">
				{services.map((service) => (
					<li key={service.title} className="group relative border-b border-white/10">
						<div className="grid gap-3 py-8 transition-transform duration-500 ease-out group-hover:translate-x-3 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline md:gap-10 md:py-10">
							<h3 className="font-display text-3xl font-bold tracking-tight text-sand transition-colors duration-300 group-hover:text-lamp sm:text-4xl">{service.title}</h3>
							<p className="text-lg leading-relaxed text-fog sm:text-xl">{service.features.join(', ')}.</p>
						</div>
						<span aria-hidden className="absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-lamp transition-transform duration-700 ease-out group-hover:scale-x-100" />
					</li>
				))}
			</ul>
		</div>
	</section>
);
