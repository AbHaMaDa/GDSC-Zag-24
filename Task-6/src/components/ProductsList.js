import { useEffect, useState } from "react"
import Product from "./Product"
import "./ProductList.css"


function ProductsList (){
    const [data,setData]=useState([])
    const [i,setI]=useState("all")
    console.log(i)

//  function getData (){
//       fetch('https://fakestoreapi.com/products').then(
//         (res)=>res.json()).then(
//             (data)=>console.log(data)
//         )
//     .catch(
//         (rej)=>console.log(rej)
//     )

// }

async function getData(){
    let res= await fetch('https://fakestoreapi.com/products');
    let data= await res.json();
    setData(data);
    console.log(data)
}




useEffect(()=>{
    getData()

},[])

    return(
        <>
        



            <h2 className="text-center p-3">Our products</h2>
            <div className='buttons'>
                    <button  className='all' onClick={()=>{setI("all")}}>All</button>
                    <button className='men' onClick={()=>{setI("men's clothing")}}>Men</button>
                    <button  className='all' onClick={()=>{setI("jewelery")}}>Jewelery</button>
                    <button className='electronics' onClick={()=>{setI("electronics")}}>Electronics</button>
                    <button className='women'  onClick={()=>{setI("women's clothing")}}>Women</button>
                </div>
            <div className="container">
                <div className="row">

                    {data.map((product)=>{
                        return (
                            <div className="col-3" key={product.id}>
                                
                                {
                             i=="all"? <Product Product= {product}/>:
                             i=="men's clothing"&&product.category=="men's clothing"?<Product Product= {product}/>:
                             i=="women's clothing"&&product.category=="women's clothing"?<Product Product= {product}/>:
                             i=="electronics"&&product.category=="electronics"?<Product Product= {product}/>:
                             i=="jewelery"&&product.category=="jewelery"?<Product Product= {product}/>:null



                            }
                               
                            </div>
                        )
                    })}  
                </div>
            </div>
            
            
        </>
    )
}


export default ProductsList