import { generateRoutine, saveRoutine } from '@/app/actions'
import { Button } from '@/components/ui/button'
import ShowRoutines from './ShowRoutines'

const GenerateRoutine = async () => {
    let output = await generateRoutine()
    return (
        <div className="p-8">
            <ShowRoutines output={output} />
        </div>
    )
}

export default GenerateRoutine