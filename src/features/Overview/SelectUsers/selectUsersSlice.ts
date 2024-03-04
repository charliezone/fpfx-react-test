import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectUsersState = {
    value: string;
}

const initialState: SelectUsersState = {
    value: '',
}

export const selectUsersSlice = createSlice({
    name: 'selectUsers',
    initialState,
    reducers: {
        selectUser(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    }
});

export const { selectUser } = selectUsersSlice.actions;