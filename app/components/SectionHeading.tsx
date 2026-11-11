'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Section title. The lamp beam passes over the letters once when it scrolls into view. */
export const SectionHeading = ({ title, description }: { title: string; description: string }) => {
	const reduce = useReducedMotion();

	return (
		<div className="mb-14 max-w-3xl sm:mb-20">
			<motion.h2
				className="beam-text pb-1 font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
				initial={reduce ? false : { backgroundPositionX: '100%' }}
				whileInView={{ backgroundPositionX: '0%' }}
				viewport={{ once: true, margin: '-15% 0px' }}
				transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
			>
				{title}
			</motion.h2>
			<p className="mt-5 max-w-xl text-lg leading-relaxed text-fog sm:text-xl">{description}</p>
		</div>
	);
};
