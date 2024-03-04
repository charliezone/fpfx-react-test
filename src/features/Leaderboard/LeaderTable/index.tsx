import { useAppSelector } from '../../../app/hooks';
import { User } from '../leaderboardApiSlice';
import { TableHeadCell } from './TableHeadCell';

type LeaderTableProps = {
    users: User[];
}

export function LeaderTable({users}: LeaderTableProps) {
    const userList = [...users];
    const orderByList = useAppSelector((state) => state.tableHeadCell.orderBy);
    const orderByProfit = orderByList.find((orderBy) => orderBy[0] === 'profit');
    const orderByLoss = orderByList.find((orderBy) => orderBy[0] === 'loss');
    const orderByBalance = orderByList.find((orderBy) => orderBy[0] === 'balance');

    if(orderByProfit)
        userList.sort((a, b) => {
            const sumA = a.profit.reduce((acc, curr) => acc + curr, 0);
            const sumB = b.profit.reduce((acc, curr) => acc + curr, 0);
            
            if(orderByProfit[1] === 'asc')
                return sumA - sumB;

            return sumB - sumA;
        });

    if(orderByLoss)
        userList.sort((a, b) => {
            const sumA = a.loss.reduce((acc, curr) => acc + curr, 0);
            const sumB = b.loss.reduce((acc, curr) => acc + curr, 0);
            
            if(orderByLoss[1] === 'asc')
                return Math.abs(sumA) - Math.abs(sumB);

            return Math.abs(sumB) - Math.abs(sumA);
        });

    if(orderByBalance)
        userList.sort((a, b) => {
            const sumProfitA = a.profit.reduce((acc, curr) => acc + curr, 0);
            const sumProfitB = b.profit.reduce((acc, curr) => acc + curr, 0);
            const sumLossA = a.loss.reduce((acc, curr) => acc + curr, 0);
            const sumLossB = b.loss.reduce((acc, curr) => acc + curr, 0);
            const balanceA = sumProfitA - Math.abs(sumLossA);
            const balanceB = sumProfitB - Math.abs(sumLossB);
            
            if(orderByBalance[1] === 'asc')
                return balanceA - balanceB;

            return balanceB - balanceA;
        });

    return (
        <div className="rounded-t-lg overflow-hidden">
                <table className="table-auto w-full">
                <thead>
                    <tr className="bg-primary">
                        <TableHeadCell text="user" />
                        <TableHeadCell text="profit" />
                        <TableHeadCell text="loss" />
                        <TableHeadCell text="balance" />
                    </tr>
                </thead>
                <tbody>
                    {userList.length > 0 && userList.map((user) => {
                        const profit = user.profit.reduce((prev, curr) => prev + curr, 0);
                        const loss = user.loss.reduce((prev, curr) => prev + curr, 0);
                        const balance = profit - Math.abs(loss);

                        return (
                            <tr key={user.id} className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">{`${user.name} ${user.lastname}`}</td>
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">
                                    ${profit}
                                </td>
                                <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">
                                    ${Math.abs(loss)}
                                </td>
                                <td className={`pl-5 last:pr-5 py-3 font-semibold text-sm ${balance > 0 ? 'text-java' : 'text-redOrange'}`}>${Math.abs(balance)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}