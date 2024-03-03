import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DisplayEntriesState = {
    value: number;
}

const initialState: DisplayEntriesState = { value: 10 };

export const displayEntrieSlice = createSlice({
    name: 'displayEntries',
    initialState,
    reducers: {
        selectEntry(state, action: PayloadAction<number>) {
            state.value = action.payload;
        }
    }
});

export const { selectEntry } = displayEntrieSlice.actions;