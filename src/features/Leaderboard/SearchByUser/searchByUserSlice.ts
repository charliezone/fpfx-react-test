import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchByUserState = {
    value: string;
}

const initialState: SearchByUserState = { value: '' };

export const searchByUserSlice = createSlice({
    name: 'searchByUser',
    initialState,
    reducers: {
        setSearchByUser(state, action: PayloadAction<string>) {
            state.value = action.payload;
        }
    }
});

export const { setSearchByUser } = searchByUserSlice.actions;