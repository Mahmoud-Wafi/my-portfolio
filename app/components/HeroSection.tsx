'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { menuProjects, projects } from '../data/projects';

const needs = ['a digital menu', 'an API', 'a web app'];

const chipBase = 'flex items-center gap-2.5 rounded-2xl px-4 py-3 font-display text-base font-bold shadow-[0_24px_40px_-18px_rgba(14,27,20,0.5)]';

export const HeroSection = () => {
	const [pointer, setPointer] = useState({ x: 0.5, y: 0.5, hover: false });
	const depth = 14;
	const rotY = (pointer.x - 0.5) * 2 * depth;
	const rotX = -(pointer.y - 0.5) * 2 * depth * 0.7;

	const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
		if (event.pointerType !== 'mouse') return;
		const rect = event.currentTarget.getBoundingClientRect();
		setPointer({
			x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
			y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
			hover: true,
		});
	};

	const glare = pointer.hover
		? `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255,255,255,0.38), rgba(255,255,255,0) 55%)`
		: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%)';

	const stats = [
		{ value: projects.length + menuProjects.length, label: 'projects built' },
		{ value: menuProjects.length, label: 'live restaurant menus' },
		{ value: 2, label: 'dashboards per menu' },
	];

	return (
		<section id="top" className="dots relative">
			<div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-12 px-5 pb-24 pt-28 sm:px-10 lg:pt-32">
				<div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
					<p className="rise inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-muted sm:text-[15px]">
						<span aria-hidden className="h-2 w-2 rounded-full bg-leaf" />
						Software engineer in Alexandria, Egypt
					</p>
					<h1 className="rise d1 font-display text-[2.9rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-7xl lg:text-[80px]">Backend systems and websites, built to last.</h1>
					<p className="rise d2 max-w-[540px] text-lg leading-relaxed text-muted sm:text-xl">I&apos;m Mahmoud Wafi. I build APIs, dashboards, and digital menus for businesses, using Python, Django, FastAPI, and React.</p>

					<div className="rise d3 flex max-w-[600px] flex-wrap items-center gap-2 rounded-[2rem] border border-line bg-paper p-2 pl-5 shadow-[0_18px_40px_-22px_rgba(14,27,20,0.35)] sm:rounded-full sm:pl-6">
						<span className="mr-1 text-base font-semibold text-muted">I need</span>
						{needs.map((need) => (
							<a key={need} href="#work" className="rounded-full bg-ground px-4 py-3 text-[15px] font-medium transition-all hover:-translate-y-px hover:bg-mint">
								{need}
							</a>
						))}
						<a href="#contact" className="btn ml-auto rounded-full bg-lime px-6 py-3.5 text-base font-bold text-ink">
							Start a project
						</a>
					</div>

					<ul className="rise d4 flex flex-wrap gap-x-8 gap-y-4 text-base text-muted">
						{stats.map((stat) => (
							<li key={stat.label}>
								<strong className="block font-display text-[28px] font-extrabold leading-tight text-ink">{stat.value}</strong>
								{stat.label}
							</li>
						))}
					</ul>
				</div>

				{/* 3D portrait: tilts toward the mouse, sways on its own otherwise. */}
				<div className="flex min-w-0 flex-[1_1_360px] justify-center py-6">
					<div onPointerMove={onMove} onPointerLeave={() => setPointer({ x: 0.5, y: 0.5, hover: false })} className="w-full max-w-[460px] px-9 py-8 sm:px-14 sm:py-10" style={{ perspective: '1400px' }}>
						<div className="sway relative aspect-[440/540] w-full" style={{ transformStyle: 'preserve-3d', animationPlayState: pointer.hover ? 'paused' : 'running' }}>
							<div
								className="absolute inset-0 transition-transform duration-200 ease-out"
								style={{ transformStyle: 'preserve-3d', transform: pointer.hover ? `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)` : 'rotateX(0deg) rotateY(0deg)' }}
							>
								<div aria-hidden className="absolute inset-[26px_-30px_-30px_30px] rounded-[36px] bg-lime" style={{ transform: 'translateZ(-80px)' }} />
								<div aria-hidden className="absolute inset-[12px_-14px_-14px_14px] rounded-[36px] border-2 border-ink" style={{ transform: 'translateZ(-40px)' }} />

								<div className="absolute inset-0 overflow-hidden rounded-[36px] bg-mint shadow-[0_50px_70px_-30px_rgba(14,27,20,0.55)]" style={{ transform: 'translateZ(10px)' }}>
									<Image src="/profile-photo.webp" alt="Portrait of Mahmoud Wafi" fill priority sizes="(max-width: 640px) 80vw, 460px" className="object-cover" />
									<div aria-hidden className="absolute inset-0" style={{ background: glare }} />
								</div>

								<div aria-hidden className="absolute left-[-14%] top-[12%]" style={{ transform: 'translateZ(120px)' }}>
									<div className={`float ${chipBase} bg-paper`}>
										<span className="h-2.5 w-2.5 rounded-full bg-leaf" />
										Django
									</div>
								</div>
								<div aria-hidden className="absolute right-[-16%] top-[34%]" style={{ transform: 'translateZ(150px)' }}>
									<div className={`float-b ${chipBase} bg-ink text-ground`}>
										<span className="h-2.5 w-2.5 rounded-full bg-lime" />
										FastAPI
									</div>
								</div>
								<div aria-hidden className="absolute bottom-[20%] left-[-10%]" style={{ transform: 'translateZ(100px)' }}>
									<div className={`float-c ${chipBase} bg-paper`}>
										<span className="h-2.5 w-2.5 rounded-full bg-leaf" />
										PostgreSQL
									</div>
								</div>

								<div className="absolute bottom-[-7%] right-[-8%]" style={{ transform: 'translateZ(170px)' }}>
									<div className="relative h-[100px] w-[100px] rounded-full bg-lime shadow-[0_24px_40px_-18px_rgba(14,27,20,0.55)] sm:h-[120px] sm:w-[120px]">
										<div className="spin-slow absolute inset-0">
											<svg viewBox="0 0 120 120" className="h-full w-full" role="img" aria-label="Available for new projects">
												<defs>
													<path id="ring-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
												</defs>
												<text fontSize="11.5" fontWeight="700" letterSpacing="2.8" fill="#0E1B14" fontFamily="Manrope Variable, sans-serif">
													<textPath href="#ring-path">available for new projects • </textPath>
												</text>
											</svg>
										</div>
										<FaArrowUpRightFromSquare aria-hidden className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
