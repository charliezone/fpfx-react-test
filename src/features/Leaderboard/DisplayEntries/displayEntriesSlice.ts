import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DisplayEntriesState = {
    value: number;
}

export const DEFAULT_DISPLAY_ENTRIES = 10;

const initialState: DisplayEntriesState = { value: DEFAULT_DISPLAY_ENTRIES };

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