import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Time Table Schedular',
  description: 'Developed by Shubham Shah',
}

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center p-4 gap-4 h-16 mt-6">
            <Image src={"/logo.jpeg"} height={50} width={50} alt='logo' className='rounded-md' />
            <div className='flex gap-4'>
              <Link href={"/"} className='font-semibold'>Home</Link>
              <Link href={"/about"} className='font-semibold'>About</Link>
              <Link href={"/admin/generate-routine"} className='font-semibold'>Admin</Link>
            </div>
            <SignedOut>
              <SignInButton className="font-semibold" />
              <SignUpButton>
                <Button>
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  )
}