import Icon from './arrow-down.svg';

export function TableHeadCell({ text }: {text: string}) {
    return (
        <th className="pl-5 py-3 font-bold text-md text-cloudy last:pr-5">
            <div className="flex justify-between items-center text-sm">
                { text }
                <div className="flex flex-col gap-1">
                    <img src={Icon} className="transform rotate-180" alt="Arrow down" />
                    <img src={Icon} alt="Arrow down" />
                </div>
            </div>
        </th>
    );
}