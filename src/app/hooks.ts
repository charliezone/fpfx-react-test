import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { useGetUsersQuery } from "../features/Leaderboard/leaderboardApiSlice";
import { TableHeadCellState } from "../features/Leaderboard/LeaderTable/TableHeadCell/tableHeadCellSlice";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

function constructQuery(
    entries: number, 
    currentPage: number, 
    searchByUser: string,
    orderBy: TableHeadCellState['orderBy'][0] | undefined,
) {
    let query = '';

    query += `_limit=${entries}`;
    query += `&_page=${currentPage}`;

    if(searchByUser.length > 0)
        query += `&q=${searchByUser}`;

    if(orderBy)
        query += `&_sort=name&_order=${orderBy[1]}`;

    return query;
}

export function useUsersDataAndState() {
    const displayEntries = useAppSelector((state) => state.displayEntries.value);
    const paginator = useAppSelector((state) => state.paginator.value);
    const searchByUser = useAppSelector((state) => state.searchByUser.value);
    const orderBy = useAppSelector((state) => state.tableHeadCell.orderBy.find((item) => item[0] === 'user'));
    const { data, isFetching } = useGetUsersQuery(constructQuery(displayEntries, paginator, searchByUser, orderBy));

    return {
        data,
        isFetching,
        displayEntries,
        searchByUser,
    };
}