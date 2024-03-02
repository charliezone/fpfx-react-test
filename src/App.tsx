import { Leaderboard } from "./features/Leaderboard";
import { Overview } from "./features/Overview";

export default function App() {
  return (
    <main
      className="min-h-screen bg-primary py-150 flex flex-col items-center gap-9"
    >
      <Leaderboard />
      <Overview />
    </main>
  );
}
