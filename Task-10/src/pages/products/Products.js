import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import DataForTable from "../../components/dataTables/DataForTable";
import "./products.scss";
import { products } from "../../data";



const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
     field:'"img',headerName:'image',width:100,
    renderCell:(params)=>{
     return <img src= {params.row.img || "/noavatar.png"} alt='' />
    }
    },
  
    {
      field: 'title',
      headerName: 'title',
      width: 250,
      
      type:"string"
    },
    {
      field: 'color',
      headerName: ' color',
      width: 150,
      
      type:"string"

    },
    {
      field: "price",
      headerName: 'price',
      width: 150,
      
      type:"string"

    },
    {
     field: "producer",
     headerName: 'producer',
     width: 200,
     
     type:"string"

   },
    {
      field: 'createdAt',
      headerName: 'createdAt',
      width: 200,
      type:"string"

    },
    {
     field: 'instock', headerName: 'in stock', width: 100,type:"boolean"
    }
    
  ];
const Products =()=>{
    const [dataProducts,setDataProducts]=useState([]);
    const [open,setOpen]= useState(false);

    async function fetchData(){
      let res = await fetch("http://localhost:9000/products");
      let productsData = await res.json();
      setDataProducts(productsData)
    }

    useEffect(()=>{
      fetchData();
    },[])


    return(
        <div className="products">
           <div className="info  ">
                <h1>products</h1>
                <button onClick={()=>setOpen(true)}>add new products</button>
            </div>
             <DataForTable slug="products" columns={columns}  rows = {products}/>
            {open?<Add set={setOpen} columns={columns} />:null}       
        </div>
    )
}

export default Products;