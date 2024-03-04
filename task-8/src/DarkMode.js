


const DarkMode =()=>{
    let btnLight = document.querySelector(".btn-light");
  let btnDark = document.querySelector(".btn-dark");
  let nav = document.querySelector(".nav");
  let content=document.querySelector(".content");
  let darkMode = window.localStorage.getItem("Dark");
 

 // fun that on darkMode
const turningOn =()=>{
  nav.classList.add("dark-nav");
  content.classList.add("dark-content")
  window.localStorage.setItem("Dark","on")
}
// fun that off darkMode
const turningOff =()=>{
  nav.classList.remove("dark-nav");
  content.classList.remove("dark-content")
  window.localStorage.setItem("Dark","off")
}
 // for keep changings save
if(darkMode === "on"){
  turningOn();
}
// btn-dark event
  btnDark.addEventListener("click",()=>{

    darkMode = window.localStorage.getItem("Dark")
  
    if(darkMode !== "on" ){
    turningOn();
  }
  })
// btn-light event
  btnLight.addEventListener("click",()=>{
    darkMode = window.localStorage.getItem("Dark")

    if(darkMode !== "off" ){
    turningOff();
   
  }

  

})
}

export default DarkMode ;