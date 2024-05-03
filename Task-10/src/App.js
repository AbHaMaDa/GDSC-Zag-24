import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import "./styles/global.scss";
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {



  


  return (
    <div className="App">
      <div className='main'>
        <Navbar/>
        <div className='container'>
          <div className='menuContainer'>
            <Menu/>
          </div>
          <div className='contentContainer'>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/login' Component={Login} />

              <Route path='/users' Component={Users} />

              <Route path='/products' Component={Products} />
            </Routes>
          </div>

        </div>
        <Footer/>

      </div>
     
    </div>
  );
}

export default App;
