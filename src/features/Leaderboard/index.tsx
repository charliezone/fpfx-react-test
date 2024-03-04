import { useEffect } from 'react';
import { CurrentDisplayedEntries } from './CurrentDisplayedEntries';
import { useAppDispatch } from '../../app/hooks';
import { selectPage } from './Paginator/paginatorSlice';
import { DisplayEntries } from './DisplayEntries';
import { LeaderTable } from './LeaderTable';
import { Paginator } from './Paginator';
import { SearchByUser } from './SearchByUser';
import { DEFAULT_CURRENT_PAGE } from './Paginator/paginatorSlice';
import { DEFAULT_DISPLAY_ENTRIES } from './DisplayEntries/displayEntriesSlice';
import { useUsersDataAndState } from '../../app/hooks';
import Icon from './leaderboard-icon.svg';

export function Leaderboard() {
    const dispatch = useAppDispatch();
    const { data, isFetching, displayEntries, searchByUser } = useUsersDataAndState();

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