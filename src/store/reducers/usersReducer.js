import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initalUsersState = { users: [], changed: false, searchResults: [] };

const usersReducer = createSlice({
    name: 'users',
    initialState: initalUsersState,
    reducers: {
        updatedUsers(state, action) {
            state.changed = true;
            state.users = action.payload.users;
        },
    },
});

export const usersActions = usersReducer.actions;

export default usersReducer.reducer;
