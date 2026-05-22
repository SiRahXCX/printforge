import Link from 'next/link'
import { getAllModels } from '@/app/lib/models'
import ModelCard from '@/components/ModelCard'

export default async function ModelsPage() {
    const models = await getAllModels()
    const modelCards = models.map(model => (
        <Link href={'/3d-models/'+model.id} key={model.id} className="mb-9">
            <ModelCard {...model} />
        </Link>
    ))

    return (
        <main>
            <div>
                <div className="font-heading text-[32px] font-bold mb-5">3D models</div>
                <div className="flex flex-row flex-wrap justify-between items-center">
                    {modelCards}
                </div>
            </div>
        </main>
    )
}