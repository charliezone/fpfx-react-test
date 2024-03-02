import { ReactElement, useState } from "react";
import { OptionSelector } from "../../common/OptionSelector";

export function DisplayEntries() {
    const [optionSelected, setOptionSelected] = useState<number | string>(10);

    function getOptions() {
        const options: ReactElement[] = [<option value={optionSelected} key={optionSelected}>{optionSelected}</option>];
    
        for (let i = 5; i <= 20; i++)
            optionSelected !== i && options.push(<option value={i} key={i}>{i}</option>);
    
        return options;
    }

    return (
        <OptionSelector
            labelBefore="Show"
            labelAfter="Entries"
            setOptionSelected={setOptionSelected}
            style={{backgroundPosition: '35px center'}}
        >
            {getOptions()}
        </OptionSelector>
    );
}