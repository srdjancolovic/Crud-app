import { createSlice } from '@reduxjs/toolkit';

const initalUsersState = {
    users: [],
    changed: false,
    searchRes: [],
    ascSort: false,
    descSort: false,
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
            state.ascSort = true;
            state.descSort = false;
        },
        sortDescending(state) {
            state.users = state.users.sort((a, b) => b.timestamp - a.timestamp);
            state.ascSort = false;
            state.descSort = true;
        },
    },
});

export const usersActions = usersReducer.actions;

export default usersReducer.reducer;
