import { useParams } from "react-router-dom";
import { Navigate, json, useNavigate } from "react-router-dom";
import {useEffect,useState} from "react";
import React from "react";



const EditProduct =()=>{
    let {productId} = useParams();
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [restData,setRestData]= useState({
        description:"",
        category:"",
        image:"",
        rating:{
            rate:"",
            count:""
        }        
    })
    let Navigate = useNavigate()

    async function getProductData(){
        let res = await fetch(`http://localhost:9000/products/${productId}`);
        let productData = await res.json();
        
       
      setTitle(productData.title);
      setPrice(productData.price);
      setRestData({
        description:productData.description,
        category:productData.category,
        image:productData.image,
        rating:{
            rate:productData.rating.rate,
            count:productData.rating.count
        } 
      })
      

    }


    async function sendData (){
        let res = await fetch(`http://localhost:9000/products/${productId}`,{
            method: "PUT",
            body: JSON.stringify({
                title:title,
                price:price,
                description:restData.description ,
                category:restData.category,
                image:restData.image ,
                rating: {
                  rate: restData.rating.rate,
                  count:restData.rating.count
        }
        })
        })
        let data= await res.json();
    
      
        Navigate("/products");
        
    }
  




   


    useEffect(()=>{
        getProductData();
        

    },[])










    return(
        <>
        <h1>Editing Page</h1>

        <form className="flex" onSubmit={(e)=>{
            e.preventDefault();


           sendData();
            
         
           

        }}>

            <div className="form-group">
                <label className="mb-2" htmlFor="productTitle">Title</label >
                <input type="text" className="form-control" id="productTitle" aria-describedby="Product Title" placeholder="Enter Title"
                defaultValue={`${title}`}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="mb-2" htmlFor="productPrice">Price</label>
                <input type="number" className="form-control" id="productPrice" aria-describedby="Product Price" placeholder="Enter Price"
                defaultValue={`${price}`}

                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
         
           
         
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        </>
    )
}


export default EditProduct