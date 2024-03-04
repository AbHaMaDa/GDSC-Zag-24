import { useEffect, useState } from "react";


const Main =(props)=>{

    const [user,setUser]=useState();

  

useEffect(()=>{
    for (let i = 0; i < props.data.length; i++) {
        if(props.id == props.data[i].id){
            setUser(props.data[i].email);
            break;
        }
    }



},[])
   

    return(
        <h1>Welcome {user}  in the Home page</h1>
    )
}
export default Main;