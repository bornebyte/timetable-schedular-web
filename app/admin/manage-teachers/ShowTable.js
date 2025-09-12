"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input'
import { SquarePen, Trash } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { addTeacher, deleteTeacher, updateTeachers } from "@/app/actions"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const ShowManageTeachersTable = ({ teachers }) => {
    const router = useRouter()
    const nameRef = useRef(null)
    const departmentRef = useRef(null)
    const subjectRef = useRef(null)

    const newTeacherNameRef = useRef(null)
    const newTeacherDepartmentRef = useRef(null)
    const newTeacherSubjectRef = useRef(null)

    const updateTeacherFunction = async (id, name, department, subject) => {
        let data = await updateTeachers(id, name, department, subject)
        if (data === 1) {
            router.refresh()
        }
    }

    const addTeacherFunction = async () => {
        let data = await addTeacher(newTeacherNameRef.current.value, newTeacherDepartmentRef.current.value, newTeacherSubjectRef.current.value)
        if (data === 1) {
            router.refresh()
        }
    }
    const deleteTeacherFunction = async (id) => {
        let data = await deleteTeacher(id)
        if (data === 1) {
            router.refresh()
        }
    }


    if (!teachers || teachers.length === 0) {
        return (
            <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Manage Teachers</h1>
                    <Link href="/admin/manage-teachers/add">
                        <Button>Add New Teacher</Button>
                    </Link>
                </div>
                <p>No teachers found.</p>
            </div>
        )
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Manage Teachers</h1>
                <Popover>
                    <PopoverTrigger className="px-4 font-bold">Add New Teacher</PopoverTrigger>
                    <PopoverContent>
                        <div className='flex flex-col gap-4'>
                            <Input placeholder="Name" ref={newTeacherNameRef} />
                            <Input placeholder="Department" ref={newTeacherDepartmentRef} />
                            <Input placeholder="Subject" ref={newTeacherSubjectRef} />
                        </div>
                        <div className='flex justify-center w-full mt-4'><Button onClick={addTeacherFunction}>Save</Button></div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Department</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Subject</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{teacher.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{teacher.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{teacher.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 flex justify-center gap-4">
                                    <Popover>
                                        <PopoverTrigger className="px-4"><SquarePen /></PopoverTrigger>
                                        <PopoverContent>
                                            <div className='flex flex-col gap-4'>
                                                <Input placeholder="Name" ref={nameRef} defaultValue={teacher.name} />
                                                <Input placeholder="Department" ref={departmentRef} defaultValue={teacher.department} />
                                                <Input placeholder="Subject" ref={subjectRef} defaultValue={teacher.subject} />
                                            </div>
                                            <div className='flex justify-center w-full mt-4'><Button onClick={() => updateTeacherFunction(teacher.id, nameRef.current.value, departmentRef.current.value, subjectRef.current.value)}>Save</Button></div>
                                        </PopoverContent>
                                    </Popover>
                                    {/* <Link href={`/admin/manage-teachers/edit/${teacher.id}`}><Button variant="outline">Edit</Button></Link> */}
                                    <Trash className='text-red-500' onClick={() => deleteTeacherFunction(teacher.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowManageTeachersTable