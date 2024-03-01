import { Leaderboard } from "./components/Leaderboard";
import { Overview } from "./components/Overview";

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
