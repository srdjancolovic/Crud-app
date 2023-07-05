import { createSlice } from '@reduxjs/toolkit';

const initalUsersState = {
    users: [],
    changed: false,
    searchRes: [],
};

const usersReducer = createSlice({
    name: 'users',
    initialState: initalUsersState,
    reducers: {
        updatedUsers(state, action) {
            state.changed = true;
            state.users = action.payload.users;
        },

        sortAscending(state) {
            state.users = state.users.sort((a, b) => a.timestamp - b.timestamp);
        },

        sortDescending(state) {
            state.users = state.users.sort((a, b) => b.timestamp - a.timestamp);
        },
    },
});

export const usersActions = usersReducer.actions;

export default usersReducer.reducer;
