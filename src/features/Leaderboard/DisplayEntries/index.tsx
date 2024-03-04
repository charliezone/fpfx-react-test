import { ReactElement, ChangeEvent } from "react";
import { selectEntry } from "./displayEntriesSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { OptionSelector } from "../../common/OptionSelector";

export function DisplayEntries() {
    const dispatch = useAppDispatch();
    const optionSel = useAppSelector((state) => state.displayEntries.value);

    function getOptions() {
        const options: ReactElement[] = [<option value={optionSel} key={optionSel}>{optionSel}</option>];
    
        for (let i = 5; i <= 20; i++)
            optionSel !== i && options.push(<option value={i} key={i}>{i}</option>);
    
        return options;
    }

    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(selectEntry(+e.target.value));
    }

    return (
        <OptionSelector
            labelBefore="Show"
            labelAfter="Entries"
            handleOptionSelected={handleOptionSelected}
            style={{backgroundPosition: '35px center'}}
        >
            {getOptions()}
        </OptionSelector>
    );
}