import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/app/components/ui/button";

export default async function AdminDashboard() {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");
  if (currentUser.role !== "ADMIN") redirect("/dashboard/user");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Welcome back, {currentUser.name}! You have administrative privileges.
        </p>

        <div className="flex justify-center mb-8">
          <Button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              User Management
            </h3>
            <p className="text-gray-600 mb-3">
              View, edit, or delete registered users.
            </p>
            <Button
              onClick={() => (window.location.href = "/dashboard/admin/users")}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Manage Users
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Statistics
            </h3>
            <p className="text-gray-600 mb-3">
              View global stats like weekly leaders and club activity rates.
            </p>
            <Button
              onClick={() => (window.location.href = "/dashboard/admin/stats")}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              View Stats
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
