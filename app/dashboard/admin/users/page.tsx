"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Define your User type
interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  image?: string | null;
}

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [allUsersBackup, setAllUsersBackup] = useState<User[]>([]); // for search reset

  const getAllUsers = async () => {
    try {
      const response = await fetch("/api/all-users");
      const data: User[] = await response.json();
      setUsers(data);
      setAllUsersBackup(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6" dir="rtl">
      <Card className="shadow-xl border border-neutral-800/40 bg-neutral-900/40 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">
            کاربران مدیریت شده
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* Search Input */}
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full mb-4 px-4 py-2 rounded-xl bg-neutral-800/40 border border-neutral-700 text-white focus:outline-none"
            onChange={(e) => {
              const value = e.target.value.toLowerCase();

              if (value.trim() === "") {
                setUsers(allUsersBackup); // reset
                return;
              }

              const filtered = allUsersBackup.filter(
                (u) =>
                  (u.name || "").toLowerCase().includes(value) ||
                  (u.email || "").toLowerCase().includes(value)
              );

              setUsers(filtered);
            }}
          />

          <Separator className="my-4" />

          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/40 border border-neutral-700 hover:bg-neutral-800 transition"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.image || ""} />
                    <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-neutral-400 text-sm">{user.email}</p>
                  </div>
                </div>

                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {user.role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AllUsers;
