import { Users, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-background text-foreground">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Page Header */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Us</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are passionate about simplifying complex problems with elegant software solutions.
                    </p>
                </section>

                {/* Our Mission */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <Target className="size-12 text-primary mb-4" />
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to empower educational institutions by providing an intelligent, intuitive, and reliable timetabling tool. We believe that administrators and educators should focus on what they do best—teaching and inspiring students—not on the tedious and error-prone task of manual scheduling. By automating the timetabling process, we aim to free up valuable time and resources, reduce stress, and create a more organized and efficient learning environment for everyone.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/about1.webp"
                                alt="Our Mission"
                                width={500}
                                height={300}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="md:w-1/2">
                            <Lightbulb className="size-12 text-primary mb-4" />
                            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Timetable Scheduler was born from a simple observation: a local school was spending weeks every semester manually creating and re-creating their class schedules. The process was frustrating, inefficient, and often resulted in conflicts. As a software developer, Shubham Shah saw an opportunity to apply technology to solve this real-world problem. What started as a small project has now grown into a robust platform dedicated to making academic scheduling a seamless experience.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/about2.webp"
                                alt="Our Story"
                                width={500}
                                height={300}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Meet the Creator */}
                <section className="text-center">
                    <Users className="size-12 text-primary mb-4 mx-auto" />
                    <h2 className="text-3xl font-bold mb-4">Meet the Creator</h2>
                    <div className="max-w-md mx-auto">
                        <p className="font-semibold text-xl">Shubham Shah</p>
                        <p className="text-primary mb-4">Lead Developer & Founder</p>
                        <p className="text-muted-foreground">
                            Shubham is a dedicated developer with a passion for building tools that make a difference. With a background in computer science and a keen eye for user experience, he leads the development of the Timetable Scheduler, constantly working to improve its features and performance.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Timetable Scheduler. Developed by Shubham Shah.</p>
                </div>
            </footer>
        </div>
    );
}