import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [advice,setadvice]=useState("");
 const [counter,setCounter]=useState("");


// const getAdvise =()=>{
   
// }


 async function getData () {
  let response= await fetch("https://api.adviceslip.com/advice");
  let data= (await response.json())
  setadvice(data.slip);
 }

 useEffect(()=>{
  getData();

  //    fetch("https://api.adviceslip.com/advice")
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //     setadvice(data.slip);

  // });

},[counter])




  return (

    <div className='adviseCard flex'>
      <h4 className='title '>Advice   #{advice.id}</h4>
      <p className='text'>{advice.advice}</p>
      <img className='pattern' src='advice-generator-app-main/images/pattern-divider-desktop.svg'/>

      <button className='hold flex 'onClick={()=>setCounter(counter + 1)}>
      <img className='dice' src='advice-generator-app-main/images/icon-dice.svg'/>
      </button>

    </div>
  );
}

export default App;
