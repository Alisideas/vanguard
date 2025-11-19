"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import type { User } from "@/app/types/user";

interface UserSelectProps {
  onSelect: (users: User[]) => void;
}

export default function UserSelect({ onSelect }: UserSelectProps) {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/all-users")
      .then((r) => r.json())
      .then((data: User[]) => setAllUsers(data));
  }, []);

  const toggleUser = (user: User) => {
    const exists = selectedUsers.some((u) => u.id === user.id);

    const updated = exists
      ? selectedUsers.filter((u) => u.id !== user.id)
      : [...selectedUsers, user];

    setSelectedUsers(updated);
    onSelect(updated);
  };

  const filtered = allUsers.filter((u) =>
    (u.name ?? "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6 bg-white p-4 rounded-xl border shadow-md">
      <h4 className="text-xl font-bold mb-4 text-gray-800">انتخاب بازیکنان</h4>

      <Input
        placeholder="جستجوی کاربر…"
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="max-h-72 overflow-y-auto space-y-2">
        {filtered.map((user) => (
          <button
            type="button"
            key={user.id}
            onClick={() => toggleUser(user)}
            className={`w-full text-right flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${
              selectedUsers.some((u) => u.id === user.id)
                ? "bg-[#f7941f]/20 border-[#f7941f]"
                : "hover:bg-gray-100 border-gray-300"
            }`}
          >
            <span>{user.name || "بدون نام"}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
