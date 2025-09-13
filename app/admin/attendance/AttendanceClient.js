'use client';

import { useState } from 'react';
import { saveAttendance } from '@/app/actions';
import { Button } from '@/components/ui/button';

const AttendanceClient = ({ teachers }) => {
    const [attendance, setAttendance] = useState(() => {
        const initialState = {};
        teachers.forEach(teacher => {
            initialState[teacher.id] = 'present'; // Default to 'present'
        });
        return initialState;
    });

    const handleStatusChange = (teacherId, status) => {
        setAttendance(prev => ({ ...prev, [teacherId]: status }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const absentTeachers = Object.entries(attendance)
            .filter(([, status]) => status === 'absent')
            .map(([teacherId]) => parseInt(teacherId, 10));

        const result = await saveAttendance(absentTeachers);

        if (result) {
            alert('Attendance saved successfully!');
        } else {
            alert('Failed to save attendance.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
            <div className="space-y-4">
                {teachers.map(teacher => (
                    <div key={teacher.id} className="flex items-center justify-between p-3 rounded-md border dark:border-gray-700">
                        <span className="font-medium dark:text-white">{teacher.name}</span>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name={`teacher-${teacher.id}`} value="present" checked={attendance[teacher.id] === 'present'} onChange={() => handleStatusChange(teacher.id, 'present')} className="form-radio h-4 w-4 text-blue-600" />
                                <span className="dark:text-gray-300">Present</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name={`teacher-${teacher.id}`} value="absent" checked={attendance[teacher.id] === 'absent'} onChange={() => handleStatusChange(teacher.id, 'absent')} className="form-radio h-4 w-4 text-red-600" />
                                <span className="dark:text-gray-300">Absent</span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-end">
                <Button type="submit">Save Attendance</Button>
            </div>
        </form>
    );
};

export default AttendanceClient;