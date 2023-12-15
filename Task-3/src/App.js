
import './App.css';
import Navbar from './components/Navbar';

import { useState } from 'react';

function App() {
 
  const [days,setdays]=useState("");
  const [months,setmonths]=useState("");
  const [years,setyears]=useState("");

  return (
    <div className="App">
      <Navbar  days={days} months={months} years={years} />
    </div>
  );
}

export default App;
