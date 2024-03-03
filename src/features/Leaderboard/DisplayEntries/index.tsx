import { ReactElement } from "react";
import { selectEntry } from "./displayEntriesSlice";
import { useAppSelector } from "../../../app/hooks";
import { OptionSelector } from "../../common/OptionSelector";

export function DisplayEntries() {
    const optionSel = useAppSelector((state) => state.displayEntries.value);

    function getOptions() {
        const options: ReactElement[] = [<option value={optionSel} key={optionSel}>{optionSel}</option>];
    
        for (let i = 5; i <= 20; i++)
            optionSel !== i && options.push(<option value={i} key={i}>{i}</option>);
    
        return options;
    }

    return (
        <OptionSelector
            labelBefore="Show"
            labelAfter="Entries"
            action={selectEntry}
            style={{backgroundPosition: '35px center'}}
        >
            {getOptions()}
        </OptionSelector>
    );
}