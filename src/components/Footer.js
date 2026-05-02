import './Footer.css';
import content from '../assets/content.json';

const Footer = () => {
	const { footer } = content;

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content'>
					<p className='footer-text'>
						&copy; {new Date().getFullYear()} {footer.text}
					</p>
					<p className='footer-credit'>{footer.credit}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
