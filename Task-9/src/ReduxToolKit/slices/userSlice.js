import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUser=createAsyncThunk("userSlice/fetchUser",async(user)=>{
    const res = await axios.post("https://api.escuelajs.co/api/v1/users/is-available",user);
    return res.data;
})

 const userSlice = createSlice({
    initialState:{
        name:"username",
        email:"username@gmail.com"
    },
    name:"userSlice",
    reducers:{
        update:(state,action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email

        },
        remove:(state)=>( state={})
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state=action.payload
        })
    }
   
});


export const {update,remove}= userSlice.actions
export default userSlice.reducer