import { AdminSidebar } from "@/components/shared";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="w-full">
        <div>
          <SidebarTrigger />
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
}
