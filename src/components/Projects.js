import './Projects.css';
import content from '../assets/content.json';

const Projects = () => {
	const { projects } = content;

	return (
		<section id='projects' className='projects section-padding'>
			<div className='container'>
				<h2 className='section-title glow-text text-center'>
					<span className='text-gradient'>{projects.sectionTitle}</span>
				</h2>

				<div className='projects-grid'>
					{projects.projectList.map((project, index) => (
						<div className='project-card glass' key={index}>
							<div className='project-image'>
								<div className='placeholder-image'></div>
								<div className='overlay'>
									<a
										href={project.link}
										className='btn-icon'
										target='_blank'
										rel='noopener noreferrer'
									>
										View
									</a>
								</div>
							</div>
							<div className='project-content'>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className='project-tags'>
									{project.tags.map((tag, tagIndex) => (
										<span key={tagIndex} className='tag'>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
