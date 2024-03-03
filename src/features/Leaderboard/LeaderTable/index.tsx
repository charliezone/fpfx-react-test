import { User } from '../leaderboardApiSlice';
import { TableHeadCell } from './TableHeadCell';

type LeaderTableProps = {
    users: User[];
}

export function LeaderTable({users}: LeaderTableProps) {
    return (
        <div className="rounded-t-lg overflow-hidden">
                <table className="table-auto w-full">
                <thead>
                    <tr className="bg-primary">
                        <TableHeadCell text="User" />
                        <TableHeadCell text="Profit" />
                        <TableHeadCell text="Loss" />
                        <TableHeadCell text="Balance" />
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map((user) => {
                        const profit = user.profit.reduce((prev, curr) => prev += curr, 0);
                        const loss = user.loss.reduce((prev, curr) => prev += curr, 0);
                        const balance = profit - Math.abs(loss);

                        return (
                            <tr key={user.id} className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">{`${user.name} ${user.lastname}`}</td>
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">
                                    ${profit}
                                </td>
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">
                                    ${loss}
                                </td>
                                <td className={`pl-5 last:pr-5 py-3 font-semibold text-sm ${balance > 0 ? 'text-java' : 'text-redOrange'}`}>${balance}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}