import { useState } from 'react';
import './Contact.css';
import content from '../assets/content.json';

const Contact = () => {
	const { contact } = content;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState(null);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();
		setSubmitting(true);
		setStatus(null);

		const web3formsKey = process.env.REACT_APP_WEB_3_FORM_API_KEY;
		if (!web3formsKey) {
			setStatus({
				type: 'error',
				message: 'Missing Web3Forms access key. Check your .env file.',
			});
			setSubmitting(false);
			return;
		}

		const payload = new FormData();
		payload.append('access_key', web3formsKey);
		payload.append('subject', 'Portfolio website contact form');
		payload.append('name', name);
		payload.append('email', email);
		payload.append('message', message);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: payload,
			});

			const data = await response.json();

			if (response.ok && data.success) {
				setStatus({
					type: 'success',
					message: 'Message sent successfully.',
				});
				setName('');
				setEmail('');
				setMessage('');
			} else {
				setStatus({
					type: 'error',
					message:
						data.message ||
						'Unable to send the message. Please try again later.',
				});
			}
		} catch (error) {
			setStatus({
				type: 'error',
				message:
					'Unable to send the message. Please check your connection and try again.',
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section id='contact' className='contact section-padding'>
			<div className='container'>
				<h2 className='section-title glow-text text-center'>
					<span className='text-gradient'>{contact.sectionTitle}</span>
				</h2>

				<div className='contact-container glass'>
					<div className='contact-info'>
						<h3>{contact.headline}</h3>
						<p>{contact.description}</p>

						<div className='contact-details'>
							<div className='contact-item'>
								<span className='icon'>📧</span>
								<span>{contact.email}</span>
							</div>
							<div className='contact-item'>
								<span className='icon'>📍</span>
								<span>{contact.location}</span>
							</div>
						</div>

						<div className='social-links'>
							{contact.socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className='social-btn'
									target='_blank'
									rel='noopener noreferrer'
								>
									{social.label}
								</a>
							))}
						</div>
					</div>

					<form className='contact-form' onSubmit={handleSubmit}>
						<div className='form-group'>
							<input
								type='text'
								name='name'
								value={name}
								onChange={e => setName(e.target.value)}
								placeholder={contact.form.namePlaceholder}
								required
							/>
						</div>
						<div className='form-group'>
							<input
								type='email'
								name='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder={contact.form.emailPlaceholder}
								required
							/>
						</div>
						<div className='form-group'>
							<textarea
								name='message'
								value={message}
								onChange={e => setMessage(e.target.value)}
								placeholder={contact.form.messagePlaceholder}
								rows='5'
								required
							></textarea>
						</div>

						{status && (
							<p className={`form-status ${status.type}`}>
								{status.message}
							</p>
						)}

						<button
							type='submit'
							className='btn btn-primary'
							disabled={submitting}
						>
							{submitting ? 'Sending...' : contact.form.buttonText}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
