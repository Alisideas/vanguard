import { NextResponse, NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";
export async function GET() {
    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        },
        orderBy: {
            createdAt: "asc",
        },
    });
    return NextResponse.json(allUsers);
}