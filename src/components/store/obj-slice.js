import { createSlice } from "@reduxjs/toolkit";

const objState = {
    specificEmail: {
        email: "",
        subject: "",
        body: ""
    }
};

const objSlice = createSlice({
    name: "obj",
    initialState: objState,
    reducers: {
        objHandler(state, action) {
            state.specificEmail = action.payload;
        }
    }
})
export const objActions = objSlice.actions;
export default objSlice.reducer;