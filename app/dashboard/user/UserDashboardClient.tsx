"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import UserProfile from "./components/UserProfile";

interface Props {
  currentUser: {
    id: string;
    name: string;
    email: string;
    points?: number;
    profilePicture?: string;
    profileBanner?: string;
    gamesPlayed: number;
    mafiaCount: number;
    citizenCount: number;
    starRating: number;
  };
}

const ClientDashboard: React.FC<Props> = ({ currentUser: user }) => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.name}!</h1>
      <UserProfile user={user} isOwner={true} />
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
