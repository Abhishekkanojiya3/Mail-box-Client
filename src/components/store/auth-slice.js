import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    email: localStorage.getItem('email'),
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('email')
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            localStorage.setItem('email', state.email)
            localStorage.setItem('token', state.token)
            state.isLoggedIn = true
        },
        logout(state, action) {
            state.email = null
            state.token = null

            localStorage.removeItem('email')
            localStorage.removeItem('token')
            state.isLoggedIn = false

        }

    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;