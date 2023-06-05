import { createSlice } from '@reduxjs/toolkit';

const initalUIState = { loadingData: false, disabled: true };

const uiReducer = createSlice({
    name: 'ui',
    initialState: initalUIState,
    reducers: {
        showMessage(state, action) {
            state.loadingData = action.payload;
        },
        toggleDisable(state, action) {
            state.disabled = action.payload;
        },
    },
});

export const uiActions = uiReducer.actions;

export default uiReducer.reducer;
