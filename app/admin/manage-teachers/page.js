import { getTeachers } from '@/app/actions'
import ShowManageTeachersTable from './ShowTable'

const ManageTeachers = async () => {
    let teachers = await getTeachers()
    return (
        <div>
            <ShowManageTeachersTable teachers={teachers} />
        </div>
    )
}

export default ManageTeachers