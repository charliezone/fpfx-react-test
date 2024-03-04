import { useEffect } from 'react';
import { CurrentDisplayedEntries } from './CurrentDisplayedEntries';
import { useAppSelector } from '../../app/hooks';
import { useAppDispatch } from '../../app/hooks';
import { selectPage } from './Paginator/paginatorSlice';
import { useGetUsersQuery } from './leaderboardApiSlice';
import { DisplayEntries } from './DisplayEntries';
import { LeaderTable } from './LeaderTable';
import { Paginator } from './Paginator';
import { SearchByUser } from './SearchByUser';
import { DEFAULT_CURRENT_PAGE } from './Paginator/paginatorSlice';
import { DEFAULT_DISPLAY_ENTRIES } from './DisplayEntries/displayEntriesSlice';
import { TableHeadCellState } from './LeaderTable/TableHeadCell/tableHeadCellSlice';
import Icon from './leaderboard-icon.svg';

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

export function Leaderboard() {
    const dispatch = useAppDispatch();
    const displayEntries = useAppSelector((state) => state.displayEntries.value);
    const paginator = useAppSelector((state) => state.paginator.value);
    const searchByUser = useAppSelector((state) => state.searchByUser.value);
    const orderBy = useAppSelector((state) => state.tableHeadCell.orderBy.find((item) => item[0] === 'user'));
    const { data, isFetching } = useGetUsersQuery(constructQuery(displayEntries, paginator, searchByUser, orderBy));

    useEffect(() => {
        dispatch(selectPage(DEFAULT_CURRENT_PAGE))
    }, [displayEntries, searchByUser]);

    return (
        <section className="container bg-secondary rounded-xl py-4 px-5">
            <header className="flex gap-2 mb-4">
                <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Leaderboard</h2>
            </header>
            <div className="flex flex-col">
                <div className="flex justify-between mb-3">
                    <DisplayEntries/>
                    <SearchByUser/>
                </div>
                <div className="mb-4">
                    <LeaderTable users={data?.users ?? []}/>
                </div>
                <div className="flex justify-between">
                    <CurrentDisplayedEntries
                        totalEntries={data?.totalCount ?? DEFAULT_DISPLAY_ENTRIES}
                    />
                    <Paginator
                        links={data?.links ?? []}
                        totalCount={data?.totalCount ?? DEFAULT_CURRENT_PAGE}
                    />
                </div>
            </div>
        </section>
    );
}