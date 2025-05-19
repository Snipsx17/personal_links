import { AdminSidebar } from "@/components/shared";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main>
        <div>
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
