"use client"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from "next/image"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image src={"/logo.jpeg"} height={40} width={40} alt='logo' className='rounded-md' />
                    <span className="hidden font-bold sm:inline-block">Timetable Scheduler</span>
                  </Link>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href={"/"} className='transition-colors hover:text-foreground/80 text-foreground/60'>Home</Link>
                    <Link href={"/about"} className='transition-colors hover:text-foreground/80 text-foreground/60'>About</Link>
                    <Link href={"/admin/generate-routine"} className='transition-colors hover:text-foreground/80 text-foreground/60'>Admin</Link>
                  </nav>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="pr-0">
                    <div className="flex items-center pl-6">
                      <Link href="/" className="flex items-center">
                        <Image src={"/logo.jpeg"} height={40} width={40} alt='logo' className='rounded-md mr-2' />
                        <span className="font-bold">Timetable Scheduler</span>
                      </Link>
                    </div>
                    <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                      <div className="flex flex-col space-y-3">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/about"}>About</Link>
                        <Link href={"/admin/generate-routine"}>Admin</Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <ThemeToggle />
                  <SignedOut>
                    <SignInButton>
                      <Button>Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                  </SignedIn>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Toaster position="top-center" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}