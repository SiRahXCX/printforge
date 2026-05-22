import { getModelById } from '@/app/lib/models'
import ModelDetailCard from '@/components/ModelDetailCard'

export default async function ModelDetailPage({ params }: { params: Promise<{id: string}>}) {
    const { id } = await params 
    const model = await getModelById(id)

    return (
        <main>
            <ModelDetailCard {...model} />
        </main>
    )
}