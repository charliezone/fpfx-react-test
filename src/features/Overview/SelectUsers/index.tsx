import { ReactElement, ChangeEvent } from "react";
import { OptionSelector } from "../../common/OptionSelector";
import { User } from "../../Leaderboard/leaderboardApiSlice";
import { selectUser } from "./selectUsersSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

type SelectUsersProps = {
    users: User[];
}

export function SelectUsers({ users }: SelectUsersProps) {
    const dispatch = useAppDispatch();
    const userSelected = useAppSelector((state) => state.selectUsers.value);

    function handleOptionSelected(e: ChangeEvent<HTMLSelectElement>) {
        dispatch(selectUser(e.target.value));
    }

    function getOptions() {
        const options: ReactElement[] = [];
    
        for (const user of users)
            options.push(<option value={user.id} key={user.id}>{user.name} {user.lastname}</option>);
    
        return options;
    }
    
    return (
        <OptionSelector
            labelBefore="Select user"
            handleOptionSelected={handleOptionSelected}
            style={{backgroundPosition: '135px center'}}
            className="w-40"
        >
            {getOptions()}
        </OptionSelector>
    );
}