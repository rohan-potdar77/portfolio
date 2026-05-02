import { useEffect, useState } from 'react';
import content from '../assets/content.json';
import './Navbar.css';

const Navbar = () => {
	const { navbar } = content;
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
			<div className='navbar-container container'>
				<a href='#home' className='logo'>
					{navbar.logo}
				</a>

				<div
					className={`menu-icon ${isOpen ? 'open' : ''}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>

				<ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
					{navbar.links.map((link, index) => (
						<li className='nav-item' key={index}>
							<a
								href={link.href}
								className='nav-link'
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
