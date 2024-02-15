 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import About from './components/About';
import ProductDetalis from "./components/ProductDetalis"

function App() {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Slider/>
            <ProductsList/>
          </>

          }/>
          <Route path='about'element={<About/>}/>
          <Route path='product/:productId' element={<ProductDetalis/>}/>

      </Routes>
     
   </>
  );
}

export default App;
