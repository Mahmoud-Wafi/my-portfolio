import React from 'react';

const items = ['Python', 'Django', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Celery', 'REST APIs'];

/** A continuous strip of the stack. Pauses on hover and stops when motion is reduced. */
export const Marquee = () => (
	<section aria-label="Technologies" className="overflow-hidden bg-forest py-5 sm:py-6">
		<p className="sr-only">Technologies I work with: {items.join(', ')}.</p>
		<div aria-hidden className="marquee flex w-max items-center">
			{[0, 1].map((copy) => (
				<ul key={copy} className="flex shrink-0 items-center">
					{items.map((item) => (
						<li key={`${copy}-${item}`} className="flex items-center gap-5 pr-5 sm:gap-7 sm:pr-7">
							<span className="whitespace-nowrap font-display text-2xl font-extrabold tracking-tight text-[#E8F0E2] sm:text-3xl">{item}</span>
							<span className="h-2.5 w-2.5 rotate-45 bg-lime" />
						</li>
					))}
				</ul>
			))}
		</div>
	</section>
);
