import { ReactElement, useState, ChangeEvent } from "react";
import Icon from './selector-caret-down.svg';

export function DisplayEntries() {
    const [optionSelected, setOptionSelected] = useState(10);

    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        setOptionSelected(+e.target.value);
    }

    function getOptions() {
        const options: ReactElement[] = [<option value={optionSelected} key={optionSelected}>{optionSelected}</option>];
    
        for (let i = 5; i <= 20; i++)
            optionSelected !== i && options.push(<option value={i} key={i}>{i}</option>);
    
        return options;
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-cloudy leading-27 font-semibold">Show</span>
            <select 
                onChange={handleOptionSelected}
                className="bg-primary rounded-md pl-3 h-10 w-14 text-cloudy text-sm custom-select outline-none bg-no-repeat"
                style={{backgroundImage: `url(${Icon})`}}    
            >
                {getOptions()}
            </select>
            <span className="text-cloudy leading-27 font-semibold">Entries</span>
        </div>
    );
}