import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAllUsersApi, getContactByUserApi} from '../service/user-service.js';

const initialState = {
    users: [],
    contact: {}
};

export const getAllUsers =createAsyncThunk("user/getAllUsers", async (_, {rejectWithValue}) => {
    return await getAllUsersApi();
});

export const getContactByUser =createAsyncThunk("contact/getContactByUser", async (id, {rejectWithValue}) => {
    return await getContactByUserApi(id);
});

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        }).addCase(getContactByUser.fulfilled, (state, action) => {
            state.contact = action.payload;
        });
    }
});

export default slice.reducer;