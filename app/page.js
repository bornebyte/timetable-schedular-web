import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { generateRoutine, setTimings } from "./actions";

export default function Home() {
  // setTimings()
  return (
    <div>
      <h2 className="text-7xl font-semibold text-center mt-32">Timetabling made simple for schools/universities.</h2>
      <p className="text-center text-xl mt-10">Hundreds of schools of all sizes use Bornebyte to cut down timetable generation duration by 90%</p>
      <div className="text-center mt-10">
        <Link href={"/admin/generate-routine"}><Button>Get Started</Button></Link>
      </div>
    </div>
  );
}
