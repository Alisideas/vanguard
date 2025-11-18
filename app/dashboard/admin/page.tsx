import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

const AdminDashboard = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");
  if (currentUser.role !== "ADMIN") redirect("/dashboard/user");
  return (
    <div>
      <AdminClient currentUser={currentUser}/>
    </div>
  );
};

export default AdminDashboard;
