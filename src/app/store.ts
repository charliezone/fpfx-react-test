import { combineSlices, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../features/Leaderboard/leaderboardApiSlice";
import { displayEntrieSlice } from "../features/Leaderboard/DisplayEntries/displayEntriesSlice";
import { paginatorSlice } from "../features/Leaderboard/Paginator/paginatorSlice";
import { searchByUserSlice } from "../features/Leaderboard/SearchByUser/searchByUserSlice";
import { tableHeadCellSlice } from "../features/Leaderboard/LeaderTable/TableHeadCell/tableHeadCellSlice";

const rootReducer = combineSlices(
    apiSlice, 
    displayEntrieSlice, 
    paginatorSlice,
    searchByUserSlice,
    tableHeadCellSlice,
);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(apiSlice.middleware);
        },
        preloadedState
    });

    setupListeners(store.dispatch);

    return store;
}

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>