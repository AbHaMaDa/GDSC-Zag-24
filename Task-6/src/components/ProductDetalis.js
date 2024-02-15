import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import "./ProductDetalis.css"

function ProductDetalis(){
    const [data,setData]=useState([])
    const params= useParams();
    console.log(params);
console.log(data)
    async function getData(){
        let res= await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        let data= await res.json();
        setData(data);
        console.log(data)
    }
    useEffect(()=>{
        getData()
    
    },[])
   
    return(
        <div className="wrap">
        <img className="card-img-top" src={data.image} alt={data.title}/>
        <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text1">{data.description}</p>
            <span>{data.price}</span>

        </div>
    </div>
    )
}
export default ProductDetalis;