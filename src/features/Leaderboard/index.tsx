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
import { Loading } from '../common/Loading';
import Icon from './leaderboard-icon.svg';

export function Leaderboard() {
    const dispatch = useAppDispatch();
    const { data, isFetching, displayEntries, searchByUser } = useUsersDataAndState();

    useEffect(() => {
        dispatch(selectPage(DEFAULT_CURRENT_PAGE))
    }, [displayEntries, searchByUser]);

    const shouldDisplay = data && data.users.length > 0 && !isFetching;

    return (
        <section className="container bg-secondary rounded-xl py-3 px-5">
            <header className="flex gap-2 mb-4">
                <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Leaderboard</h2>
            </header>
            
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                    <div className="flex order-2 md:order-1">
                        <DisplayEntries/>
                    </div>
                    <div className="flex order-1 md:order-2 mb-2 md:mb-0 min-h-10">
                        <SearchByUser/>
                    </div>
                </div>
                {isFetching && (
                    <div className="flex justify-center min-h-[585px]">
                        <Loading />
                    </div>
                )}
                <div className="mb-4">
                    {shouldDisplay ? 
                    <LeaderTable users={data.users}/> :
                    !isFetching && <span className="text-cloudy font-semibold text-md">No results</span>}
                </div>
                {shouldDisplay && (
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-2 md:mb-0">
                            <CurrentDisplayedEntries
                                totalEntries={data?.totalCount ?? DEFAULT_DISPLAY_ENTRIES}
                            />
                        </div>
                        <Paginator
                            links={data?.links ?? []}
                            totalCount={data?.totalCount ?? DEFAULT_CURRENT_PAGE}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}