import { capitalize } from 'lodash';
import { TypeOfOrder, OrderBy } from './tableHeadCellSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { addOrder } from './tableHeadCellSlice';
import Icon from './arrow-down.svg';

export function TableHeadCell({ text }: {text: OrderBy}) {
    const dispatch = useAppDispatch();
    const orderBy = useAppSelector((state) => state.tableHeadCell.orderBy.find((order) => order[0] === text));

    function handleOrderSelection(order: TypeOfOrder) {
        dispatch(addOrder([text, order]));
    }

    return (
        <th className="pl-5 py-3 font-bold text-md text-cloudy last:pr-5">
            <div className="flex justify-between items-center text-sm">
                { capitalize(text) }
                <div className="flex flex-col gap-1">
                    <a onClick={() => handleOrderSelection('asc')} className="cursor-pointer">
                        <div className="relative w-full h-auto">
                            <img src={Icon} className="transform rotate-180 w-full h-auto" alt="Arrow down" />
                            {orderBy && orderBy[1] === 'asc' && <div className="absolute inset-0 bg-secondary opacity-50"></div>}
                        </div>
                    </a>
                    <a onClick={() => handleOrderSelection('desc')} className="cursor-pointer">
                        <div className="relative w-full h-auto">
                            <img src={Icon} className="w-full h-auto" alt="Arrow down" />
                            {orderBy && orderBy[1] === 'desc' && <div className="absolute inset-0 bg-secondary opacity-50"></div>}
                        </div>
                    </a>
                </div>
            </div>
        </th>
    );
}