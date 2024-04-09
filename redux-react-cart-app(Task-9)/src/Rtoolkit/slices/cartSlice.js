import { createSlice } from "@reduxjs/toolkit";





 const cartSlice= createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{

          const foundedProduct = state.find((product)=>
            product.id === action.payload.id
          );console.log(foundedProduct)
          if(foundedProduct){
              foundedProduct.quantity++;
          }else{
            const productCopy = {...action.payload,quantity:1}
              state.push(productCopy);
          }
              

            




        },
        deleteFromCart:(state,action)=>{
            return state.filter((product)=>{
              return  product.id !== action.payload.id 
            })
        },
        clear:(state,action)=>{
           return state =  []
        }
        
    },
   
})


export const {addToCart,deleteFromCart,clear} = cartSlice.actions;
export default cartSlice.reducer;