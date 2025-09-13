import Link from "next/link"

export default function RootLayout({ children }) {
    return (
        <div className="p-10">
            <div className='flex justify-end gap-4 font-bold w-full underline'>
                <Link href={"/admin/attendance"}>Attendance</Link>
                <Link href={"/admin/generate-routine"}>Generate Routine</Link>
                <Link href={"/admin/old-routine"}>Old Routine</Link>
                <Link href={"/admin/teachers-routine"}>Teachers Routine</Link>
                <Link href={"/admin/manage-teachers"}>Manage Teachers</Link>
            </div>
            {children}
        </div>
    )
}