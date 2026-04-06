import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-slice.js"
import contactReducer from "./user-slice.js"
import productReducer from "./product-slice.js"
import orderReducer from "./cart-slice.js"

const store = configureStore({
    reducer:{
        user: userReducer,
        contact: contactReducer,
        product: productReducer,
        order: orderReducer
    }
});

export default store;