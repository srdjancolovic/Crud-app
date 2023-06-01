import { createSlice } from '@reduxjs/toolkit';

const initalusersState = { users: 0, usersNum: 15 };

const usersDataReducer = createSlice({
    name: 'users',
    initialState: initalusersState,
    reducers: {
        addusers(state) {
            state.users++;
        },

        fillArr(state, action) {
            state.users = action.payload;
        },
    },
});

export const usersFetchActions = usersDataReducer.actions;

export default usersDataReducer.reducer;
