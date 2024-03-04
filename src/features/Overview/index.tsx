import { Chart } from './Chart';
import { Indicator } from './Indicator';
import { SelectUsers } from './SelectUsers';
import { useUsersDataAndState } from '../../app/hooks';
import { useAppSelector } from '../../app/hooks';
import Icon from './chart-icon.svg';

export function Overview() {
    const { data, isFetching } = useUsersDataAndState();
    const selectedUserId = useAppSelector((state) => state.selectUsers.value);
    const selectedUser = data?.users.find((user) => user.id === selectedUserId);

    const overviewInfo = selectedUser ? selectedUser : data ? data.users[0] : null;
    const profit = overviewInfo?.profit.reduce((acc, curr) => acc + curr, 0);
    const loss = overviewInfo?.loss.reduce((acc, curr) => acc + curr, 0);
    const balance = profit && loss && profit - Math.abs(loss);

    return (
        <section className="container bg-secondary rounded-xl py-4 px-5">
            <header className="flex justify-between mb-6">
                <div className="flex gap-2 mb-4 items-center">
                    <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Overview</h2>
                </div>
                <SelectUsers users={data?.users ?? []} />
            </header>
            <div className="flex justify-between">
                <div className="grow -ml-3"><Chart user={overviewInfo}/></div>
                <div className="flex flex-col gap-4">
                    <Indicator
                        title="Profit"
                        amount={`$${profit ?? ''}`}
                        currencyFontColorClass="text-java"
                    />
                    <Indicator
                        title="Loss"
                        amount={`$${loss ?? ''}`}
                        currencyFontColorClass="text-redOrange"
                    />
                    <Indicator
                        title="Balance"
                        amount={`$${balance ?? ''}`}
                        currencyFontColorClass="text-crusta"
                    />
                </div>
            </div>
        </section>
    );
}