'use client';

import React, { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

/** Counts from 0 to a value once it mounts. Shows the final number straight away when motion is reduced. */
export const CountUp = ({ to }: { to: number }) => {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			el.textContent = String(to);
			return;
		}
		const controls = animate(0, to, {
			duration: 0.9,
			ease: 'easeOut',
			onUpdate: (value) => {
				el.textContent = String(Math.round(value));
			},
		});
		return () => controls.stop();
	}, [to]);

	return <span ref={ref}>{to}</span>;
};
