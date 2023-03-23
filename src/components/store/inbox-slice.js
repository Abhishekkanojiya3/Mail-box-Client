import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
    inbox: []
};

const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialInboxState,
    reducers: {
        inboxHandler(state, action) {
            state.inbox = action.payload.newArray
        }
    }
})
export const inboxActions = inboxSlice.actions;
export default inboxSlice.reducer;