import { useState } from "react";
import { Navigate, json, useNavigate } from "react-router-dom";

const Add = ()=>{
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);

    let Navigate = useNavigate()

    async function sendData (){
        let res = await fetch(`http://localhost:9000/products/`,{
            method: "POST",
            body: JSON.stringify({
                title:title,
                price:price,
                description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                category: "electronics",
                image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                rating: {
                  rate: "3.3",
                  count:" 203"
        }})
        })
        let data= await res.json();
      
        Navigate("/products");
        
    }
  


    return(
        <>
        <h1>Adding Page</h1>
        <form className="flex" onSubmit={(e)=>{
            e.preventDefault();
            
         
            sendData();

        }}>

            <div className="form-group">
                <label className="mb-2" htmlFor="productTitle">Title</label>
                <input type="text" className="form-control" id="productTitle" aria-describedby="Product Title" placeholder="Enter Title"
                onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="mb-2" htmlFor="productPrice">Price</label>
                <input type="number" className="form-control" id="productPrice" aria-describedby="Product Price" placeholder="Enter Price"
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
         
           
         
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        </>
    )
}

export default Add ;