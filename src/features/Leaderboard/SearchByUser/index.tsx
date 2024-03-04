import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setSearchByUser } from './searchByUserSlice';
import Icon from './magnifier-icon.svg';

export function SearchByUser() {
    const dispatch = useAppDispatch();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch(setSearchByUser(e.target.value));
    }

    return (
        <div className="relative flex">
            <input onChange={handleChange} type="text" className="pl-10 pr-3 bg-primary rounded-md placeholder:text-cloudy text-cloudy text-sm font-semibold outline-none" placeholder="Search by user..." />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={Icon} alt="Magnifier icon" />
            </div>
        </div>
    )
}