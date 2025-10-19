"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Card } from "../types/card";
import { Button } from "../components/ui/button";
import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const InGame = () => {
  const router = useRouter();
  const [players, setPlayers] = useState<Card[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [revealedPlayers, setRevealedPlayers] = useState<boolean[]>([]);
  const [showRolesPopup, setShowRolesPopup] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryPlayers = searchParams.get("players");
    if (queryPlayers) {
      const parsedPlayers = JSON.parse(queryPlayers as string);
      setPlayers(parsedPlayers);
      setRevealedPlayers(new Array(parsedPlayers.length).fill(false));
    }
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

        {/* Current Player Card */}
        {/* Current Player Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 relative">
          {!revealedPlayers[currentPlayerIndex] ? (
            <div className="w-full h-98 flex flex-col items-center justify-center relative">
              {/* Seat Number Display */}
              <span className="text-xl mb-4 text-gray-800">
                صندلی {players[currentPlayerIndex]?.seatNumber}
              </span>

              {/* Mafia Mask Overlay */}
              <div
                className="flex items-center justify-center cursor-pointer transition-transform rounded-lg"
                onClick={() => revealPlayerRole(currentPlayerIndex)}
              >
                <img
                  src="/images/mafia-mask.png" // replace with your mask image
                  alt="Mafia Mask"
                  className="w-94 h-94 object-contain animate-pulse hover:scale-110 transition-transform"
                />
              </div>
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
              <div className="flex justify-center">
                {revealedPlayers[currentPlayerIndex] ? (
                  currentPlayerIndex < players.length - 1 ? (
                    <Button
                      onClick={revealNextPlayer}
                      variant="primary"
                      className="px-6 py-3 justify-center items-center text-lg font-medium"
                    >
                      بازیکن بعدی
                    </Button>
                  ) : (
                    <div className="flex flex-col text-xl text-green-600 font-medium justify-center items-center">
                      همه بازیکنان نقش خود را دریافت کردند!
                      <br />
                      <Link
                        href="/"
                        className="flex justify-center items-center text-blue-500 hover:underline mt-4 inline-block bg-gray-100 px-4 py-2 rounded-lg mb-4"
                      > 
                        بازگشت به صفحه اصلی
                      </Link>
                    </div>
                  )
                ) : (
                  <></>
                )}
              </div>
            </ShadCard>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* Show All Roles Button */}
          <Button
            onClick={() => setShowRolesPopup(true)}
            variant="secondary"
            className="px-6 py-3 text-lg font-medium bg-orange-500 hover:bg-orange-600 text-white"
          >
            نمایش همه نقش‌ها
          </Button>
        </div>
      </div>

      {/* Roles Popup */}
      <AnimatePresence>
        {showRolesPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowRolesPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-3xl text-center relative overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                onClick={() => setShowRolesPopup(false)}
              >
                ×
              </button>

              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                نقش‌های بازیکنان
              </h4>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((p, index) => {
                  const revealed = revealedPlayers[index];
                  return (
                    <ShadCard
                      key={index}
                      className={`text-center border-2 ${
                        revealed
                          ? "border-[#f7941f] shadow-lg"
                          : "border-gray-200"
                      }`}
                    >
                      <CardHeader>
                        <CardTitle>{p.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div
                          style={{
                            backgroundColor: p.color,
                            borderRadius: "0.5rem",
                            padding: "1rem",
                            color: "white",
                            textAlign: "center",
                            opacity: revealed ? 1 : 0.5, // semi-transparent if not revealed
                            transition: "opacity 0.3s",
                          }}
                        >
                          <img
                            className="w-full h-24 object-cover rounded-lg mb-2"
                            src={p.image}
                            alt={p.name}
                          />
                          <p className="text-sm">{p.description}</p>
                          <p className="mt-1 text-xs">
                            شماره صندلی: {p.seatNumber}
                          </p>
                          {revealed && (
                            <span className="mt-2 inline-block px-2 py-1 text-xs bg-[#f7941f] rounded-full">
                              فاش شده
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </ShadCard>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InGame;
