import { createSlice } from '@reduxjs/toolkit';
const FeedbackSlice = createSlice({
    name: 'feedback',
    initialState: [...JSON.parse(localStorage.getItem('list') ? localStorage.getItem('list') : '["Okela"]')],
    reducers: {
        addFeedback: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('list', JSON.stringify(state));
        },
    },
});
const { reducer, actions } = FeedbackSlice;
export const { addFeedback } = actions;
export default reducer;
