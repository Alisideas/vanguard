import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import ClientDashboard from "./UserDashboardClient";

export default async function UserDashboardPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  if (currentUser.role.toLowerCase() !== "user") {
    redirect("/dashboard/admin");
  }

  // Compute stats safely
  const gamesPlayed = currentUser.games?.length ?? 0;
  const mafiaCount = currentUser.games?.filter((g) => g.role === "mafia").length ?? 0;
  const citizenCount = currentUser.games?.filter((g) => g.role === "citizen").length ?? 0;

  const ratings = currentUser.ratingsReceived ?? [];
  const starRating =
    ratings.length > 0
      ? ratings.reduce((acc: number, r) => acc + r.stars, 0) / ratings.length
      : 0;

  const safeUser = {
    id: currentUser.id,
    name: currentUser.name ?? "Unknown",
    email: currentUser.email ?? "",
    points: currentUser.points ?? 0,
    profilePicture: currentUser.image ?? "",
    profileBanner: "",
    gamesPlayed,
    mafiaCount,
    citizenCount,
    starRating,
  };

  return <ClientDashboard currentUser={safeUser} />;
}
