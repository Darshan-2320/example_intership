import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice({
    name:'data',
    initialState:null,
    reducers:{
        adddata:(state,action)=>{
            return action.payload;
        },
    },
});
export const {adddata}=dataslice.actions;
export default dataslice.reducer;