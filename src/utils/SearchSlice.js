import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
    },
    reducers:{
        chacheResults:(state,action)=>{
            state = Object.assign(state,action.payload);
        },
        deleteChache:(state)=>{
            for (var member in state) delete state[member];
            // console.log("clear");
        }
    }
})

export const {chacheResults,deleteChache} = searchSlice.actions;
export default searchSlice.reducer;