import React from 'react';
import "./ProductsList.css";
import ProductsData from "../ProductsData"
import OnlyProduct from './OnlyProduct';

class ProductsList extends React.Component{

state ={
    i:"all"
}

//function which used in buttons
change1=()=>{
    this.setState({ 


        i:"all"
    })
    
}
change2=()=>{
    
    this.setState({ 

        i:"men's clothing"
    })
}
change3=()=>{
  
    this.setState({ 

        i:"jewelery"
    })
   
}
change4=()=>{
    
    this.setState({ 

        i:"electronics"
    })
    
}
change5=()=>{
    
    this.setState({ 

        i:"women's clothing"
    })
    
}


    render(){
        
       let  btn=this.state.i

        const products=ProductsData.map((product)=>{
            
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
                    <button  className='all' onClick={this.change1}  >All</button>
                    <button className='men' onClick={this.change2} >Men</button>
                    <button  className='all' onClick={this.change3}  >Jewelery</button>
                    <button className='electronics' onClick={this.change4} >Electronics</button>
                    <button className='women'  onClick={this.change5}>Women</button>
                </div>
        



            <div className='content'>
                  {products}
                  
            </div>
            </>
        )
        
    }
    componentDidMount(){
        
    }
}


export default ProductsList;