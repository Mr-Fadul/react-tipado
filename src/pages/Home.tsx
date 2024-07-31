import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/buttons/button';
import './../App.css';


function Home() {
	const navigate = useNavigate();
	return (
		<div className="App">
			<header className="App-header">
				HOME
				<Button onClick={() => navigate("/contato")}>Contato</Button>
			</header>
		</div>
	);
}

export default Home;

