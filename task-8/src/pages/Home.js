import {useContext, useEffect } from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import DarkMode from "../DarkMode";
import { DataContext } from "../App";
import { useParams } from "react-router-dom";



const Home =(props)=>{

    let {userId}=useParams();

    const data=useContext(DataContext);

    useEffect(()=>{


        // dark & light mode code
       DarkMode();

     
     },[])
    return(
        <>
            <Navbar />
            <div className='row'>
            <div className='col-3 sidebar-holder'>
                <Sidebar/>
            </div>
            <div  className='col-9 content '>
                <Main id={userId} data={data} />
            </div>
            </div>
        </>
    )
}


export default Home;