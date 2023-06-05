import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersReducer';
import uiReducer from './reducers/uiReducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        ui: uiReducer,
    },
});

export default store;
