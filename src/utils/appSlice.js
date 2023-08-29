import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },

    reducers:{
        setMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        },
        showMenu:(state)=>{
            state.isMenuOpen = true
        }
    }
})

export const {setMenu,closeMenu,showMenu} = appSlice.actions;
export default appSlice.reducer;