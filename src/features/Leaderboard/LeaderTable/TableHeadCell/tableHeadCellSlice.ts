import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OrderBy = 
    | 'user' 
    | 'profit' 
    | 'loss' 
    | 'balance';

export type TypeOfOrder = 'desc' | 'asc';

export type TableHeadCellState = {
    orderBy: [ OrderBy, TypeOfOrder][]
}

const initialState: TableHeadCellState = {
    orderBy: [],
}

export const tableHeadCellSlice = createSlice({
    name: 'tableHeadCell',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<TableHeadCellState['orderBy'][0]>) {
            const orderBy = state.orderBy.find((item) => item[0] === action.payload[0]);
            
            if(orderBy)
                orderBy[1] = action.payload[1];
            else {
                state.orderBy.push(action.payload);

                if(action.payload[0] !== 'user')
                    state.orderBy = state.orderBy.filter(
                        (item) => item[0] === action.payload[0] || item[0] === 'user'
                    );
            }
        }
    }
});

export const { addOrder } = tableHeadCellSlice.actions;