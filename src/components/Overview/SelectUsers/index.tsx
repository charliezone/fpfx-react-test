import { useState, ReactElement } from "react";
import { OptionSelector } from "../../common/OptionSelector";

export function SelectUsers() {
    const [optionSelected, setOptionSelected] = useState<number | string>('Martin Newman');
    const users: string[] = [
        'Martin Newman', 
        'Elise Hebert',
        'Aston Morra',
        'Raees Parks',
        'Beatrix Cook',
        'Alyssa Vasquez',
    ];

    function getOptions() {
        const options: ReactElement[] = [<option value={optionSelected} key={optionSelected}>{optionSelected}</option>];
    
        for (const user of users)
            user !== optionSelected && options.push(<option value={user} key={user}>{user}</option>);
    
        return options;
    }
    
    return (
        <OptionSelector 
            labelBefore="Select user"
            setOptionSelected={setOptionSelected}
            style={{backgroundPosition: '135px center'}}
            className="w-40"
        >
            {getOptions()}
        </OptionSelector>
    );
}