import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";
const initialState = {
    isAuthenticated: false,
}
export const userFetch = createAsyncThunk(
    "Userdata/userFetch",
    async () => {
        const res = await axios.get(`${server}/getuser`, { withCredentials: true })
        return res.data
    }
)
const userSlice = createSlice({
    name: 'Userdata',
    initialState,
    reducers: {},
    extraReducers: {
        [userFetch.pending]: (state) => {
            state.loading = true;
        },
        [userFetch.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload?.user;
            state.isAuthenticated = true;
        },
        [userFetch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

    }
})

// export const { LoadUserRequest, LoadUserFail, LoadUserSucess, clearErrors } = userSlice.actions

export default userSlice.reducer