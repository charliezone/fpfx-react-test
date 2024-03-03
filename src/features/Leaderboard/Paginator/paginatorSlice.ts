import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaginatorState = {
    value: number;
}

const initialState: PaginatorState = { value: 1 };

export const paginatorSlice = createSlice({
    name: 'paginator',
    initialState,
    reducers: {
        selectPage(state, action: PayloadAction<number>) {
            state.value = action.payload;
        }
    }
});

export const { selectPage } = paginatorSlice.actions;