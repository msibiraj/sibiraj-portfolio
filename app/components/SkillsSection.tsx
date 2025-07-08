import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-white">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Frontend Development',
							skills: [
								{ name: 'ReactJS & Redux', level: 95 },
								{ name: 'SCSS / CSS / HTML', level: 95 },
								{ name: 'Bootstrap / Material UI', level: 90 },
								{ name: 'Custom Hooks & Lazy Loading', level: 88 },
							],
							icon: '🎨',
							color: 'from-pink-500 to-red-500',
						},
						{
							category: 'Backend & APIs',
							skills: [
								{ name: 'Node.js / Express.js', level: 95 },
								{ name: 'Serverless (Lambda)', level: 85 },
								{ name: 'REST APIs / Middleware / JWT', level: 90 },
								{ name: 'Socket.io & Event-driven Dev', level: 85 },
							],
							icon: '🛠️',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Cloud & Database',
							skills: [
								{ name: 'AWS (Lambda, S3, API GW, etc)', level: 60 },
								{ name: 'MongoDB / Mongoose', level: 90 },
								{ name: 'MySQL / Sequelize', level: 60 },
								{ name: 'DynamoDB / Step Functions', level: 60 },
							],
							icon: '☁️',
							color: 'from-blue-500 to-indigo-600',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold text-white">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1 text-gray-300">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
												style={{ width: `${skill.level}%` }}
											></div>
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
