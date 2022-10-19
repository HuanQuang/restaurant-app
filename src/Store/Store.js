import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../Features/CartSlice';
import FeedbackReducer from '../Features/FeedbackSlice';
import UserReducer from '../Features/UserSlice';

const Store = configureStore({
    reducer: {
        cart: CartReducer,
        feedback: FeedbackReducer,
        user: UserReducer,
    },
});
export default Store;
