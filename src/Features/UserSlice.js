import { createSlice } from '@reduxjs/toolkit';
const UserSlice = createSlice({
    name: 'user',
    initialState: { ...(JSON.parse(localStorage.getItem('user')) || {}) },
    reducers: {
        getLogin: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify({ user: state.user }));
        },
        getLogOut: (state) => {
            state.user = '';
            localStorage.clear();
        },
    },
});
const { reducer, actions } = UserSlice;
export const { getLogin, getLogOut } = actions;
export default reducer;
