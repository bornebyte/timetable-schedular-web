import Link from "next/link"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function RootLayout({ children }) {
    return (
        // <div className="w-full">
        <SidebarProvider>
            <AppSidebar/>
            <main className="w-full p-4 sm:p-6 md:p-8">
                <SidebarTrigger />
                {children}
            </main>
            <div className="flex">
                <AppSidebar/>
                <main className="flex-1 p-4 sm:p-6 md:p-8">
                    <SidebarTrigger className="md:hidden mb-4" />
                    {children}
                </main>
            </div>
        </SidebarProvider>
        // </div> 
    )
}