import { ReactElement, ChangeEvent } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../app/hooks";
import Icon from './selector-caret-down.svg';

type OptionSelector = {
    labelBefore: string;
    labelAfter?: string;
    className?: string;
    children: ReactElement[];
    action: ActionCreatorWithPayload<number, "displayEntries/selectEntry">;
    style: Object;
}

export function OptionSelector({ labelBefore, labelAfter, className, children, action, style }: OptionSelector) {
    const dispatch = useAppDispatch();
    
    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(action(+e.target.value));
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-cloudy leading-27 font-semibold">{labelBefore}</span>
            <select 
                onChange={handleOptionSelected}
                className={`bg-primary rounded-md pl-3 h-10 ${className ? className : 'w-14'} text-cloudy text-sm custom-select outline-none bg-no-repeat font-semibold`}
                style={{...style, backgroundImage: `url(${Icon})`}}    
            >
                {children}
            </select>
            {labelAfter && <span className="text-cloudy leading-27 font-semibold">{labelAfter}</span>}
        </div>
    );
}