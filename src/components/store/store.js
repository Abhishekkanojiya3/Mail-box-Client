import { configureStore } from "@reduxjs/toolkit";
import MailReducer from './auth-slice'
import inboxReducer from './inbox-slice'

const store = configureStore({
    reducer: {
        auth: MailReducer,
        inbox: inboxReducer
    }
});
export default store;