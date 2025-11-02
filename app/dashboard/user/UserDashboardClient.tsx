"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import UserProfile from "./components/UserProfile";

interface UserDashboardProps {
  currentUser: {
    id: string;
    name: string;
    email: string;
    points: number;
    profilePicture: string;
    profileBanner: string;
    gamesPlayed: number;
    mafiaCount: number;
    citizenCount: number;
    starRating: number;
  };
}

const ClientDashboard: React.FC<UserDashboardProps> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to your Dashboard, {currentUser.name}!
      </h1>

      <UserProfile user={currentUser} isOwner={true} />

      <Button
        className="mt-6"
        onClick={() => router.push("/dashboard/user/games")}
      >
        View My Games
      </Button>
    </div>
  );
};

export default ClientDashboard;
