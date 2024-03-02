import { ReactElement, ChangeEvent, Dispatch } from "react";
import Icon from './selector-caret-down.svg';

type OptionSelector = {
    labelBefore: string;
    labelAfter?: string;
    className?: string;
    children: ReactElement[];
    setOptionSelected: Dispatch<React.SetStateAction<number | string>>;
    style: Object;
}

export function OptionSelector({ labelBefore, labelAfter, className, children, setOptionSelected, style }: OptionSelector) {
    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        setOptionSelected(+e.target.value);
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-cloudy leading-27 font-semibold">{labelBefore}</span>
            <select 
                onChange={handleOptionSelected}
                className={`bg-primary rounded-md pl-3 h-10 ${className ? className : 'w-14'} text-cloudy text-sm custom-select outline-none bg-no-repeat`}
                style={{...style, backgroundImage: `url(${Icon})`}}    
            >
                {children}
            </select>
            {labelAfter && <span className="text-cloudy leading-27 font-semibold">{labelAfter}</span>}
        </div>
    );
}