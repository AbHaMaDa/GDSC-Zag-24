import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = ()=>{
    const [products,setProducts] = useState([])

 async   function getData (){
     let res = await fetch("http://localhost:9000/products");
     let products = await res.json() ;

     setProducts(products);
    }

    let id = 1
    async function deleteProduct(deletedproduct){
        Swal.fire({
            title:`Are U Sure You Wanna Delete : ${deletedproduct.title} ?`,
            showCancelButton: true
        }).then((data)=>{ // data == isConfirmed , isDEnied , AND dismiss
            if(data.isConfirmed==true){

                fetch(`http://localhost:9000/products/${deletedproduct.id}`,{
                method: "DELETE"
                }).then(
                    (res)=>res.json()
                ).then(()=>{
                    getData();
                })
                
            }
        })

        
        
    }

  useEffect(()=>{
    getData();
  },[])

    return(
        <>
            <h1>Products Page</h1>
            <Link to="/products/add" className="btn btn-success m-2">Add New Product</Link>
            <table className="table table-striped ">
                <thead className=" table-dark ">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Operations</th>


                    </tr>
                </thead>
                <tbody>
                    {products.map((e)=>{
                        return(
                            <tr key={e.id}>
                                <th scope="row" className="pt-3">{id++}</th>
                                <td className="pt-3" >{e.title}</td>
                                <td className="pt-3" >{e.price} $</td>
                                <td className="pt-3" >{e.Category}</td>
                                <td className="flex">
                                    <button className="btn btn-danger " onClick={()=>deleteProduct(e)}>Delete</button>
                                    <Link to ={`/products/${e.id}`} className="btn btn-info mx-1">View</Link>
                                    <Link to={`/products/edit/${e.id}`} className="btn btn-primary ">Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                    
                   
                </tbody>
    </table>

        </>
    )
}
export default Products;