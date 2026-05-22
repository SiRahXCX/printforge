import { getDisplayNameFromSlug } from '@/app/lib/categories'

type PageProps = {
    params: Promise<{categoryname: string}>
}

export default async function Page({ params }: PageProps) {
    const { categoryname } = await params
    const displayName = getDisplayNameFromSlug(categoryname)
    console.log(displayName)


    return (
        <></>
    )
}