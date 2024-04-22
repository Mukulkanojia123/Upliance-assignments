import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { userDetails: [] },
    reducers: {
        setUser: (state, actions) => {
            state.userDetails = [...state.userDetails, actions.payload]
        }
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
