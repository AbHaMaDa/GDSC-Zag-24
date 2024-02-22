import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from './Pages/Products';
import Add from './Pages/Add';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from "./Pages/EditProduct"
import Categories from "./Pages/Categories"





function App() {
  return (
    <>
       <Navbar />
       <div className='row'>
        <div className='col-2 sidebar-holder'>
         <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/about' Component={About}/>
            <Route path='/products' Component={Products}/>
            <Route path='/products/add' Component={Add}/>
            <Route path='/products/:productId' Component={ProductDetails}/>
            <Route path='/products/edit/:productId' element={<EditProduct/>}/>
            <Route path="/products/categories" Component={Categories} />



          </Routes>
        </div>

       </div>
    </>
 
  );
}

export default App;
