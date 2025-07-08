import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Waymore',
							description: 'A modern, contact-based communication platform with real-time notifications and secure multi-role access.',
							metrics: {
								performance: 90,
								accessibility: 95,
								seo: 93,
							},
							techDetails: [
								'Role-based JWT Authentication Middleware',
								'Google Contacts Import via OAuth',
								'Real-time Notifications using Socket.io',
								'Node.js REST API with Express',
								'MySQL & MongoDB hybrid data storage',
							],
							image: '/code.jpg',
						},
						{
							title: 'Trames',
							description: 'AWS-native logistics & tracking system built with CDK, Cognito, Lambda, SQS and SES.',
							metrics: {
								performance: 88,
								accessibility: 92,
								seo: 90,
							},
							techDetails: [
								'Serverless Architecture using AWS Lambda & CDK',
								'Step Functions for background automation',
								'Cognito + SES for custom OTP flows',
								'SQS queues for message processing',
								'CI/CD with Git + Private NPM Packages',
							],
							image: '/code.jpg',
						},
						{
							title: 'Camu',
							description: 'An education portal modernized by migrating AngularJS to React with optimized performance.',
							metrics: {
								performance: 94,
								accessibility: 96,
								seo: 95,
							},
							techDetails: [
								'Full AngularJS to React Migration',
								'Redux for robust state management',
								'Custom React Hooks for intervals/timers',
								'Lazy Loading & Optimized Routing',
								'Responsive UI using SCSS & Bootstrap',
							],
							image: '/code.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold text-white">Performance Metrics</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-2xl font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
