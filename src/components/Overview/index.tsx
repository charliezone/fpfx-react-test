import { Chart } from './Chart';
import { Indicator } from './Indicator';
import { SelectUsers } from './SelectUsers';
import Icon from './chart-icon.svg';

export function Overview() {
    return (
        <section className="container bg-secondary rounded-xl py-4 px-5">
            <header className="flex justify-between mb-6">
                <div className="flex gap-2 mb-4 items-center">
                    <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Overview</h2>
                </div>
                <SelectUsers />
            </header>
            <div className="flex justify-between">
                <div className="grow -ml-3"><Chart/></div>
                <div className="flex flex-col gap-4">
                    <Indicator
                        title="Profit"
                        amount="$495,000"
                        currencyFontColorClass="text-java"
                    />
                    <Indicator
                        title="Loss"
                        amount="$137,000"
                        currencyFontColorClass="text-redOrange"
                    />
                    <Indicator
                        title="Balance"
                        amount="$358,000"
                        currencyFontColorClass="text-crusta"
                    />
                </div>
            </div>
        </section>
    );
}