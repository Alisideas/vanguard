
import getCurrentUser  from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import ClientDashboard from "./UserDashboardClient";
import UserProfile from "./components/UserProfile";

export default async function UserDashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login"); // not logged in
  }

  if (user.role !== "USER") {
    redirect("/dashboard/admin"); // prevent non-user access
  }

  return <UserProfile user={user} />;
}
