import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<TechStack />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
