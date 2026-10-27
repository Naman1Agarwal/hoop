
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// TypeScript: Defines what a Player looks like
type Player = {
  id: number;
  name: string;
  height: string;
};

// Sample data (later this will come from Supabase)
const players: Player[] = [
  { id: 1, name: "John Smith", height: "6'2\"" },
  { id: 2, name: "Mike Johnson", height: "6'5\"" },
];

// React component, rendered by Next.js
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Player Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {players.map((player) => (
          <Card key={player.id}>
            <CardHeader>
              <CardTitle>{player.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-500">Height</p>
              <p className="text-2xl font-semibold">
                {player.height}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

