import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            // splice add or remove element from the array
            state.messages.splice(11,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;