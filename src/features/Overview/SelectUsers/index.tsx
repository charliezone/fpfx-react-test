import { ReactElement, ChangeEvent } from "react";
import { OptionSelector } from "../../common/OptionSelector";
import { User } from "../../Leaderboard/leaderboardApiSlice";
import { selectUser } from "./selectUsersSlice";
import { useAppDispatch } from "../../../app/hooks";

type SelectUsersProps = {
    userSelected: User | null;
    users: User[];
}

export function SelectUsers({ userSelected, users }: SelectUsersProps) {
    const dispatch = useAppDispatch();

    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(selectUser(e.target.value));
    }

    function getOptions(usersList: User[]) {
        const options: ReactElement[] = [];
    
        for (const user of usersList)
            options.push(<option value={user.id} key={user.id}>{user.name} {user.lastname}</option>);
    
        return options;
    }
    
    return (
        <OptionSelector
            labelBefore="Select user"
            handleOptionSelected={handleOptionSelected}
            style={{backgroundPosition: '135px center'}}
            className="w-40"
            optionSelected={userSelected?.id ?? ''}
        >
            {getOptions(users)}
        </OptionSelector>
    );
}