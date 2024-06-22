import { useState } from "react";
import "./add.scss"




async function postedData(){
    let res = await fetch("http://localhost:9000/users",{
        method:"POST",
        body:JSON.stringify({
            id: "111",
            img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
            lastName: "kama",
            firstName: "panda",
            emai: "comhuhmit@gmail.com",
            phone: "123 456 789",
            createdAt: "01.02.2023",
            verified: true
        })
    }
    )
}




const Add =(props)=>{




    return(
        <div className="add">
            <div className="model">
                <span className="close" onClick={()=>props.set(false)}>x</span>
                <h1>add new  user</h1>
                <form  onSubmit={(e)=>{
                      e.preventDefault();
                      postedData();
                      props.set(false);
                }}>
                    {props.columns.filter((e)=>{
                       return e.field !=="id" && e.field !=="avatar"
                    }).map((e)=>{
                        return(
                            <div className="item" key={e.field}>
                                <label htmlFor={e.field}>{e.headerName}</label>
                                <input type={e.type} placeholder={e.field}  />
                            </div>
                        )
                    })}
                    <input type="submit" value="send" />
                </form>
            </div>
        </div>
    )
}

export default Add;



