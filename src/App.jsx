import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Cart from './pages/Cart';
import ViewGame from './pages/ViewGame';
import Checkout from './pages/Checkout';
import { GameProvider } from './context/GameContext';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <GameProvider>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/view-game/:id" element={<ViewGame/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </GameProvider>
  );
}

export default App;
