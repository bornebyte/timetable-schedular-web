import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Users, Calendar, Printer, ThumbsUp, Clock, BrainCircuit, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Effortless Timetabling for Modern Institutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Say goodbye to scheduling headaches. Our intelligent algorithm generates optimized, conflict-free timetables in minutes, not days.
            </p>
            <Link href="/admin/generate-routine">
              <Button size="lg">
                Get Started for Free <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Timetable Scheduler?</h2>
              <p className="text-muted-foreground mt-2">Everything you need to streamline your academic scheduling.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <BrainCircuit className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automated Generation</h3>
                <p className="text-muted-foreground">Leverage our smart algorithm to create balanced and optimized schedules automatically, saving you countless hours.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <CheckCircle className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Conflict-Free Schedules</h3>
                <p className="text-muted-foreground">Avoid clashes for teachers, classes, and rooms. Our system intelligently detects and resolves conflicts.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Users className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
                <p className="text-muted-foreground">Effortlessly add, update, and manage teachers, subjects, and classes from a centralized dashboard.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Clock className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customizable Timings</h3>
                <p className="text-muted-foreground">Define custom time slots for different departments or academic years to fit your institution's unique structure.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Printer className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Printable Routines</h3>
                <p className="text-muted-foreground">Generate and print beautiful, easy-to-read routines for entire departments or individual teachers.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Calendar className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Attendance Tracking</h3>
                <p className="text-muted-foreground">Mark teacher attendance and get insights into availability, ensuring smooth daily operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Get Your Timetable in 4 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Dotted line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
                <svg width="100%" height="100%"><line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="2" stroke="hsl(var(--border))" strokeDasharray="8, 8" /></svg>
              </div>
              <div className="flex flex-col items-center z-10 bg-background px-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">1</div>
                <h3 className="font-semibold text-lg mb-2">Setup</h3>
                <p className="text-muted-foreground text-sm">Add your teachers, classes, and subjects.</p>
              </div>
              <div className="flex flex-col items-center z-10 bg-background px-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">2</div>
                <h3 className="font-semibold text-lg mb-2">Configure</h3>
                <p className="text-muted-foreground text-sm">Define your institution's specific time slots.</p>
              </div>
              <div className="flex flex-col items-center z-10 bg-background px-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">3</div>
                <h3 className="font-semibold text-lg mb-2">Generate</h3>
                <p className="text-muted-foreground text-sm">Click one button and let our algorithm do the work.</p>
              </div>
              <div className="flex flex-col items-center z-10 bg-background px-4">
                <div className="flex items-center justify-center size-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">4</div>
                <h3 className="font-semibold text-lg mb-2">Publish</h3>
                <p className="text-muted-foreground text-sm">Save, view, and print your new timetable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Loved by Educators Worldwide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <ThumbsUp className="size-8 text-yellow-400 mr-3" />
                  <div>
                    <p className="font-semibold">Principal Sharma</p>
                    <p className="text-sm text-muted-foreground">Green Valley High</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"This tool transformed our scheduling process. What used to take a week now takes about 15 minutes. It's a game-changer."</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <ThumbsUp className="size-8 text-yellow-400 mr-3" />
                  <div>
                    <p className="font-semibold">Dr. Anya Petrova</p>
                    <p className="text-sm text-muted-foreground">City College of Arts</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"The conflict resolution is flawless. We haven't had a single timetable clash since we started using this scheduler."</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <ThumbsUp className="size-8 text-yellow-400 mr-3" />
                  <div>
                    <p className="font-semibold">Mr. David Chen</p>
                    <p className="text-sm text-muted-foreground">Oakwood Academy</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"Incredibly intuitive and easy to use. The admin dashboard is clean, and managing teachers has never been simpler."</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Timetable Scheduler. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
