import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login"

import { createContext, useEffect, useState } from 'react';
import Sign from './pages/Sign';
import Host from './pages/Host';


 export const DataContext =createContext();



function App() {

  let dataBase = window.localStorage.getItem("database")


let prev = JSON.parse(dataBase);





const [data,setData]=useState(prev)
 



// body app component

  return (
  <DataContext.Provider value={data}>

        

  <Routes>
    <Route path='/' Component={Host}/>
    <Route path='/:userId' Component={Home} />
    <Route path='/login' Component={Login}  />
    <Route path='/signup' Component={Sign} />
  </Routes>
  </DataContext.Provider>
  );
}




export default App;
