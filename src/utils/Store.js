import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
    reducer:{
        app:appSlice,
        search:SearchSlice,
        chat:chatSlice
    }
});

export default Store;