"use client";
import { useState } from "react";
import { createMafiaRoles } from "./data/mafiaCards"; // Import the function to generate mafia roles
import { Card } from "./types/card"; // Import the Card type
import clsx from "clsx";


export default function Home() {
  const [scenario, setScenario] = useState<string | null>(null); // Store the selected scenario
  const [numPlayers, setNumPlayers] = useState<number | null>(null); // Null until user selects
  const [players, setPlayers] = useState<Card[]>([]); // Store the assigned players with roles
  const [isGameStarted, setIsGameStarted] = useState(false); // Whether the game has started
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // To show the current player's role
  const [revealedPlayers, setRevealedPlayers] = useState<boolean[]>([]); // Track which players' roles are revealed

  // Function to handle setting the scenario
  const handleScenarioSelection = (selectedScenario: string) => {
    setScenario(selectedScenario);
  };

  // Function to handle setting the number of players and generating the roles
  const handlePlayerCountSelection = (num: number) => {
    setNumPlayers(num);
    const roles = createMafiaRoles(num, scenario); // Generate roles based on scenario and player count
    setPlayers(roles);
    setRevealedPlayers(new Array(num).fill(false)); // Initialize all players as not revealed
    setIsGameStarted(true); // Mark that the game has started
  };

  // Function to handle showing the next player
  const revealNextPlayer = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1); // Go to the next player
    }
  };

  // Function to handle revealing the current player's role
  const revealPlayerRole = (index: number) => {
    const updatedRevealed = [...revealedPlayers];
    updatedRevealed[index] = true;
    setRevealedPlayers(updatedRevealed); // Mark the current player's role as revealed
  };

  // Function to reset the game
  const resetGame = () => {
    setScenario(null);
    setNumPlayers(null);
    setPlayers([]);
    setRevealedPlayers([]);
    setCurrentPlayerIndex(0);
    setIsGameStarted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        {!isGameStarted ? (
          <>
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
              Choose Your Scenario
            </h1>

            <div className="flex justify-center space-x-6 mb-6">
              <button
                onClick={() => handleScenarioSelection("Bazpors")}
                className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                سناریو بازپرس
              </button>
              <button
                onClick={() => handleScenarioSelection("Mafia")}
                className="px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Mafia
              </button>
            </div>

            {scenario && (
              <>
                <h2 className="text-2xl font-medium text-center text-gray-700 mb-4">
                  Select Number of Players
                </h2>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handlePlayerCountSelection(10)}
                    className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    10 Players
                  </button>
                  <button
                    onClick={() => handlePlayerCountSelection(12)}
                    className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    12 Players
                  </button>
                  <button
                    onClick={() => handlePlayerCountSelection(13)}
                    className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    13 Players
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
              Game In Progress
            </h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              {!revealedPlayers[currentPlayerIndex] ? (
                <div className="w-full h-48 bg-gray-300 text-center text-black flex items-center justify-center rounded-lg">
                  <span className="text-xl">
                    Seat {players[currentPlayerIndex].seatNumber}
                  </span>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      backgroundColor: players[currentPlayerIndex].color,
                      borderRadius: "0.5rem",
                      padding: "1.5rem",
                      marginBottom: "1.5rem",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      color: "white",
                      textAlign: "center",
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  >
                    <h2
                      className="text-4xl font-bold text-white-800 mb-2"
                      // style={{ color: players[currentPlayerIndex].color }}
                    >
                      {players[currentPlayerIndex].name}
                    </h2>
                    <div className="h-2/4">
                      <img
                        className="w-full h-1/2 object-cover rounded-lg mb-4"
                        src={players[currentPlayerIndex].image}
                        alt={players[currentPlayerIndex].name}
                      />
                    </div>

                    <p className="text-white-600 mb-2">
                      {players[currentPlayerIndex].description}
                    </p>
                    <p className="text-white-500">
                      Seat Number: {players[currentPlayerIndex].seatNumber}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-center space-x-4">
              {revealedPlayers[currentPlayerIndex] ? (
                currentPlayerIndex < players.length - 1 ? (
                  <button
                    onClick={revealNextPlayer}
                    className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
                  >
                    Next Player
                  </button>
                ) : (
                  <div className="text-xl text-green-600 font-medium">
                    All players got their role!
                  </div>
                )
              ) : (
                <button
                  onClick={() => revealPlayerRole(currentPlayerIndex)}
                  className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Reveal Role
                </button>
              )}
            </div>

            {currentPlayerIndex === players.length - 1 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition"
                >
                  Restart Game
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
