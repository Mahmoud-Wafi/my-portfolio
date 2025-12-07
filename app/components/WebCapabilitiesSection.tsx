import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-20 sm:py-32 px-4 bg-gradient-to-b from-[#161B22] to-[#0D1117]">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16 sm:mb-20">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-gray-300 bg-clip-text text-transparent">Modern Web Capabilities</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">Advanced technologies and features I specialize in</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{[
						{
							title: 'Backend Development',
							icon: '🛠️',
							features: ['Django Framework', 'RESTful APIs', 'Database Design', 'Async Processing'],
						},
						{
							title: 'Database Management',
							icon: '🗄️',
							features: ['PostgreSQL', 'MongoDB', 'Query Optimization', 'Data Modeling'],
						},
						{
							title: 'API Development',
							icon: '🔌',
							features: ['REST APIs', 'JWT Auth', 'Request Validation', 'Error Handling'],
						},
						{
							title: 'DevOps & Deployment',
							icon: '⚙️',
							features: ['Docker', 'Linux/Ubuntu', 'CI/CD', 'Performance Optimization'],
						},
						{
							title: 'Code Quality',
							icon: '✨',
							features: ['Clean Architecture', 'Testing', 'Documentation', 'Best Practices'],
						},
						{
							title: 'Security',
							icon: '🔒',
							features: ['Authentication', 'Authorization', 'Encryption', 'Security Audits'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-gradient-to-br from-[#21262D] to-[#161B22] p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
							<div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{category.title}</h3>
							<ul className="space-y-3">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-200 transition-colors flex items-start gap-2">
										<span className="text-blue-400 mt-1">›</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
