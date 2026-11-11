import React from 'react';

export const SectionHeading = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
	<div className="mb-12 max-w-2xl sm:mb-16">
		<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
		<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
		{description && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
	</div>
);
