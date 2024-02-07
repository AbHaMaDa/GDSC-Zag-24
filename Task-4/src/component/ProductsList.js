import React from 'react';
import "./ProductsList.css";
import OnlyProduct from './OnlyProduct';
class ProductsList extends React.Component{


    constructor(props){
        super(props);

        this.state ={
            i:"all",
            ProductsData:[] // where i will wrap the data
        }
    }


    componentDidMount(){
        fetch('https://fakestoreapi.com/products/')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                ProductsData:data
            })
        });
    }



    render(){
        
       let  btn=this.state.i

        const products=this.state.ProductsData.map((product)=>{
            
            return(
                
            btn=="all"? <OnlyProduct key={product.id} product={product} />:
            btn=="men's clothing"&&product.category=="men's clothing"?<OnlyProduct key={product.id} product={product} />:
            btn=="jewelery"&&product.category=="jewelery"?<OnlyProduct key={product.id} product={product} />:
            btn=="electronics"&&product.category=="electronics"?<OnlyProduct key={product.id} product={product} />:
            btn=="women's clothing"&&product.category=="women's clothing"?<OnlyProduct key={product.id} product={product} />:null

                
            )
        })

        return(
            <>
                <div className='buttons'>
                    <button  className='all' onClick={()=>{this.setState({i:"all"})}}>All</button>
                    <button className='men' onClick={()=>{this.setState({i:"men's clothing"})}}>Men</button>
                    <button  className='all' onClick={()=>{this.setState({i:"jewelery"})}}>Jewelery</button>
                    <button className='electronics' onClick={()=>{this.setState({i:"electronics"})}}>Electronics</button>
                    <button className='women'  onClick={()=>{this.setState({i:"women's clothing"})}}>Women</button>
                </div>
        



            <div className='content'>
                  {products}
                  
            </div>
            </>
        )
        
    }
    
}


export default ProductsList;