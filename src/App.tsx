import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contato from './pages/Contato';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/contato" Component={Contato} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
