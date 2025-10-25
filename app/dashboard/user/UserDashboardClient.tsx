"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  points?: number;
}

interface Props {
  user: User;
}

const ClientDashboard: React.FC<Props> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">خوش آمدید، {user.name}!</h1>
      <p className="mb-2">ایمیل: {user.email}</p>
      <p className="mb-4">امتیاز: {user.points ?? 0}</p>

      <div className="flex gap-4 mb-6">
        <Button onClick={() => router.push("/standings")}>جدول رتبه‌بندی</Button>
        <Button onClick={() => router.push("/games")}>بازی‌ها</Button>
      </div>

      <Button
        onClick={async () => {
          await fetch("/api/auth/signout");
          router.push("/");
        }}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        خروج
      </Button>
    </div>
  );
};

export default ClientDashboard;
