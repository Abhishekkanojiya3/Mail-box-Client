import { configureStore } from "@reduxjs/toolkit";
import MailReducer from './auth-slice'
import inboxReducer from './inbox-slice'
import objReducer from './obj-slice'

const store = configureStore({
    reducer: {
        auth: MailReducer,
        inbox: inboxReducer,
        obj: objReducer

    }
});
export default store;