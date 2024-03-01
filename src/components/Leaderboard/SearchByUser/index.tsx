import Icon from './magnifier-icon.svg';

export function SearchByUser() {
    return (
        <div className="relative flex">
            <input type="text" className="pl-10 pr-3 bg-primary rounded-md text-cloudy outline-none" placeholder="Search by user..." />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={Icon} alt="Magnifier icon" />
            </div>
        </div>
    )
}