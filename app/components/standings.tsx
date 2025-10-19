"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type PlayerStanding = {
  name: string;
  image: string;
  rating: number;
  votes: number;
};

type StandingsProps = {
  weekly: PlayerStanding[];
  monthly: PlayerStanding[];
  yearly: PlayerStanding[];
};

const Standings = ({ weekly, monthly, yearly }: StandingsProps) => {
  const [period, setPeriod] = useState<"weekly" | "monthly" | "yearly">("weekly");
  const [showMore, setShowMore] = useState(false);

  // Sort players by rating descending
  const sortPlayers = (players: PlayerStanding[]) =>
    [...players].sort((a, b) => b.rating - a.rating);

  const data =
    period === "weekly"
      ? sortPlayers(weekly)
      : period === "monthly"
      ? sortPlayers(monthly)
      : sortPlayers(yearly);

  const getRowBg = (index: number) => {
    if (index === 0) return "bg-yellow-300/30"; // Gold
    if (index === 1) return "bg-gray-300/30";   // Silver
    if (index === 2) return "bg-yellow-700/30"; // Bronze
    return "bg-white";
  };

  const visiblePlayers = showMore ? data.slice(0, 15) : data.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        جدول بهترین بازیکنان
      </h2>

      {/* Period Selector */}
      <div className="flex justify-center gap-4 mb-8">
        {["weekly", "monthly", "yearly"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p as "weekly" | "monthly" | "yearly")}
            className={`px-4 py-2 font-medium rounded ${
              period === p
                ? "bg-[#f7941f] text-white hover:bg-[#d97706]"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {p === "weekly"
              ? "هفته‌ای"
              : p === "monthly"
              ? "ماهانه"
              : "سالانه"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">بازیکن</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">میانگین امتیاز</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">تعداد رأی‌ها</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {visiblePlayers.map((player, index) => (
              <motion.tr
                key={player.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${getRowBg(index)} cursor-pointer`}
              >
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{index + 1}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <span>{player.name}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{player.rating.toFixed(1)}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{player.votes}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load More Button */}
      {!showMore && data.length > 5 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 bg-[#f7941f] hover:bg-[#d97706] text-white font-medium rounded"
          >
            نمایش نفرات بعدی
          </button>
        </div>
      )}
    </section>
  );
};

export default Standings;