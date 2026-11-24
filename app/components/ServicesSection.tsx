import React from 'react';
import { SectionHeading } from './SectionHeading';

const icons = {
	menu: (
		<>
			<rect x="5" y="3" width="14" height="18" rx="2" />
			<path d="M9 8h6M9 12h6M9 16h4" />
		</>
	),
	app: (
		<>
			<rect x="3" y="4" width="18" height="16" rx="2" />
			<path d="M3 9h18" />
		</>
	),
	api: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />,
	site: (
		<>
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M3 14h18M8 14v7" />
		</>
	),
};

const services = [
	{ title: 'Digital menus', icon: icons.menu, text: 'A fast Arabic menu for guests, plus cashier and manager dashboards.' },
	{ title: 'Web apps', icon: icons.app, text: 'Full-stack products with accounts, payments, and admin panels.' },
	{ title: 'APIs and backends', icon: icons.api, text: 'REST APIs with secure login, clean data models, and fast queries.' },
	{ title: 'Company websites', icon: icons.site, text: 'Quick, search-friendly landing pages for brands and groups.' },
];

export const ServicesSection = () => (
	<section id="services" className="mx-auto max-w-[1280px] scroll-mt-16 px-5 pb-12 pt-24 sm:px-10 sm:pt-28">
		<SectionHeading title="Browse by what you need" description="Pick the closest match and I'll scope it with you. Each one starts from work already in this portfolio." />
		<ul className="reveal flex flex-wrap gap-5">
			{services.map((service) => (
				<li key={service.title} className="flex-[1_1_250px]">
					<a href="#work" className="lift flex h-full flex-col gap-4 rounded-3xl border border-line bg-paper p-7">
						<span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime">
							<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#0E1B14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								{service.icon}
							</svg>
						</span>
						<h3 className="font-display text-2xl font-extrabold tracking-tight">{service.title}</h3>
						<p className="text-base leading-relaxed text-muted">{service.text}</p>
					</a>
				</li>
			))}
		</ul>
	</section>
);
