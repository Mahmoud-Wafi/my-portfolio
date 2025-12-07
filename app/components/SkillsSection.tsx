import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-20 sm:py-32 px-4 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16 sm:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-gray-300 bg-clip-text text-transparent">Technical Expertise</h2>
					<p className="text-gray-400 text-lg">Skills and proficiencies I've developed</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Frontend Development',
							skills: [
								{ name: 'React', level: 70 },
								{ name: 'JavaScript', level: 60 },
									{ name: 'HTML', level: 90 },
								{ name: 'Modern CSS', level: 90 },
								{ name: 'Web Animation', level: 75 },
							],
							icon: '🎨',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Backend & APIs',
							skills: [
								{ name: 'Django', level: 90 },
								{ name: 'RESTful APIs', level: 85 },
								{ name: 'Postgres', level: 85 },
									{ name: 'MongoDB', level: 70 },
								{ name: 'Database Design', level: 88 },
								{ name: 'Postman', level: 85 },
							],
							icon: '⚡',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Performance & DevOps',
							skills: [
								{ name: 'Ubuntu', level: 88 },
								{ name: 'Linux', level: 80 },
								{ name: 'Web Performance', level: 92 },
								{ name: 'CI/CD', level: 88 },
								{ name: 'Git', level: 82 },
								{name:'Github',level:90},
							],
							icon: '🚀',
							color: 'from-purple-500 to-purple-700',
						},
					].map((category) => (
						<div key={category.category} className="group bg-gradient-to-br from-[#21262D] to-[#161B22] rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
							<div className="flex items-center gap-4 mb-8">
								<span className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
								<h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{category.category}</h3>
							</div>
							<div className="space-y-5">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-2.5">
											<span className="font-medium text-gray-300">{skill.name}</span>
											<span className="text-blue-400 font-semibold">{skill.level}%</span>
										</div>
										<div className="h-2.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
