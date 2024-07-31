import { useNavigate } from 'react-router-dom';
import './../App.css';

function Contato() {
	const navigate = useNavigate();
	return (
		<div className="App">
			<header className="App-header">
				Contato
				<button onClick={() => navigate("/")}>
					Ir para Home
				</button>
			</header>
		</div>
	);
}

export default Contato;
