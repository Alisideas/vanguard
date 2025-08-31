// /pages/index.tsx
"use client";
import { useState } from "react";
import { createMafiaRoles } from "@/app/data/mafiaCards"; // Import the function to generate mafia roles
import { Button } from "@/app/components/ui/button"; // Button component
import { useRouter } from "next/navigation"; // Next.js router for navigation

export default function Home() {
  const [scenario, setScenario] = useState<string | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [players, setPlayers] = useState([]);
  const router = useRouter(); // Next.js router for navigation

  const handleScenarioSelection = (selectedScenario: string) => {
    setScenario(selectedScenario);
  };

  const handlePlayerCountSelection = (num: number) => {
    setNumPlayers(num);
    const roles = createMafiaRoles(num, scenario); // Generate roles based on scenario and player count
    setPlayers(roles as never[]); // Type assertion to fix type error
    // Navigate to the in-game page, passing the players' data as a query parameter
    router.push(
      `/in-game?players=${encodeURIComponent(JSON.stringify(roles))}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          سناریو خود را انتخاب کنید
        </h1>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex justify-center space-x-6 mb-6">
            <Button
              onClick={() => handleScenarioSelection("Bazpors")}
              variant="primary"
              className="px-6 py-3 text-lg font-medium"
            >
              سناریو بازپرس
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Button
              onClick={() => handleScenarioSelection("vanguard")}
              variant="primary"
              className="px-6 py-3 text-lg font-medium"
            >
              سناریو ونگارد
            </Button>
          </div>
        </div>

        {scenario && (
          <>
            <h2 className="text-2xl font-medium text-center text-gray-700 mb-4">
              تعداد بازیکنان را انتخاب کنید
            </h2>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => handlePlayerCountSelection(10)}
                className="px-6 py-3 text-lg font-medium"
              >
                ۱۰ بازیکن
              </Button>
              <Button
                onClick={() => handlePlayerCountSelection(12)}
                className="px-6 py-3 text-lg font-medium"
              >
                ۱۲ بازیکن
              </Button>
              <Button
                onClick={() => handlePlayerCountSelection(13)}
                className="px-6 py-3 text-lg font-medium"
              >
                ۱۳ بازیکن
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
