import './Hero.css';
import content from '../assets/content.json';

const Hero = () => {
	const { hero } = content;
	const developer = hero.codeCard.developer;

	return (
		<section id='home' className='hero'>
			<div className='hero-container container'>
				<div className='hero-content'>
					<p className='hero-subtitle'>{hero.subtitle}</p>
					<h1 className='hero-title text-gradient'>{hero.title}</h1>
					<h2 className='hero-role'>
						{hero.rolePrefix}
						<span className='highlight'>{hero.roleHighlight}</span>
						{hero.roleSuffix}
					</h2>
					<p className='hero-desc'>{hero.description}</p>
					<div className='hero-buttons'>
						{hero.buttons.map((button, index) => (
							<a
								key={index}
								href={button.href}
								className={`btn ${button.variant === 'outline' ? 'btn-outline' : 'btn btn-primary'}`}
							>
								{button.label}
							</a>
						))}
					</div>
				</div>
				<div className='hero-visual'>
					<div className='glowing-orb'></div>
					<div className='code-card glass'>
						<div className='code-header'>
							<span className='dot red'></span>
							<span className='dot yellow'></span>
							<span className='dot green'></span>
						</div>
						<div className='code-content'>
							<pre>
								<code>
									<span className='keyword'>const</span>{' '}
									<span className='variable'>developer</span> = {'{'}
									<span className='key'>name</span>:{' '}
									<span className='string'>"{developer.name}"</span>,
									<span className='key'>skills</span>: [
									{developer.skills.map((skill, skillIndex) => (
										<span key={skillIndex} className='string'>
											"{skill}"
											{skillIndex < developer.skills.length - 1
												? ','
												: ''}
										</span>
									))}
									],
									<span className='key'>hardWorker</span>:{' '}
									<span className='boolean'>
										{developer.hardWorker ? 'true' : 'false'}
									</span>
									{'};'}
								</code>
							</pre>
						</div>
					</div>
				</div>
			</div>
			<div className='scroll-down'>
				<div className='mouse'>
					<div className='wheel'></div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
