import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ()=>{
    let {productId} = useParams();
    const [productData,setProductData]=useState([]);



    async function getProductData (){
        let res = await fetch(`http://localhost:9000/products/?id=${productId}`)
        let productData= await res.json();

        setProductData(productData);
    }
  useEffect(()=>{
    getProductData();
  },[])

    return(
        productData.map((e)=>{
            return(
                <div className="d-flex flex-column align-items-center" key ={e.id}>
                    <h1> category: {e.category}</h1>
                    <h3> id: {e.id}</h3>
                    <h1>title: {e.title}</h1>
                    <img className="col-5" src={e.image} />
                    <p>description:{e.description}</p>
                    <span> cost: {e.price} $</span>
                    <span> its rate:{e.rating.rate} </span>
                    <span> the number of pieces {e.rating.count} </span>



                    


                </div>
                
            )
        })
    )
}


export default ProductDetails ;