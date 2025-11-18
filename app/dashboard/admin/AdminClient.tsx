"use client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

// --- Shadcn Components Imports ---
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; // Optional but adds a nice touch
import { ChevronLeft, Users, TrendingUp, LogOut } from "lucide-react"; // Icons for a professional look

interface AdminClientProps {
  currentUser: SafeUser | null;
}

const AdminClient = ({ currentUser }: AdminClientProps) => {
  // Helper function for navigating
  const navigate = (path: string) => () => {
    window.location.href = path;
  };

  return (
    // Set global direction to RTL
    <div
      dir="rtl"
      className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* HEADER: Title, Welcome, and Logout Button */}
        <div className="flex items-center justify-between pb-4 border-b">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              پنل مدیریت
            </h1>

            {/* Welcome message using Badge for professionalism */}
            <p className="text-sm text-muted-foreground">
              خوش آمدید،{" "}
              <Badge variant="secondary" className="mx-1">
                {currentUser?.name}
              </Badge>
              ! شما دسترسی‌های مدیریتی دارید.
            </p>
          </div>

          {/* Logout Button with Icon */}
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            خروج از حساب
          </Button>
        </div>

        <Separator />

        {/* DASHBOARD CARDS: Redesigning the action items using Shadcn Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* --- 1. User Management Card --- */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold text-orange-600">
                مدیریت کاربران
              </CardTitle>
              <Users className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                این بخش به شما امکان می‌دهد تا کاربران ثبت‌نام شده را مشاهده،
                ویرایش، یا حذف نمایید.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                onClick={navigate("/dashboard/admin/users")}
                className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-700 dark:hover:bg-orange-800 text-white flex items-center justify-between"
              >
                <span>ورود به بخش کاربران</span>
                {/* Use ChevronLeft for RTL navigation arrow */}
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* --- 2. Statistics Card --- */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold text-teal-600">
                آمار و تحلیل
              </CardTitle>
              <TrendingUp className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                مشاهده آمار کلی سیستم مانند لیدرهای هفتگی و نرخ فعالیت کلوپ‌ها
                برای تصمیم‌گیری بهتر.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                onClick={navigate("/dashboard/admin/stats")}
                className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-800 text-white flex items-center justify-between"
              >
                <span>مشاهده آمار</span>
                {/* Use ChevronLeft for RTL navigation arrow */}
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminClient;
