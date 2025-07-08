import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#0D1117] text-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Modern Web Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Real-time Web Apps',
							icon: '⚡',
							features: ['Socket.io', 'Live notifications', 'WebSocket events'],
						},
						{
							title: 'Serverless Architecture',
							icon: '☁️',
							features: ['AWS Lambda', 'API Gateway', 'Step Functions'],
						},
						{
							title: 'Authentication & Security',
							icon: '🔐',
							features: ['JWT Tokens', 'AWS Cognito', 'Custom OTP via SES'],
						},
						{
							title: 'Responsive Frontends',
							icon: '🎨',
							features: ['ReactJS & Redux', 'SCSS & Bootstrap', 'Component Reusability'],
						},
						{
							title: 'Database Integration',
							icon: '🗄️',
							features: ['MongoDB & MySQL', 'DynamoDB', 'ORMs & Modeling'],
						},
						{
							title: 'DevOps & Deployment',
							icon: '🚀',
							features: ['CI/CD with Git', 'Private NPM packages', 'CloudWatch Logging'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
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
