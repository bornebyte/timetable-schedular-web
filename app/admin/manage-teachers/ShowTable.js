"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";
import { Input } from '@/components/ui/input'
import { SquarePen, Trash } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { addTeacher, deleteTeacher, updateTeachers } from "@/app/actions"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const ShowManageTeachersTable = ({ teachers }) => {
    const router = useRouter()

    const newTeacherNameRef = useRef(null)
    const newTeacherDepartmentRef = useRef(null)
    const newTeacherSubjectRef = useRef(null)

    const updateTeacherFunction = async (id, name, department, subject, closePopover) => {
        const data = await updateTeachers(id, name, department, subject)
        if (data === 1) {
            router.refresh()
        }
    }

    const addTeacherFunction = async () => {
        const data = await addTeacher(newTeacherNameRef.current.value, newTeacherDepartmentRef.current.value, newTeacherSubjectRef.current.value)
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Manage Teachers</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button>Add New Teacher</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Add a new teacher</SheetTitle>
                                <SheetDescription>
                                    Fill in the details below to add a new teacher to the system.
                                </SheetDescription>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 py-4'>
                                <Input placeholder="Name" ref={newTeacherNameRef} />
                                <Input placeholder="Department" ref={newTeacherDepartmentRef} />
                                <Input placeholder="Subject" ref={newTeacherSubjectRef} />
                            </div>
                            <SheetClose asChild>
                                <Button onClick={addTeacherFunction}>Save Teacher</Button>
                            </SheetClose>
                        </SheetContent>
                    </Sheet>
                </div>
                <p>No teachers found.</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Manage Teachers</h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button>Add New Teacher</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Add a new teacher</SheetTitle>
                            <SheetDescription>
                                Fill in the details below to add a new teacher to the system.
                            </SheetDescription>
                        </SheetHeader>
                        <div className='flex flex-col gap-4 py-4'>
                            <Input placeholder="Name" ref={newTeacherNameRef} />
                            <Input placeholder="Department" ref={newTeacherDepartmentRef} />
                            <Input placeholder="Subject" ref={newTeacherSubjectRef} />
                        </div>
                        <SheetClose asChild>
                            <Button onClick={addTeacherFunction}>Save Teacher</Button>
                        </SheetClose>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="border rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Department</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Subject</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                        {teachers.map((teacher) => (
                            <tr key={teacher.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{teacher.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{teacher.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{teacher.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex items-center justify-center gap-4">
                                        <EditTeacherPopover teacher={teacher} onSave={updateTeacherFunction} />
                                    <Trash className='text-red-500' onClick={() => deleteTeacherFunction(teacher.id)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function EditTeacherPopover({ teacher, onSave }) {
    const nameRef = useRef(null);
    const departmentRef = useRef(null);
    const subjectRef = useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleSave = async () => {
        await onSave(
            teacher.id,
            nameRef.current.value,
            departmentRef.current.value,
            subjectRef.current.value
        );
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon"><SquarePen className="size-4" /></Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Edit Teacher</h4>
                        <p className="text-sm text-muted-foreground">Update the teacher&apos;s details.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Input placeholder="Name" ref={nameRef} defaultValue={teacher.name} />
                        <Input placeholder="Department" ref={departmentRef} defaultValue={teacher.department} />
                        <Input placeholder="Subject" ref={subjectRef} defaultValue={teacher.subject} />
                    </div>
                    <Button onClick={handleSave}>Save</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ShowManageTeachersTable