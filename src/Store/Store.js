import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Features/CartSlice';
import FeedbackReducer from '../Features/FeedbackSlice';
const Store = configureStore({
    reducer: {
        cart: CartReducer,
        feedback: FeedbackReducer,
    },
});
export default Store;
