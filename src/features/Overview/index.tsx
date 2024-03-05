import { Chart } from './Chart';
import { Indicator } from './Indicator';
import { SelectUsers } from './SelectUsers';
import { useUsersDataAndState } from '../../app/hooks';
import { useAppSelector } from '../../app/hooks';
import { Loading } from '../common/Loading';
import Icon from './chart-icon.svg';

export function Overview() {
    const { data, isFetching } = useUsersDataAndState();
    const selectedUserId = useAppSelector((state) => state.selectUsers.value);
    const selectedUser = data?.users.find((user) => user.id === selectedUserId);

    const overviewInfo = selectedUser ? selectedUser : data ? data.users[0] : null;
    const profit = overviewInfo?.profit.reduce((acc, curr) => acc + curr, 0);
    const loss = overviewInfo?.loss.reduce((acc, curr) => acc + curr, 0);
    const balance = profit && loss && profit - Math.abs(loss);

    const shouldDisplay = data && data.users.length > 0 && !isFetching;

    return (
        <section className="container bg-secondary rounded-xl py-3 px-5">
            <header className="flex flex-col md:flex-row justify-between mb-6">
                <div className="flex gap-2 mb-4 items-center">
                    <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Overview</h2>
                </div>
                {shouldDisplay && <SelectUsers users={data?.users} userSelected={overviewInfo} />}
            </header>
            {isFetching && (
                <div className="flex justify-center min-h-56">
                    <Loading />
                </div>
            )}
            {shouldDisplay && (
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="grow md:-ml-3 mb-4 md:mb-0"><Chart user={overviewInfo}/></div>
                    <div className="flex flex-col gap-4">
                        <Indicator
                            title="Profit"
                            amount={`$${profit ?? ''}`}
                            currencyFontColorClass="text-java"
                        />
                        <Indicator
                            title="Loss"
                            amount={`$${loss ? Math.abs(loss) : ''}`}
                            currencyFontColorClass="text-redOrange"
                        />
                        <Indicator
                            title="Balance"
                            amount={`$${balance ? Math.abs(balance) : ''}`}
                            currencyFontColorClass={balance && balance > 0 ? 'text-crusta' : 'text-redOrange'}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}