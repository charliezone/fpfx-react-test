import { TableHeadCell } from './TableHeadCell';

export function LeaderTable() {
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
                    <tr className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">Martin Newman</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$980,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$265,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-java">$715,000</td>
                    </tr>
                    <tr className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">Martin Newman</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$980,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$265,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-java">$715,000</td>
                    </tr>
                    <tr className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">Martin Newman</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$980,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$265,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-java">$715,000</td>
                    </tr>
                    <tr className="odd:bg-cyprus even:bg-daintree border-b border-primary last:border-b-0">
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">Martin Newman</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$980,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-cloudy">$265,000</td>
                        <td className="pl-5 last:pr-5 py-3 font-semibold text-sm text-java">$715,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}