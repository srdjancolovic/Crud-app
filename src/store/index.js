import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersFetchReducer';

const store = configureStore({
    reducer: usersReducer,
});

export default store;
