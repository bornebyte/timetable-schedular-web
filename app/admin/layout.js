import Link from "next/link"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function RootLayout({ children }) {
    return (
        <SidebarProvider>
            <div className="w-full flex">
                <AppSidebar/>
                <main className="flex-1 p-4 sm:p-6 md:p-8">
                    <SidebarTrigger className="md:hidden mb-4" />
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}