import { createSlice } from '@reduxjs/toolkit';

const initalUIState = {
    loadingData: false,
    disabled: true,
    formMessage: false,
};

const uiReducer = createSlice({
    name: 'ui',
    initialState: initalUIState,
    reducers: {
        loadingUsers(state, action) {
            state.loadingData = action.payload;
        },
        toggleDisable(state, action) {
            state.disabled = action.payload;
        },
        formMessage(state, action) {
            state.formMessage = action.payload;
        },
    },
});

export const uiActions = uiReducer.actions;

export default uiReducer.reducer;
