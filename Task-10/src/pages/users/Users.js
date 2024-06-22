

import DataForTable from "../../components/dataTables/DataForTable";
import "./users.scss";
// import {userRows} from "../../data";
import Add from "../../components/add/Add";
import { useEffect, useState } from "react";

let id=1
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
     field:'avatar',headerName:'avatar',width:100,
    renderCell:(params)=>{
     return <img src= {params.row.img || "/noavatar.png"} alt='' />
    }
    },
  
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type:"string"
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type:"string"

    },
    {
      field: "email",
      headerName: 'email',
      type: 'text',
      width: 110,
      editable: true,
      type:"string"

    },
    {
     field: "phone",
     headerName: 'phone',
     type: 'text',
     width: 110,
     editable: true,
     type:"string"

   },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      width: 160,
      editable:true,
      type:"string"

    },
    {
     field: 'verified', headerName: 'Verified', width: 100,type:"boolean"
    }
    
  ];
  
//  
const Users =()=>{


  const [dataUsers,setDataUsers]=useState([])
  const [open,setOpen]= useState(false);
  

async function fetchData(){
  let res =await fetch("http://localhost:9000/users");
  let usersData= await res.json();
  setDataUsers(usersData)
}

  useEffect(()=>{
    fetchData();
  },[dataUsers])




    return(
        <div className="users">
           <div className="info  ">
                <h1>users</h1>
                <button onClick={()=>setOpen(true)}>add new users</button>
            </div>
             <DataForTable slug="users" columns={columns}  rows = {dataUsers} set = {fetchData} />
            {open?<Add set={setOpen} columns={columns} />:null}       
        </div>
    )
}

export default Users
