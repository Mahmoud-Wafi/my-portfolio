import React from 'react';

const items = ['Python', 'Django', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'Redis', 'Celery', 'REST APIs', 'Linux', 'Git'];

/** A slow, continuous strip of the stack. Pauses on hover and stops entirely when motion is reduced. */
export const Marquee = () => (
	<div className="border-y border-white/10 bg-deep/50 py-6">
		<p className="sr-only">Technologies I work with: {items.join(', ')}.</p>
		<div aria-hidden className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
			{[0, 1].map((copy) => (
				<ul key={copy} className="flex shrink-0 items-center">
					{items.map((item) => (
						<li key={`${copy}-${item}`} className="flex items-center">
							<span className="px-8 font-display text-3xl font-semibold tracking-tight text-fog sm:text-5xl">{item}</span>
							<span className="h-2 w-2 rotate-45 bg-lamp" />
						</li>
					))}
				</ul>
			))}
		</div>
	</div>
);
