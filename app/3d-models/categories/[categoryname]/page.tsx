import { getDisplayNameFromSlug } from '@/app/lib/categories'
import { getModelsByCategory } from '@/app/lib/models'
import ModelsGrid from '@/components/ModelsGrid'

type PageProps = {
    params: Promise<{categoryname: string}>
}

export default async function Page({ params }: PageProps) {
    const { categoryname } = await params
    const displayName = getDisplayNameFromSlug(categoryname)
    const models = await getModelsByCategory(categoryname)

    return (
        <main>
            <ModelsGrid 
                title={displayName}
                models={models}
            />
        </main>
    )
}