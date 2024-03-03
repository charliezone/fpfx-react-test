import { CurrentDisplayedEntries } from './CurrentDisplayedEntries';
import { useAppSelector } from '../../app/hooks';
import { useGetUsersQuery } from './leaderboardApiSlice';
import { DisplayEntries } from './DisplayEntries';
import { LeaderTable } from './LeaderTable';
import { Paginator } from './Paginator';
import { SearchByUser } from './SearchByUser';
import Icon from './leaderboard-icon.svg';

function constructQuery(entries: number, currentPage: number) {
    let query = '';

    query += `_limit=${entries}`;
    query += `&_page=${currentPage}`;

    return query;
}

export function Leaderboard() {
    const { displayEntries, paginator } = useAppSelector((state) => state);
    const { data, isFetching } = useGetUsersQuery(constructQuery(displayEntries.value, paginator.value));

    console.log('data:', data);

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
                        totalEntries={data?.totalCount ?? 1}
                    />
                    <Paginator
                        links={data?.links ?? []}
                        totalCount={data?.totalCount ?? 1}
                    />
                </div>
            </div>
        </section>
    );
}