import { getAllModels } from '@/app/lib/models'
import ModelsGrid from '@/components/ModelsGrid'
import { Model } from '../types';
import { JSX } from 'react';
import Form from 'next/form'

export default async function ModelsPage({ 
    searchParams 
}: {
    searchParams: Promise<{[key: string]: string}>
}) {
    const search = (await searchParams)?.search?.toLowerCase()
    const models = (await getAllModels())
        .filter((model: Model): boolean => search ?
        (
            model.name.toLowerCase().includes(search) || 
            model.description.toLowerCase().includes(search)
        ) : true
    )

    return (
        <div>
            <div className="flex flex-row items-center">
                <Form action="/3d-models">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        className="border border-gray-400 rounded-md"
                    />
                </Form>
                <Form action="/3d-models">
                    <input type="submit" name="" value="Clear" className="ms-4 text-black/80"/>
                </Form>
            </div>
            <ModelsGrid title="3D Models" models={models} />
        </div>
    )
}