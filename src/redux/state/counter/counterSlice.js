import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value-- //same thing as above
        },
        setCustom:(state,action)=>{
            state.value = action.payload //same thing as above
        },
    }
})

export const {increment,decrement,setCustom}=counterSlice.actions;
export default counterSlice.reducer