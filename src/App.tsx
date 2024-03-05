import { Leaderboard } from "./features/Leaderboard";
import { Overview } from "./features/Overview";

export default function App() {
  return (
    <main
      className="min-h-screen bg-primary py-5 px-3 lg:py-150 lg:px-0 flex flex-col items-center gap-9"
    >
      <Leaderboard />
      <Overview />
    </main>
  );
}
