import { getRoutine } from '@/app/actions';

const groupRoutineByTeacher = (routineByDept) => {
    const routineByTeacher = {};
    if (!routineByDept || typeof routineByDept !== 'object') {
        return routineByTeacher;
    }

    for (const department in routineByDept) {
        const routines = routineByDept[department];
        if (Array.isArray(routines)) {
            routines.forEach(routine => {
                if (!routineByTeacher[routine.name]) {
                    routineByTeacher[routine.name] = [];
                }
                routineByTeacher[routine.name].push(routine);
            });
        }
    }
    return routineByTeacher;
};

const TeachersRoutine = async () => {
    const routineByDept = await getRoutine();
    const routineByTeacher = groupRoutineByTeacher(routineByDept);

    if (Object.keys(routineByTeacher).length === 0) {
        return <div className="p-8 text-center">No routine data found.</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Teachers &apos; Routines</h1>
            {Object.entries(routineByTeacher).map(([teacherName, routines]) => (
                <div key={teacherName} className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">{teacherName}</h2>
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Class Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Department</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Subject</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Time</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                                {routines.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.class_number}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.department}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.subject}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeachersRoutine