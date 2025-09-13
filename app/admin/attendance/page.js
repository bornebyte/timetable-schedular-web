import { getTeachers } from '@/app/actions';
import AttendanceClient from './AttendanceClient';

const AttendancePage = async () => {
  const teachers = await getTeachers();

  if (!teachers || teachers.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Mark Attendance</h1>
        <p>No teachers found. Please add teachers first.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mark Attendance for {new Date().toLocaleDateString()}</h1>
      <AttendanceClient teachers={teachers} />
    </div>
  );
};

export default AttendancePage;