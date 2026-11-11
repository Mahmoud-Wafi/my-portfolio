'use client';

import React, { useRef } from 'react';

/** Tilts its child toward the mouse and exposes the pointer position as --mx / --my for the spotlight glow. */
export const Tilt = ({ children, className = '', max = 5 }: { children: React.ReactNode; className?: string; max?: number }) => {
	const ref = useRef<HTMLDivElement>(null);

	const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el || event.pointerType !== 'mouse') return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const rect = el.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;
		el.style.setProperty('--mx', `${px * 100}%`);
		el.style.setProperty('--my', `${py * 100}%`);
		el.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
	};

	const onLeave = () => {
		const el = ref.current;
		if (el) el.style.transform = '';
	};

	return (
		<div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`transition-transform duration-200 ease-out will-change-transform ${className}`}>
			{children}
		</div>
	);
};
