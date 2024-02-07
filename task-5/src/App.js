import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [adviceId,setadviceId]=useState("");
const [advice,setadvice]=useState("");
const [counter,setcounter]=useState("")





useEffect(()=>{
fetch("https://api.adviceslip.com/advice")
.then((response)=>response.json())
.then((data)=>{
  setadviceId(data.slip.id)
  setadvice(data.slip.advice)

});


},[counter])



  return (

    <div className='adviseCard flex'>
      <h4 className='title '>Advice   #{adviceId}</h4>
      <p className='text'>{advice}</p>
      <img className='pattern' src='advice-generator-app-main/images/pattern-divider-desktop.svg'/>

      <button className='hold flex ' onClick={()=>setcounter(counter + 1)}>
      <img className='dice' src='advice-generator-app-main/images/icon-dice.svg'/>
      </button>

  

    </div>
  );
}

export default App;
