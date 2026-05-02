import './TechStack.css';
import content from '../assets/content.json';

const TechStack = () => {
	const { techStack } = content;

	return (
		<section id='about' className='tech-stack section-padding'>
			<div className='container'>
				<h2 className='section-title text-center glow-text'>
					<span className='text-gradient'>{techStack.sectionTitle}</span>
				</h2>
				<p className='section-subtitle text-center'>
					{techStack.sectionSubtitle}
				</p>

				<div className='skills-grid'>
					{techStack.skills.map((skill, index) => (
						<div className='skill-card glass' key={index}>
							<div className='skill-header'>
								<h3>{skill.name}</h3>
								<span className='skill-category'>{skill.category}</span>
							</div>
							<div className='skill-bar-container'>
								<div
									className='skill-bar'
									style={{ width: `${skill.level}%` }}
								></div>
							</div>
							<div className='skill-percentage'>{skill.level}%</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
