import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' Component={Products}/>
        <Route path='cart' Component={Cart}/>
      </Routes>
    </div>
  );
}

export default App;
