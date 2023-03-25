import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
    inbox: [],
    sentbox: []
};

const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialInboxState,
    reducers: {
        inboxHandler(state, action) {
            state.inbox = action.payload.newArray
        },
        sentBoxHandler(state, action) {
            state.sentbox = action.payload.newArray2;
        },
        // inboxMailRead(currState, action) {
        //     const index = currState.inbox.findIndex((mail) => {
        //         return mail.id === action.payload;
        //     });
        //     currState.inbox[index] = {...currState.inbox[index], read: true };
        // },

        // sentMailRead(currState, action) {
        //     const index = currState.sentbox.findIndex((mail) => {
        //         return mail.id === action.payload;
        //     });
        //     currState.sentbox[index] = {...currState.sentbox[index], read: true };
        // },
    }
})
export const inboxActions = inboxSlice.actions;
export default inboxSlice.reducer;