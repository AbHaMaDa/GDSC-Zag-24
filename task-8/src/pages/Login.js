import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";


const Login = (props)=>{
    const [emailValue,setEmailValue]=useState();
    const [idValue,setidValue]=useState();

    const [passValue,setPassValue]=useState();
    const [emailInput,setEmailInput]=useState();


    



    const data=useContext(DataContext);

    let stringData=JSON.stringify(data)
    window.localStorage.setItem("prev",stringData);
    let prev = window.localStorage.getItem("prev");

    let objData= JSON.parse(prev);
    
   

 useEffect(()=>{
    let emailInput=document.querySelector(".error-email");

    setEmailInput(emailInput);
   
    

 },[])




   

    


    


    return(
        <form action={`/${idValue}`}  className="form  flex" onSubmit={(e)=>{



           
            
           let vaildEmail = false ;
           let  vaildPsss = false ;
            if(objData !==null){

           
           for (let i = 0; i < objData.length; i++) {
            if(objData[i].email===emailValue && objData[i].pass===passValue){
              
                vaildEmail =true
                vaildPsss = true 
                setidValue( objData[i].id)

                break;
            } }
          
        }
            if(vaildEmail !== true || vaildPsss !== true ){
                
                    emailInput.className="error d-block"
                    

                

                e.preventDefault();

            }



            
            
            
            
        }} >
            <div className="form-group">
                <input className="d-none" value={idValue}/>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                onChange={(e)=>setEmailValue(e.target.value)}
                />
                 <small className=" error error-email d-none" > incorrect email or password  </small>  
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                onChange={(e)=>setPassValue(e.target.value)}
                />


            </div>
       
            <button type="submit" className="btn btn-primary">Login</button>

            <Link to={"/signup"}>sign up ?</Link>


        </form>
    )
}


export default Login;