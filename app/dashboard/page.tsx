import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function DashboardRedirect() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  if (currentUser.role === "ADMIN") {
    redirect("/dashboard/admin");
  } else {
    redirect("/dashboard/user");
  }

  return null; // never actually renders because of redirect
}
