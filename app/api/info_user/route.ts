import prisma from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ message: "Unauthorize" }, { status: 401 });
    }

    let existingUser = prisma.user.findFirst({
      where: { id: userId },
      include: {
        links: true,
      },
    });

    if (!existingUser) {
      existingUser = prisma.user.create({
        data: {
          id: userId,
          name: "user",
          userName: `user_${Date.now()}`,
          links: {
            create: [],
          },
        },
        include: {
          links: true,
        },
      });
    }

    return NextResponse.json(existingUser);
  } catch (error) {
    console.log(`[GET_USER_FIRST_LOGIN] ${error}`);
    return NextResponse.json(
      { message: "error fetching user" },
      { status: 500 },
    );
  }
}
