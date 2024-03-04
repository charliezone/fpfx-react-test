import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaginatorState = {
    value: number;
}

export const DEFAULT_CURRENT_PAGE = 1;

const initialState: PaginatorState = { value: DEFAULT_CURRENT_PAGE };

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