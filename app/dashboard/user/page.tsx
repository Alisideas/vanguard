
import getCurrentUser  from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import ClientDashboard from "./UserDashboardClient";


export default async function UserDashboardPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login"); // not logged in
  }

  if (currentUser.role !== "USER") {
    redirect("/dashboard/admin"); // prevent non-user access
  }

  return <ClientDashboard user={currentUser} />;
}
