import Icon from './leaderboard-icon.svg';

export function Leaderboard() {
    return (
        <section className="container bg-secondary rounded-xl py-4 px-5">
            <header className="flex gap-2 mb-4">
                <img src={Icon} alt="Leaderboard icon" /><h2 className="text-parchment font-bold text-lg leading-27">Leaderboard</h2>
            </header>
        </section>
    );
}