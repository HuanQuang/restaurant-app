import { createSlice } from '@reduxjs/toolkit';
const UserSlice = createSlice({
    name: 'user',
    initialState: { ...JSON.parse(localStorage.getItem('userCurrent')) },
    reducers: {
        getUser: (state, action) => {
            localStorage.setItem('userCurrent', JSON.stringify(action.payload));
            console.log(state);
        },
    },
});
const { reducer, actions } = UserSlice;
export const { getUser } = actions;
export default reducer;
