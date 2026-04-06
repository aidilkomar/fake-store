import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllProductsApi, getProductByIdApi} from "../service/product-service.js";

const initialState = {
    products: [],
    detail: {},
    productMap: {}
};

export const getAllProducts = createAsyncThunk("product/getAllProducts", async (_, {rejectWithValue}) => {
    return await getAllProductsApi();
});

export const getDetailProduct = createAsyncThunk("detail/getDetailProduct", async (id, {rejectWithValue}) => {
    return await getProductByIdApi(id)
});

const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        }).addCase(getDetailProduct.fulfilled, (state, action) => {
            const payload = action.payload;
            state.detail = payload;
            state.productMap[payload.id] = payload;
        });
    }
});

export default slice.reducer;