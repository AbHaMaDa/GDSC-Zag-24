import { useState } from "react";







const Sign =()=>{
    const[email,setEmail]=useState();
    const[pass,setPass]=useState();

    let data=[];

    let dataBase= window.localStorage.getItem("database");

    if(dataBase===null){
        window.localStorage.setItem("database","[]")
    }
   
    let  objData=JSON.parse(dataBase);

    let dataForm =data.concat(objData);
    let id=dataForm.length+1;
   

   


 


    



 function updatedData(){
    
    dataForm.push({id:id++,email:email,pass:pass});

    let dataString=JSON.stringify(dataForm);

    window.localStorage.setItem("database",dataString)

 }



    return(
        <form action={`${id}`} className="form " onSubmit={(e)=>{
            


            updatedData();

            
            console.log(dataBase)


        }}>
            <div className="mb-2 form-row">
                <div className="mb-2 col">
                <input required type="text" className="mb-2 form-control" placeholder="First name"/>
                </div>
                <div className="mb-2 col">
                <input required type="text" className="mb-2 form-control" placeholder="Last name"/>
                </div>
            </div>
            
            <div className="mb-2 form-row">
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input required type="email" className="mb-2 form-control" id="inputEmail4" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                <div className="mb-2 form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input required type="password" className="mb-2 form-control" id="inputPassword4" placeholder="Password"
                onChange={(e)=>setPass(e.target.value)}
                />
                </div>
            </div>
            <div className="mb-2 form-group">
                <label htmlFor="inputAddress">Address</label>
                <input required type="text" className="mb-2 form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
          
           
          
            <button type="submit" className="mb-2 btn btn-primary">Sign in</button>
        </form>
    )
}


export default Sign