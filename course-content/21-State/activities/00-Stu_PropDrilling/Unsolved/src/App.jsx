import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import './App.css'

function App() {
	return (
		<div className="main-container">
				<Navbar />
				<Wrapper>
					<Gallery />
				</Wrapper>
				<Footer />
		</div>
	);
}

export default App;