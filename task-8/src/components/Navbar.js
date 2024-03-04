import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



const Navbar =()=>{


const logingOut=()=>{
    Swal.fire({
        title:`Are U Sure You Wanna logOut  ?`,
        showCancelButton: true
    }).then((data)=>{ // data == isConfirmed , isDEnied , AND dismiss
        if(data.isConfirmed==true){
            window.location="/login"    

        }
    })
}





    return(
        <div className="nav flex ">
            <h1>LOGO</h1>
            <div className="switch flex">
                <button className="btn-dark">Dark</button>
                <button className="btn-light" >Light</button>
            </div>
            <button   className="logout" onClick={()=>logingOut()}>LogOut</button>
        </div>
    )
}

export default Navbar;