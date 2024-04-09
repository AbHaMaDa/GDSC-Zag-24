import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts",async()=>{
    let res = await fetch("http://localhost:9000/products");
    let data = await res.json();
    return data;
})

const productsSlice =createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return state= [...action.payload];
        })

    }
})
export const {} = productsSlice.actions;

export default productsSlice.reducer;