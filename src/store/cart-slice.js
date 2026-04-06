import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllOrdersByUserIdApi} from "../service/cart-service.js";

const initialState = {
    orders: []
};

export const getAllOrdersByUserId = createAsyncThunk("order/getAllOrdersByUserId", async (id, {rejectWithValue}) => {
    return await getAllOrdersByUserIdApi(id);
});

const slice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
            state.orders = action.payload;
        });
    }
});

export default slice.reducer;