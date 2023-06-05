import { createSlice } from '@reduxjs/toolkit';

const initalUsersState = { users: [], changed: false };

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
