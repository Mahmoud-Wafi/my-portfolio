import React from 'react';

export const SectionHeading = ({ title, description }: { title: string; description?: string }) => (
	<div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
		<h2 className="max-w-[640px] font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[52px]">{title}</h2>
		{description && <p className="max-w-[420px] text-lg leading-relaxed text-muted">{description}</p>}
	</div>
);
