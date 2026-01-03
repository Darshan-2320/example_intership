import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataslice";
const appstore=configureStore({
    reducer:{
        data:dataReducer,
    },
});
export default appstore;