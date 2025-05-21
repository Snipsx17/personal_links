"use client";

import { TreePalm } from "lucide-react";
import { LinkProfile } from "./Components";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@/lib/generated/prisma";
import { LoaderProfile } from "@/components/shared";
import { StepConfigUserProvider } from "@/context";

export default function HomePage() {
  const { user } = useUser();
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [reload, setReload] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<(User & { links: Link[] }) | null>(
    null,
  );

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info_user");
      const data: User & { links: Link[] } = await response.json();
      setUserInfo(data);
      setIsFirstVisit(data.firstLogin);
    };

    checkFirstLogin();

    if (reload) {
      checkFirstLogin();
      setReload(false);
    }
  }, [user?.id, user, reload]);

  if (!user || !userInfo) {
    return <LoaderProfile />;
  }

  if (isFirstVisit) {
    return (
      <StepConfigUserProvider>
        <p>Is the first visit...</p>
      </StepConfigUserProvider>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        {/* Link profile */}
        <div>
          <LinkProfile />

          <div>
            <p>Profile info...</p>
          </div>
          <div className="mt-20 text-center flex flex-col items-center">
            <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
              <TreePalm className="h-20 w-20" strokeWidth={1} />
              <p>Show the world who you are.</p>
              <p>Add a link to get started.</p>
            </div>
          </div>
        </div>
        {/* Profile preview */}
        <div>
          <p>Profile preview...</p>
        </div>
      </div>
    </div>
  );
}
