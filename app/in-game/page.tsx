// /pages/in-game.tsx
"use client";
import { useRouter } from "next/navigation"; // To access the router query params
import { useState, useEffect } from "react";
import { Card } from "../types/card"; // Import the Card type
import { Button } from "../components/ui/button";
import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // ShadCN Card components

const InGame = () => {
  const router = useRouter();
  const [players, setPlayers] = useState<Card[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [revealedPlayers, setRevealedPlayers] = useState<boolean[]>([]);

  useEffect(() => {
    // Parse the players data from the query string when the page loads
    const searchParams = new URLSearchParams(window.location.search);
    const queryPlayers = searchParams.get("players");
    if (queryPlayers) {
      setPlayers(JSON.parse(queryPlayers as string)); // Convert the string back to an array
      setRevealedPlayers(
        new Array(JSON.parse(queryPlayers as string).length).fill(false)
      ); // Initialize revealed array
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const revealNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    }
  };

  const revealPlayerRole = (index: number) => {
    const updatedRevealed = [...revealedPlayers];
    updatedRevealed[index] = true;
    setRevealedPlayers(updatedRevealed);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          بازی در حال اجراست
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          {!revealedPlayers[currentPlayerIndex] ? (
            <div className="w-full h-48 bg-gray-300 text-center text-black flex items-center justify-center rounded-lg">
              <span className="text-xl">
                صندلی {players[currentPlayerIndex]?.seatNumber as string}
              </span>
            </div>
          ) : (
            <ShadCard>
              <CardHeader>
                <CardTitle>{players[currentPlayerIndex]?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  style={{
                    backgroundColor: players[currentPlayerIndex]?.color,
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    marginBottom: "1.5rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <div className="h-2/4">
                    <img
                      className="w-full h-1/2 object-cover rounded-lg mb-4"
                      src={players[currentPlayerIndex]?.image}
                      alt={players[currentPlayerIndex]?.name}
                    />
                  </div>

                  <p className="text-white-600 mb-2">
                    {players[currentPlayerIndex]?.description}
                  </p>
                  <p className="text-white-500">
                    شماره صندلی: {players[currentPlayerIndex]?.seatNumber}
                  </p>
                </div>
              </CardContent>
            </ShadCard>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          {revealedPlayers[currentPlayerIndex] ? (
            currentPlayerIndex < players.length - 1 ? (
              <Button
                onClick={revealNextPlayer}
                variant="primary"
                className="px-6 py-3 text-lg font-medium"
              >
                بازیکن بعدی
              </Button>
            ) : (
              <div className="text-xl text-green-600 font-medium">
                همه بازیکنان نقش خود را دریافت کردند!
              </div>
            )
          ) : (
            <Button
              onClick={() => revealPlayerRole(currentPlayerIndex)}
              variant="secondary"
              className="px-6 py-3 text-lg font-medium"
            >
              فاش کردن نقش
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InGame;
