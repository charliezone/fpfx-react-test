import { SelectUsers } from './SelectUsers';
import Icon from './chart-icon.svg';

export function Overview() {
    return (
        <section className="container bg-secondary rounded-xl py-4 px-5">
            <header className="flex justify-between">
                <div className="flex gap-2 mb-4 items-center">
                    <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Overview</h2>
                </div>
                <SelectUsers />
            </header>
        </section>
    );
}